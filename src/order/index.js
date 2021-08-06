import axios from "axios";
import React, {useEffect, useState} from 'react'
import useToken from "../gateway/hook/useToken";
import {Redirect} from "react-router";
import Header from "../header";
import {
  CartTitleHeaderWrapper,
  CartTitleWrapper,
  SectionWrapper,
  OrderTableWrapper,
} from "../style";
import * as actionCreators from "../order/store/actionCreators";
import {connect} from "react-redux";
import CollapsibleTable from "./table/CollapsibleTable";


async function validate(token) {

  return await axios({
    method: 'post',
    url: 'http://localhost:8080/user/validate',
    data: {
      cookie : token
    }
  }).then(response => response.data.code === 0)
    .catch(error => false)

}

const Order = (props) => {

  const {token, setToken} = useToken();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (!mount) {
      validate(token).then(function(response) {
        if (!response) {
          setToken(null);
        }
      })
      props.getOrderData(token);
      setMount(true);
    }
  }, [mount, props, setToken, token]);

  if (token === null) {
    return <Redirect to="/signin"/>;
  }

  const orders = props.orderList.toJS();

  return (
    <div>
      <Header/>
      <SectionWrapper>
        <CartTitleHeaderWrapper>
          <div>
            <CartTitleWrapper>Your Order</CartTitleWrapper>
          </div>
        </CartTitleHeaderWrapper>
        <OrderTableWrapper>
        <CollapsibleTable orderList={orders}/>
        </OrderTableWrapper>
      </SectionWrapper>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    orderList: state.getIn(['order', 'orderList'])
  }
}

const mapDispatch = (dispatch) => ({
  getOrderData(token) {
    const action = actionCreators.getOrder(token);
    dispatch(action);
  }
})

export default connect(mapStateToProps, mapDispatch)(Order);
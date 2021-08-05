import React, {useEffect, useState} from 'react'
import Header from "../header/index";
import {
  CartTableWrapper,
  CartPaymentWrapper,
  CartTitleHeaderWrapper,
  CartTitleWrapper,
  SectionWrapper,
} from "../style";
import {connect} from "react-redux";
import * as actionCreators from "../cart/store/actionCreators";
import useToken from "../gateway/hook/useToken";

const Cart = (props) => {

  const {token} = useToken();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (!mount) {
      props.getCheckoutListData(token);
      setMount(true);
    }
  }, [mount, props, token]);

  const checkoutList = props.checkoutList.toJS();
  const list = checkoutList.data;

  if (list == null) {
    return <div>

    </div>
  }

  return (
    <div>
      <Header/>
      <SectionWrapper>
        <CartTitleHeaderWrapper>
          <div>
            <CartTitleWrapper>Your Cart</CartTitleWrapper>
            <span> {list.length} items</span>
          </div>
        </CartTitleHeaderWrapper>
        <CartTableWrapper>
          <table>
            <CheckoutListHead/>
            <CheckoutListBody checkoutList={list}/>
          </table>
        </CartTableWrapper>
      </SectionWrapper>
    </div>
  )
}

const CheckoutListBody = ({checkoutList}) => {
  const sum = checkoutList.reduce((a, v) => a = a + v.price, 0);
  return (
    <tbody>
    {
      checkoutList.map(item => (
        <tr key={item.productName}>
          <td className="flex"><strong>{item.productName} </strong></td>
          <td>${item.price}</td>
          <td>{item.count}</td>
        </tr>
      ))
    }
    <tr>
      <td/>
      <td><strong>Total: ${sum}</strong></td>
      <td><CartPaymentWrapper to="/checkout"> PAYMENT </CartPaymentWrapper></td>
    </tr>
    </tbody>
  )
}

const CheckoutListHead = () => {
  return (
    <thead>
    <tr>
      <th>Product</th>
      <th>Price</th>
      <th className="broader">Quantity</th>
    </tr>
    </thead>
  )
}

const mapStateToProps = (state) => {
  return {
    checkoutList: state.getIn(['cart', 'checkoutList'])
  }
}

const mapDispatch = (dispatch) => ({
  getCheckoutListData(cookie) {
    const action = actionCreators.getCheckoutList(cookie);
    dispatch(action);
  }
})

export default connect(mapStateToProps, mapDispatch)(Cart);


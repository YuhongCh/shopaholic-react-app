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

const Cart = (props) => {

  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (!mount) {
      props.getCheckoutListData();
      setMount(true);
    }
  }, [mount, props]);

  const checkoutList = props.checkoutList.toJS();

  return (
    <div>
      <Header/>
      <SectionWrapper>
        <CartTitleHeaderWrapper>
          <div>
            <CartTitleWrapper>Your Cart</CartTitleWrapper>
            <span> {checkoutList.length} items</span>
          </div>
        </CartTitleHeaderWrapper>
        <CartTableWrapper>
          <table>
            <CheckoutListHead/>
            <CheckoutListBody checkoutList={checkoutList}/>
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
        <tr>
          <td className="flex"><strong>{item.name} </strong></td>
          <td>${item.price}</td>
          <td>{item.quantity}</td>
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
  getCheckoutListData() {
    const action = actionCreators.getCheckoutList();
    dispatch(action);
  }
})

export default connect(mapStateToProps, mapDispatch)(Cart);


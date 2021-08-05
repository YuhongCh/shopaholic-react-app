import * as actionTypes from './actionTypes';
import axios from "axios";

const getCheckoutListData = (result) => ({
  type: actionTypes.GET_CHECKOUT_DATA,
  checkoutList: result
})

export const getCheckoutList = (cookie) => {

  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://localhost:8080/cart/all',
      data: {
        cookie : cookie
      }
    }).then(res => dispatch(getCheckoutListData(res.data)))
      .catch(err => console.log(err))};

}
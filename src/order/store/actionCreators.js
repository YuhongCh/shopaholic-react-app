import axios from "axios";
import * as actionTypes from "./actionTypes";

const getOrderData = (result) => ({
  type: actionTypes.GET_ORDER_DATA,
  orderList: result
})

export const getOrder = (token) => {

  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://localhost:8080/order/all',
      data: {
        cookie: token
      }
    }).then((res) => {
      dispatch(getOrderData(res.data));
    })
      .catch(error => error)};

}

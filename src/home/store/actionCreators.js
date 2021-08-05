import axios from "axios";
import * as actionTypes from "./actionTypes";

const getHomeData = (result) => ({
  type: actionTypes.GET_HOME_DATA,
  productList: result
})

export const getHome = (token) => {

  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://localhost:8080/product/all',
      data: {
        cookie: token
      }
    }).then((res) => {
      dispatch(getHomeData(res.data));
    })
      .catch(error => error)};

}

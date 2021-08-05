import * as actionTypes from './actionTypes';
import axios from "axios";

const getDetailData = (result) => ({
  type: actionTypes.GET_DETAIL_DATA,
  productDetail: result.data
})

export const getDetail = (productId, cookie) => {

   return (dispatch) => {
     axios({
       method: 'get',
       url: 'http://localhost:8080/product/' + productId.id,
       data: {
         cookie : cookie
       }
     }).then(res => dispatch(getDetailData(res.data)))
       .catch(err => console.log(err))};

}
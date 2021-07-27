import axios from "axios";
import * as actionTypes from "./actionTypes";

const getHomeData = (result) => ({
  type: actionTypes.GET_HOME_DATA,
  productList: result
})

export const getHome = () => {
  const data = {
  productList: [
    {id : 8, title: "POLESTAR 8", description: "A nice car", price: "0.01"},
    {id : 9, title: "POLESTAR 9", description: "A nice car", price: "0.01"},
    {id : 10, title: "POLESTAR 10", description: "A nice car", price: "0.01"},
    {id : 11, title: "POLESTAR 11", description: "A nice car", price: "0.01"},
    {id : 12, title: "POLESTAR 12", description: "A nice car", price: "0.01"},
    {id : 13, title: "POLESTAR 13", description: "A nice car", price: "0.01"},
    {id : 14, title: "POLESTAR 14", description: "A nice car", price: "0.01"},
    {id : 15, title: "POLESTAR 15", description: "A nice car", price: "0.01"},
    {id : 16, title: "POLESTAR 16", description: "A nice car", price: "0.01"}
  ]}

  return (dispatch) => {
    dispatch(getHomeData(data.productList))
  }

  /**
  return (dispatch) => {
    axios.get('http://localhost:8080/home')
      .then((res) => {
        dispatch(getHomeData(res.data));
      })
  }
   **/
}
import * as actionTypes from './actionTypes';

const getDetailData = (result) => ({
  type: actionTypes.GET_DETAIL_DATA,
  productDetail: result
})

export const getDetail = () => {
  const data = {
    title: "POLESTAR 1",
    introduction: "UI/UX designing, html css tutorials",
    description: "Welcome to our channel Dev AT. Here you can learn web designing,\n" +
      "UI/UX designing, html css tutorials, css animations and css effects,\n" +
      "javascript and jquery tutorials and related so on.",
    price: "100.00",
    sales: "0.01",
    stock: "6",
    startTime: 2627368586078,
    endTime: 1727368586078
  }

  return (dispatch) => {
    dispatch(getDetailData(data));
  }

  /**
   return (dispatch) => {
    axios.get('http://localhost:8080/detail/:id')
      .then((res) => {
        dispatch(getDetailData(res.data));
      })
  }
   **/
}
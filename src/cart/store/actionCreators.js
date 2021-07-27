import * as actionTypes from './actionTypes';

const getCheckoutListData = (result) => ({
  type: actionTypes.GET_CHECKOUT_DATA,
  checkoutList: result
})

export const getCheckoutList = () => {
  const data = [
    {
      name: "POLESTAR 911S",
      price: 100,
      quantity: 1
    },
    {
      name: "POLESTAR 911S",
      price: 100,
      quantity: 1
    },
    {
      name: "POLESTAR 911S",
      price: 100,
      quantity: 1
    },
    {
      name: "POLESTAR 911S",
      price: 100,
      quantity: 1
    },
    {
      name: "POLESTAR 911S",
      price: 100,
      quantity: 1
    }
  ]

  return (dispatch) => {
    dispatch(getCheckoutListData(data));
  }

  /**
   return (dispatch) => {
    axios.get('http://localhost:8080/cart/:id')
      .then((res) => {
        dispatch(getDetailData(res.data));
      })
  }
   **/
}
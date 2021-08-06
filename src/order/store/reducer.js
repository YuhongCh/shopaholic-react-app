import * as actionTypes from './actionTypes';
import {fromJS} from "immutable";

const defaultState = fromJS({
  orderList: []
})

function orderReducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.GET_ORDER_DATA :
      return state.set('orderList', fromJS(action.orderList.data));
    default :
      return state;
  }
}

export default orderReducer;
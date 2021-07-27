import {fromJS} from "immutable";
import * as actionTypes from "./actionTypes";

const defaultState = fromJS({
  checkoutList: []
})

function cartReducer (state = defaultState, action) {
  switch(action.type) {
    case actionTypes.GET_CHECKOUT_DATA :
      return state.set('checkoutList', fromJS(action.checkoutList));
    default :
      return state;
  }
}

export default cartReducer;
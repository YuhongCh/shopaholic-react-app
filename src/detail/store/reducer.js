import {fromJS} from "immutable";
import * as actionTypes from "../store/actionTypes";

const defaultState = fromJS({
  productDetail: []
})

function detailReducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.GET_DETAIL_DATA :
      return state.set('productDetail', fromJS(action.productDetail));
    default :
      return state;
  }
}

export default detailReducer;
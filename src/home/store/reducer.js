import * as actionTypes from './actionTypes';
import {fromJS} from "immutable";

const defaultState = fromJS({
  productList: []
})

function homeReducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.GET_HOME_DATA :
      return state.set('productList', fromJS(action.productList.data));
    default :
      return state;
  }
}

export default homeReducer;
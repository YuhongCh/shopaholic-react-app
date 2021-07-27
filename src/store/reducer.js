import {homeReducer} from "../home/store";
import {detailReducer} from "../detail/store";
import {cartReducer} from "../cart/store";
import {combineReducers} from "redux-immutable";

const reducer = combineReducers({
  home: homeReducer,
  detail: detailReducer,
  cart: cartReducer
})

export default reducer;

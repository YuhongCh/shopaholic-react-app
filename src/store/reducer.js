import {homeReducer} from "../home/store";
import {detailReducer} from "../detail/store";
import {cartReducer} from "../cart/store";
import {combineReducers} from "redux-immutable";
import {orderReducer} from "../order/store";

const reducer = combineReducers({
  home: homeReducer,
  detail: detailReducer,
  cart: cartReducer,
  order: orderReducer
})

export default reducer;

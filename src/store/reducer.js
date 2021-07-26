import * as actionTypes from './actionTypes';
import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  showScroll: false
})

function applicationReducer (state = defaultState, action) {
  switch(action.type) {
    case actionTypes.EXAMPLE_TYPE :
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      })
    default :
      return state;
  }
}

export default applicationReducer;
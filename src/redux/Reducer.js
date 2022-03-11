import {ADD_BOOKS, REMOVE_BOOKS} from "./Types";

export default (state, action) => {
  switch (action.type) {
    case ADD_BOOKS:
      return {...state, ...action.data};
    case REMOVE_BOOKS:
      return {}
    default:
      return state
  }
}

import {ADD_BOOKS, REMOVE_BOOKS} from "./Types";

export const addBooks = (data) => {
  return {
    type: ADD_BOOKS,
    data,
  };
};

export const removeBooks = () => {
  return {
    type: REMOVE_BOOKS,
  };
};

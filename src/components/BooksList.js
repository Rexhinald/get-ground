import React, {Component} from "react";
import {connect} from "react-redux";
import _ from 'lodash-core'
import {List} from "@mui/material";
import BookItem from "./BookItem";

class BooksList extends Component {

  booksMapper = () => (
    this.props.books.map(book => <BookItem key={book.id} book={book} />)
  )

  render() {
    return <List datatest-id="list" sx={{px: 20, py: 10}}>
      {this.booksMapper()}
    </List>
  }
};

const select = (state) => {
  const books = _.get(state, 'books', [])
  return {books};
}

const wrapper = connect(select)

export default wrapper(BooksList);

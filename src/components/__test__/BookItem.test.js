import React from "react";
import ReactDOM from "react-dom";
import BookItem from "../BookItem";
import {cleanup, fireEvent, render} from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

const book = {
  "id": 2149,
  "book_author": [
    "Δωρόθεος μητροπολίτης Μονεμβασίας"
  ],
  "book_title": "Βιβλίον Ιστορικόν",
  "book_publication_year": 1654,
  "book_publication_country": "Ιταλία",
  "book_publication_city": "Βενετία",
  "book_pages": 0
};

it('renders without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(<BookItem book={book} />, div);
});

it('renders book details', () => {
  const {getByTestId} = render(<BookItem book={book} />);
  fireEvent(getByTestId('book-item'), new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
  }));
  expect(getByTestId('book-details')).toBeTruthy();
});

it('matches snapshot', () => {
  const tree = renderer.create(<BookItem book={book} />).toJSON();
  expect(tree).toMatchSnapshot();
});

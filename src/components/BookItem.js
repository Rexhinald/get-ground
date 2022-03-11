import React, {useState} from "react";
import {Collapse, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";

const BookItem = ({book}) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggle = () => {
    setShowDetails(prevState => !prevState);
  };

  const authors = () => (
    book.book_author.map((author, index) => {
      return `${author}${index !== book.book_author.length - 1 ? ',' : ''} `;
    })
  );

  return (
    <>
      <ListItemButton data-testid="book-item" onClick={toggle}>
        <ListItemText primary={book.book_title} />
        {showDetails ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse data-testid="book-details" in={showDetails} unmountOnExit>
        <List component="div" sx={{pl: 3}}>
          <ListItem>
            <ListItemText>Author: {authors()}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Pages: {book.book_pages}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Publication place: {book.book_publication_city}, {book.book_publication_country}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Publication year: {book.book_publication_year}</ListItemText>
          </ListItem>
        </List>
      </Collapse>
    </>
  );
};

export default BookItem;

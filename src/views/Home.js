import React, {useEffect, useState} from 'react'
import {CircularProgress} from "@mui/material";
import BooksService from "../services/BooksService";
import {useDispatch} from "react-redux";
import BooksList from "../components/BooksList";
import {addBooks} from "../redux/Action";
import SearchInput from "../components/SearchInput";
import ListPagination from "../components/ListPagination";

const Home = () => {
  const url = new URL(window.location);

  const qs = url.searchParams.get('search') || '';
  const page = Number(url.searchParams.get('page')) || 1;
  const items = Number(url.searchParams.get('itemsPerPage')) || 20;

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const getBooks = () => {
    setLoading(true);
    BooksService.getBooks(page, items, qs)
      .then(res => {
        console.log('Success', res);
        dispatch(addBooks(res.data));
      })
      .catch(err => console.log('Error', err))
      .finally(() => setLoading(false))
  };

  useEffect(() => {
    getBooks()
  }, [qs, page, items]);

  return (
    <div>
      <SearchInput />
      {loading ? (
        <div className="loading">
          <CircularProgress size={100} sx={{p: 5}} />
          <h2>Loading...</h2>
        </div>
      ) : (
        <>
          <BooksList />
          <ListPagination />
        </>
      )}
    </div>
  );
};

export default Home;

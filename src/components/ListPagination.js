import React, {useEffect, useState} from "react";
import {MenuItem, Pagination, Select} from "@mui/material";
import {useSelector} from "react-redux";
import _ from "lodash-core";
import {useHistory} from "react-router-dom";

const ListPagination = () => {
  const url = new URL(window.location)
  const initialPage = Number(url.searchParams.get('page')) || 1;
  const initialItems = Number(url.searchParams.get('itemsPerPage')) || 20;

  const [itemsPerPage, setItemsPerPage] = useState(initialItems);
  const [page, setPage] = useState(initialPage);

  const booksCount = useSelector(state => _.get(state, 'count', 0));
  const count = () => Math.ceil(booksCount / itemsPerPage);

  const history = useHistory();

  useEffect(() => {
    url.searchParams.set('page', page)
    url.searchParams.set('itemsPerPage', itemsPerPage)
    const searchQuery = url.search
    history.replace({
      search: searchQuery,
    })
  }, [page, itemsPerPage])

  return(
    <div className="pagination">
      <Select size="small" value={itemsPerPage} onChange={(e) => setItemsPerPage(e.target.value)}>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <Pagination
        variant="outlined"
        count={count()}
        page={page}
        onChange={(e, val) => setPage(val)}
      />
    </div>
  )
}

export default ListPagination;

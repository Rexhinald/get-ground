import React, {useState} from "react";
import {InputAdornment, TextField} from "@mui/material";
import {Search} from "@mui/icons-material";
import _ from "lodash-core";
import {useHistory} from "react-router-dom";

const SearchInput = () => {
  const history = useHistory();
  const url = new URL(window.location);

  const initialSearch = url.searchParams.get('search') || '';

  const [search, setSearch] = useState(initialSearch);


  const setFilter = _.debounce((val) => {
    url.searchParams.set('search', val)
    const searchQuery = url.search
    history.replace({
      search: searchQuery,
    })
  }, 700);

  return (
    <TextField
      variant="outlined"
      placeholder="Search..."
      size="small"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        setFilter(e.target.value);
      }}
    />
  )
}

export default SearchInput;

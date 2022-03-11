import API from "../API";

const BooksService = {
  getBooks: (page, itemsPerPage, search) => {
    return API().post('/books', {
      page,
      itemsPerPage,
      filters: [{type: "all", values: [search]}]
    })
  }
};

export default BooksService;

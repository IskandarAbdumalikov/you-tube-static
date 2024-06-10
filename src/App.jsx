import React, { Fragment, useState } from "react";

import Header from "./components/layouts/header/Header";
import Products from "./components/products/Products";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <Fragment>
      <Header onSearch={handleSearch} />
      <Products searchTerm={searchTerm} />
    </Fragment>
  );
};

export default App;

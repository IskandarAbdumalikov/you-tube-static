import React, { useState, useEffect, Fragment } from "react";
import "./products.scss";
import { DATA, categories } from "../../data/index";
import { Link } from "react-router-dom";

const Products = ({ searchTerm }) => {
  const [offset, setOffset] = useState(1);
  const [filteredData, setFilteredData] = useState(DATA);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    let data = DATA;

    if (searchTerm) {
      data = data.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "All") {
      data = data.filter((product) => product.category === selectedCategory);
    }

    setFilteredData(data);
  }, [searchTerm, selectedCategory]);

  return (
    <Fragment>
      {filteredData.length <= 0 ? (
        <h1 className="nothing">Nothing founded</h1>
      ) : (
        <div className="products container">
          <div className="products__header">
            <h1>Products</h1>
            <ul>
              <li
                className={selectedCategory === "All" ? "active" : ""}
                onClick={() => setSelectedCategory("All")}
              >
                All
              </li>
              {categories?.map((category) => (
                <li
                  key={category}
                  className={selectedCategory === category ? "active" : ""}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className="products__body">
            {filteredData.slice(0, 4 * offset).map((product) => (
              <div className="product__card" key={product.id}>
                <Link to="#">
                  <img
                    src={product.image}
                    className="product__card__image"
                    alt={product.title}
                  />
                </Link>
                <div className="product__card__info">
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <div className="price">
                    <h3>{product.price} USD</h3>
                    <p>{product.oldPrice} USD</p>
                  </div>
                  <h2>{product.views} Million times viewed</h2>
                </div>
              </div>
            ))}
          </div>
          <div className="products__btn">
            <button
              disabled={filteredData.length / 4 <= offset}
              onClick={() => setOffset((prev) => prev + 1)}
              className={filteredData.length / 4 <= offset ? "disabled" : ""}
            >
              See more
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Products;

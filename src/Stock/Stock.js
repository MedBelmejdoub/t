import React from "react";
import { useState } from "react";
import { NewProduct } from "./Components/NewProduct";
import { ProductList } from "./Components/ProductList";
import "./Stock.css";

export const Stock = () => {
  const [show, setShow] = useState(false);
  const [newProduct, setNewProduct] = useState([]);

  const onSetNewProduct = (products) => {
    setNewProduct(products);
  };

  const onDelete = (code) => {
    const exactProduct = [...newProduct];
    exactProduct.splice(code, 1);
    setNewProduct(exactProduct);
  };
  return (
    <div>
      <div className="Header_Stock">
        <button
          className="new-btn"
          type="button"
          onClick={() => setShow(!show)}
        >
          New Product
        </button>
        <input
          type="text"
          className="Search_Stock"
          name=""
          placeholder="Search"
        />
      </div>
      <div className="container-fluid">
        <div className="row">
          {show ? (
            <NewProduct
              onSetNewProduct={onSetNewProduct}
              onNewProduct={newProduct}
              setShow={setShow}
            />
          ) : null}
        </div>
        {/* <NewProduct /> */}
        <div>{/* Liste of all items */}</div>
      </div>
      <div>
        <ProductList
          onNewProduct={newProduct}
          onDelete={onDelete}
          onSetNewProduct={onSetNewProduct}
        />
      </div>
    </div>
  );
};

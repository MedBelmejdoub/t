import React from "react";
import { useState } from "react";
import { Product } from "./Components/NewProduct";
import "./Stock.css";

export const Stock = () => {
  const [show, setShow] = useState(false);
  const [onNewProduct, onSetNewProduct] = useState();
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
        <input type="text" className="Search_Stock" name="" placeholder="Search" />
      </div>
      <div class="container-fluid">
        <div class="row">
          {show ? (
            <Product onSetNewProduct={onSetNewProduct} onNewProduct={onNewProduct} />
          ) : null}
        </div>
        <div>
          {/* Liste of all items */}
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

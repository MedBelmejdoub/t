import React from "react";
import "./Product.css";
const Product = ({  code, reference, description, date, price, poI, quantity, type, fournisseur, onDelete }) => {
  return (
    <>
      <div className="Product_item" >
        <div className="items">
          <input type="checkbox"/>
          <div className="name-Product">{code}</div>
          <div className="role-Product">{reference}</div>
          <div className="role-Product">{description}</div>

          <div className="role-Product">{date}</div>


          <div className="role-Product">{price}</div>

          <div className="role-Product">{reference}</div>

          <div className="role-Product">{poI}</div>

          <div className="role-Product">{quantity}</div>

          <div className="role-Product">{type}</div>
          <div className="role-Product">{fournisseur}</div>


          <button className="delete-btn-Product" type="button" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;

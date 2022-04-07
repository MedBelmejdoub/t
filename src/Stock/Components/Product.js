import React from "react";
import "./Product.css";

const Product = ({
  code,
  reference,
  description,
  date,
  price,
  poI,
  quantity,
  type,
  fournisseur,
  onDelete,
}) => {
  return (
    <>
      <div className="">
         {/* <div className="items">
          <input type="checkbox" />
          <div className="name-Product">{code}</div>
          <div className="Reference">{reference}</div>
          <div className="Description">{description}</div>

          <div className="Date">{date}</div>

          <div className="Price">{price}</div>

          <div className="PoI">{poI}</div>

          <div className="Quantity">{quantity}</div>

          <div className="Type">{type}</div>
          <div className="Frounisseurs">{fournisseur}</div>

          <button
            className="delete-btn-Product"
            type="button"
            onClick={onDelete}
          >
            Delete
          </button>
        </div> */}
</div>
        <div>
          
        <table className="Product_item">
        <tr> <span> Code</span><span>Reference</span><span>Description</span> </tr>
          <td>{code}</td>
          <td>{reference}</td>

          <td>{description}</td>

          <td>{date}</td>

          <td>{price}</td>
          <td><button
            className="delete_btn_Product"
            type="button"
            onClick={onDelete}
          >
            Delete
          </button>
          </td>
        </table>
      </div>
    </>
  );
};

export default Product;

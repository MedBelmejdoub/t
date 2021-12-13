import React, { useState } from "react";
import Product from "./Product";

export const ProductList = ({ onNewProduct, onDelete }) => {
  // setProduct({onNewProduct});

  return (
    <div className="Product-list">
      {onNewProduct.map((prevProduct) => (
        <Product
          key={prevProduct.code}
          code={prevProduct.code}
          reference={prevProduct.reference}
          description={prevProduct.description}
          date={prevProduct.date}
          price={prevProduct.price}
          poI={prevProduct.poI}
          quantity={prevProduct.quantity}
          type={prevProduct.type}
          fournisseur={prevProduct.fournisseur}

          onDelete={() => onDelete(prevProduct.code)}
        />
      ))}
    </div>
  );
};

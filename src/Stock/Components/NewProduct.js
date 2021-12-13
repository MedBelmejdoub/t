import React,{useState} from "react";
import "./NewProduct.css";
export const Product = ({ onSetNewProduct, onNewProduct }) => {
  const [product,SetProduct] = useState([]);
  const [code, setCode] = useState("");
  const [reference, setReference] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [poI, setPoI] = useState("");
  const [quantity, setQuantity] = useState("");
  const [type, setType] = useState("");
  const [fournisseur, setFournisseur] = useState("");

  const inputCodeHandler = (e) => {
    setCode(e.target.value);
  };

  const addHandler = (e) => {
    e.preventDefault();
    // add filter here to check the name of Every user
    onSetNewProduct((prevState) => [
        ...prevState,
        {
          code: code,
          reference: reference,
          description: description,
          date: date,
          price: price,
          poI : poI,
          quantity: quantity,
          type: type,
          fournisseur: fournisseur,
        },
      ]);
      setCode("");
      setReference("");
      setDescription("");
      setDate('');
      setPrice('');
      setPoI('');
      setQuantity('');
      setType('');
      setFournisseur('');

    }
 
  return (
    <div>   
      <form className="Product_form" onSubmit={addHandler}>
      <h2 className="h2_new_product">Add New Product</h2>
        <div className="first_column">
          <input
            type="text"
            name=""
            className="Input_Type"
            placeholder="Code"
          />

          <input
            type="text"
            className="Input_Type"
            placeholder="Reference"
            name=""
          />

          <input
            type="text"
            className="Input_Type"
            placeholder="Description"
            name=""
          />
        </div>
        <div>
          <input
            type="date"
            className="Input_Type"
            placeholder="Buy on"
            name=""
          />
        </div>
        <div className="first_column">
          <input
            type="number"
            className="Input_Type"
            placeholder="Price"
            name=""
          />
        
          <input
            type="number"
            className="Input_Type"
            placeholder="Price of one item"
            name=""
          />
        
          <input
            type="number"
            className="Input_Type"
            placeholder="Quantity"
            name=""
          />
        </div>

        <div>
          <select className="Product_Type" >
            <option value="default" hidden>
              Select a Type...
            </option>
            <option value="Electric">Electric items</option>
            <option value="Water_items">Water Items</option>
            <option value="Small_items">Small Items</option>
            <option value="Construction">Constructions</option>
            <option value="Others">Others ...</option>
          </select>
        </div>
        <div>
          {/* les fournisseurs  */}
          <input
            type="list"
            className="Input_Type"
            placeholder="From"
            name=""
          />
        </div>
        <div className="Product_btn">
          <button type="submit" className="Product_Add">Add</button>
          <button type="button" className="Product_Cancel">Cancel</button>
        </div>
      </form>
      <div>

      </div>
    </div>
  );
};

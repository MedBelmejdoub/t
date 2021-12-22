import React,{useState} from "react";
import "./NewProduct.css";

export const NewProduct = ({ onSetNewProduct, onNewProduct, setShow }) => {
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
  const cancelHandler=()=>{
    if(setShow== true){
      setShow(false);
    }
  }
  const inputCodeHandler = (e) => {
    setCode(e.target.value);
  };
  const inputReferenceHandler = (e) => {
    setReference(e.target.value);
  };
  const inputDescriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  const inputDateHandler = (e) => {
    setDate(e.target.value);
  };
  const inputPriceHandler = (e) => {
    setPrice(e.target.value);
  };
  const inputPoIHandler = (e) => {
    setPoI(e.target.value);
  };
  const inputQuantityHandler = (e) => {
    setQuantity(e.target.value);
  };
  const inputTypeHandler = (e) => {
    setType(e.target.value);
  };
  const inputFournisseurHandler = (e) => {
    setFournisseur(e.target.value);
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
      setDate("");
      setPrice("");
      setPoI("");
      setQuantity("");
      setType("");
      setFournisseur("");

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
            value={code}
            onChange={inputCodeHandler}
          />

          <input
            type="text"
            className="Input_Type"
            placeholder="Reference"
            name=""
            value={reference}
            onChange={inputReferenceHandler}
          />

          <input
            type="text"
            className="Input_Type"
            placeholder="Description"
            name=""
            value={description}
            onChange={inputDescriptionHandler}
          />
        </div>
        <div>
          <input
            type="date"
            className="Input_Type"
            placeholder="Buy on"
            name=""
            value={date}
            onChange={inputDateHandler}

          />
        </div>
        <div className="first_column">
          <input
            type="number"
            className="Input_Type"
            placeholder="Price"
            name=""
            value={price}
            onChange={inputPriceHandler}

          />
        
          <input
            type="number"
            className="Input_Type"
            placeholder="Price of one item"
            name=""
            value={poI}
            onChange={inputPoIHandler}

          />
        
          <input
            type="number"
            className="Input_Type"
            placeholder="Quantity"
            name=""
            value={quantity}
            onChange={inputQuantityHandler}

          />
        </div>

        <div>
          <select className="Product_Type" onChange={inputTypeHandler}>
            <option value="default" hidden>
              Select a Type...
            </option>
            <option value="Electric">Electric items</option>
            <option value="Water items">Water Items</option>
            <option value="Small items">Small Items</option>
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
            value={fournisseur}
            onChange={inputFournisseurHandler}
          />
        </div>
        <div className="Product_btn">
          <button type="submit" className="Product_Add">Add</button>
        </div>
      </form>
      <div>

      </div>
    </div>
  );
};

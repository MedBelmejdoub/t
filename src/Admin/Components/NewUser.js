import React, { useState } from "react";
import "./NewUser.css";
import User from "./User";

export const NewUser = ({ onNewTask }) => {
  const [nameValue, setNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [roleValue, setRoleValue] = useState("");
  const [users, setUsers] = useState([]);
  //newUser Value
  onNewTask(users);
  //inputs
  const inputNameHandler = (e) => {
    setNameValue(e.target.value);
  };
  const inputPasswordHandler = (e) => {
    setPasswordValue(e.target.value);
  };
  const selectRoleHandler = (e) => {
    setRoleValue(e.target.value);
  };
  //Add btn
  const addHandler = (e) => {
    e.preventDefault();
    
    if (nameValue && passwordValue && roleValue) {
      
      setUsers((prevState) => [
        ...prevState,
        {
        
        name :nameValue,
        password :passwordValue,
        role :roleValue}
      ]); 
      
    }
    
    setNameValue("");
    setPasswordValue("");
  };

  return (
    <form className="user-form">
      <div className="user-input">
        <input
          className="user-name"
          type="text"
          placeholder="Name"
          value={nameValue}
          required
          onChange={inputNameHandler}
        />
        <input
          className="user-password"
          type="password"
          required
          value={passwordValue}
          placeholder="Password"
          onChange={inputPasswordHandler}
        />
      </div>
      <div className="action">
        <div className="user-select">
          <select
            className="user-option"
            required
            value={roleValue}
            onChange={selectRoleHandler}
          >
            <option placeholder="Select a role ..."></option>
            <option value="Admin">Admin</option>
            <option value="worker">Worker</option>
            <option value="Client">Client</option>
          </select>
        </div>
        <div className="user-btn">
          <button className="add-btn" type="submit" onClick={addHandler}>
            Add
          </button>
          <button className="cancel-btn" type="button">
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

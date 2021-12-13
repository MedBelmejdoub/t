import React, { useState } from "react";
import "./NewUser.css";
import User from "./User";

export const NewUser = ({ onSetNewUser, onNewUser }) => {
  const [nameValue, setNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [roleValue, setRoleValue] = useState("");
  
  
  
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
    // add filter here to check the name of Every user
    if (roleValue) {
      onSetNewUser((prevState) => [
        ...prevState,
        {
          name: nameValue,
          password: passwordValue,
          role: roleValue,
        },
      ]);
      setNameValue("");
      setPasswordValue("");
      setRoleValue("");
    }
  };
  // console.log("this is the the filter List: "+ filterList );

  return (
    <form className="user-form" onSubmit={addHandler}>
      <div className="user-inputs">
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
            <option value="default" hidden>
              Select a role...
            </option>
            <option value="Admin">Admin</option>
            <option value="worker">Worker</option>
            <option value="Client">Client</option>
          </select>
        </div>
        <div className="user-btn">
          <button className="add-btn" type="submit">
            Add
          </button>
          <button className="cancel-btn" type="button" >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

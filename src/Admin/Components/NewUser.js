import React from "react";
import "./NewUser.css";
export const NewUser = () => {
  return (
    <form className="user-form">
      <div className="user-input">
        <input className="user-name" type="text" placeholder="Name" />

        <input
          className="user-password"
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="user-select">
        <select className="user-option">
          <option value="Admin">Admin</option>
          <option value="worker">Worker</option>
          <option value="Client">Client</option>
        </select>
      </div>
      <div className="user-btn">
        <button className="add-btn" type="submit">Add</button>
        <button className="cancel-btn" type="button">Cancel</button>
      </div>
    </form>
  );
};

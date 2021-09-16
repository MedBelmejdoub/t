import React from "react";
import "./User.css";
const User = ({ key, name, password, role }) => {
  return (
    <>
      <div className="details" key={key}>
        <div className="items">
          <input type="checkbox"/>
          <div className="name-user">{name}</div>
          <div className="password-user">{password}</div>
          <div className="role-user">{role}</div>
          <button className="delete-btn-user" type="submit">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default User;

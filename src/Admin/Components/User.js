import React from "react";
import "./User.css";
import "../../UII/card.css";
const User = ({  name, password, role, onDelete }) => {
  return (
    <>
      <div className="details" >
        <div className="items">
          <input type="checkbox"/>
          <div className="name-user">{name}</div>
          {/* I need to hide the password and place it with stars  */}
          <div className="role-user">{role}</div>
          <button className="delete-btn-user" type="button" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default User;

import React, { useState } from "react";
import { UserList } from "./Components/UserList";
import { NewUser } from "./Components/NewUser";
import "./Admin.css";

export const Admin = () => {
  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState([]);
  
  
  const onSetNewUser = (users) => {
    setNewUser(users);
  };
  const onDelete = (name) => {
    const exactUser = [...newUser];
    exactUser.splice(name, 1);
    setNewUser(exactUser);
  }
  
  return (
    <div>
      
      <div className="admin-btn">
        <button
          className="new-btn"
          type="button"
          onClick={() => setShow(!show)}
        >
          New User
        </button>
        
      </div>
      <div>
        {show ? <NewUser  onSetNewUser={onSetNewUser} onNewUser={newUser}/> : null}
      </div>
      <span className="list-admin">
      <UserList onNewUser={newUser} onDelete={onDelete} onSetNewUser={onSetNewUser}/></span>
    </div>
  );
};

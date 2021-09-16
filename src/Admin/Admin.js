import React, { useState } from "react";
import { UserList } from "./Components/UserList";
import { NewUser } from "./Components/NewUser";
import "./Admin.css";

export const Admin = () => {
  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState([]);
  
  const onNewTask = (users) => {
    setNewUser(users);
  };
  return (
    <div>
      <div className="admin-h2">
        <h2>User Page</h2>
      </div>
      <div className="admin-btn">
        <button
          className="new-btn"
          type="button"
          onClick={() => setShow(!show)}
        >
          New User
        </button>
        {show ? <NewUser onNewTask={onNewTask} /> : null}
      </div>
      <UserList onNewUser={newUser} key={newUser.name} />
    </div>
  );
};

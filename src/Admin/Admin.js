import React, { useState } from "react";
import { UserList } from "./Components/UserList";
import { NewUser } from "./Components/NewUser";
import "./Admin.css";
export const Admin = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);

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
          ADD
        </button>
        {show ? <NewUser /> : null}
      </div>
      <UserList />
    </div>
  );
};

import React, { useState } from "react";
import User from "./User";

export const UserList = ({ onNewUser, onDelete }) => {
  // setUser({onNewUser});

  return (
    <div className="user-list">
      {onNewUser.map((prevUser) => (
        <User
          key={prevUser.name}
          name={prevUser.name}
          password={prevUser.password}
          role={prevUser.role}
          onDelete={() => onDelete(prevUser.name)}
        />
      ))}
    </div>
  );
};

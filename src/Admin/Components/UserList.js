import React from "react";
import User from "./User";

export const UserList = ({ onNewUser, key }) => {
  return (
    <div>
      <h1>
        {onNewUser.map((prevUser) => (
          <User
            key={key}
            name={prevUser.name}
            password={prevUser.password}
            role={prevUser.role}
          />
        ))}
      </h1>
    </div>
  );
};

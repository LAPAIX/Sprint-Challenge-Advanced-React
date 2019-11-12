import React, { useState } from "react";
import { useInput } from "./useInput";

const CustomForm = () => {
  const [username, setUsername, handleUsername] = useInput("");

  const resetValues = e => {
    e.preventDefault();
    setUsername("");
  };

  const onThanks = () => {
    alert("Thank You for Submiting a player");
  };

  return (
    <div className="wrapper">
    
      <form onSubmit={(resetValues, onThanks)}>
        <input
          className="username-text"
          id="username"
          name="username"
          onChange={e => handleUsername(e.target.value)}
          placeholder="send"
          type="text"
          value={username}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CustomForm;

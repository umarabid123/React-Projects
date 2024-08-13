import React from "react";
import { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  function handleSubmit(e) {
    e.preventDefault();
    setUser(username, password);
  }
  return (
    <div>
      {" "}
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        className="border w-64 p-3 rounded-lg m-2 text-xl"
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border w-64 p-3 rounded-lg m-2 text-xl"
      />
      <button onClick={handleSubmit} className="bg-sky-800 text-white w-28 p-3 rounded-lg">Submit</button>
    </div>
  );
}

export default Login;

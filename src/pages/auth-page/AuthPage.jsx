import React, { useState } from "react";
import { Informer } from "@consta/uikit/Informer";
import { useNavigate } from "react-router-dom";
import { saveToken } from "../../services/token";

const AuthPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onFormSubmit = async (evt) => {
    evt.preventDefault();

    const fetchUserToken = async (username, password) => {
      const loginResponse = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
          expiresInMins: 60,
        }),
      });

      if (!loginResponse.ok) {
        throw new Error("This user does not exist!");
      }

      return (await loginResponse.json()).accessToken;
    };

    try {
      saveToken(await fetchUserToken(username, password));
      navigate("/profile");
    } catch (error) {
      setError(error.message);
      return;
    }
  };

  return (
    <form onSubmit={onFormSubmit} style={{ width: "90vw" }}>
      <div style={{ marginBottom: "16px" }}>
        <label htmlFor="username" style={{ display: "block", marginBottom: "8px" }}>
          Login:
        </label>
        <input
          id="username"
          type="username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
          style={{
            width: "98%",
            padding: "8px",
            borderRadius: "10px",
            border: "2px solid #a084ca",
          }}
          placeholder="Enter your login"
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label htmlFor="password" style={{ display: "block", marginBottom: "8px" }}>
          Password:
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          style={{
            width: "98%",
            padding: "8px",
            borderRadius: "10px",
            border: "2px solid #a084ca", 
          }}
          placeholder="Enter your password"
        />
      </div>

      {error && (
        <div style={{ marginBottom: "16px" }}>
          <Informer status="alert" view="filled" title="Error" label={error} />
        </div>
      )}

      <div style={{ display: "flex", width: "100%", justifyContent: "right" }}>
        <button
          type="submit"
          style={{
            backgroundColor: "#a084ca",
            color: "white",
            border: "2px solid transparent", 
            borderRadius: "10px", 
            padding: "10px 20px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          Log in
        </button>
      </div>
    </form>
  );
};

export default AuthPage;

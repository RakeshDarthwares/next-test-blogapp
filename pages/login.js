import React, { useState } from "react";
import Link from "next/link";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      M.toast({ html: `welcome ${result.user.displayName}`, classes: "green" });
    } catch (error) {
      M.toast({ html: error.message, classes: "red" });
    }
  };

  return (
    <div className="container center">
      <h2>please login</h2>
      <form
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="input-field">
          <input
            type="email"
            placeholder="enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          login
        </button>
        <Link href="/signup">
          <a>
            <h5>Dont have an account?</h5>
          </a>
        </Link>
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import Link from "next/link";
import { auth } from "../firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      await result.user.updateProfile({
        displayName: name,
      });
      M.toast({ html: `welcome ${result.user.displayName}`, classes: "green" });
    } catch (error) {
      M.toast({ html: error.message, classes: "red" });
    }
  };

  console.log(email);
  return (
    <div className="container center">
      <h2>please Sign up</h2>
      <form
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="input-field">
          <input
            type="text"
            placeholder="enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          Signup
        </button>
        <Link href="/login">
          <a>
            <h5>Already have an account?</h5>
          </a>
        </Link>
      </form>
    </div>
  );
};

export default Signup;

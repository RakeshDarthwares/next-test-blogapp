import React from "react";
import Link from "next/link";
import { auth } from "../firebase";

const NavBar = ({ user }) => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link href="/">
            <a className="brand-logo">BlogApp</a>
          </Link>
          <ul id="nav-mobile" className="right">
            {user ? (
              <>
                <li>
                  <Link href="/createBlog">
                    <a>Create Blog</a>
                  </Link>
                </li>
                <li>
                  <button className="btn red" onClick={() => auth.signOut()}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/signup">
                    <a>Signup</a>
                  </Link>
                </li>
                <li>
                  <Link href="/login">
                    <a>Login</a>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

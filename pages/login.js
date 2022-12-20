
import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import Input from "./components/Input";
import art from "../public/image/landingpage-art.png";
import styles from "../styles/login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: email,
      password,
    };
    fetch("http://103.181.143.76:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      // eslint-disable-next-line consistent-return
      .then((st) => {
        console.log(st);
        if (st.msg === "data tidak ada") {
          return alert("pengguna tidak ada");
        }
        if (st.msg === "password salah") {
          return alert("password salah");
        }
        sessionStorage.setItem("accessToken", st.token);
        alert("login sukses");
        console.log(
          "token di session storage",
          sessionStorage.getItem("accessToken"),
        );
      });
  };
  return (
    <div id={styles.login}>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <Image src={art} className="img-fluid" alt="phone" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 text-white">
              <form onSubmit={handleLogin}>
                {/* Email input */}
                <Input
                  type="text"
                  title="username"
                  id="email"
                  set={(e) => setEmail(e.target.value)}
                />
                {/* Password input */}
                <Input
                  type="password"
                  title="password"
                  id="password"
                  set={(e) => setPassword(e.target.value)}
                />
                <div>
                  <a href="#!">Forgot password?</a>
                </div>
                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block mt-5"
                >
                  Sign in
                </button>
                <Link href="/register">
                  <button
                    type="submit"
                    className="btn btn-warning btn-lg btn-block mt-5"
                  >
                    Register
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;

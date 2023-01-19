import React, { useState } from "react";
import "./login.css";
import { Link, redirect } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    e.persist();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const data = { formData };
    console.log(data.formData);
    mainData(data);
  };

  const mainData = async (data) => {
    try {
      const res = await fetch("http://127.0.0.1:8082/api/v1/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data.formData),
      });

      const token = await res.text();

      localStorage.setItem("token", token);
      console.log(token);
      redirect("internal_link/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleClick}>
      <div class="login-decapay-3rZ">
        <div class="frame-8671-N89">
          <div class="frame-8670-7Ld">
            <img class="pay-Eg9" src="./assets/pay-iFT.png" />
            <Link to="/">
              <p class="decapay-mg5">DecaPay</p>{" "}
            </Link>
          </div>
          <div class="frame-8669-JAD">
            <p class="login-Dny">Login</p>
            <div class="frame-8668-MeH">
              <div class="frame-8667-K5K">
                <div class="frame-8666-GmF">
                  <div class="frame-8665-S9w">
                    <div class="frame-6-oFP">
                      <div class="frame-4-kRX">
                        <p class="email-f2h">Email</p>
                        <input
                          class="frame-2-B13"
                          name="email"
                          placeholder="Enter your email"
                          type="email"
                          onChange={handleChange}
                        />
                      </div>
                      <div class="frame-5-44q">
                        <p class="password-21f">Password</p>
                        <input
                          class="frame-3-kyF"
                          name="password"
                          placeholder="Enter your password"
                          type="password"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div class="frame-8664-rFb">
                      <div class="rectangle-5-Q2D"></div>
                      <p class="remember-login-WL9">Remember login</p>
                    </div>
                  </div>
                  <input
                    class="frame-3-dvZ"
                    value="Sign In"
                    type="submit"
                    onClick={handleClick}
                  />
                </div>
                <p class="forgot-password-L4H">Forgot password?</p>
              </div>
              <p class="dont-have-an-account-create-account-GTj">
                <span class="dont-have-an-account-create-account-GTj-sub-0">
                  Don’t have an account?{" "}
                </span>
                <Link to="/signup">
                  {" "}
                  <span class="dont-have-an-account-create-account-GTj-sub-1">
                    Create Account{" "}
                  </span>{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;

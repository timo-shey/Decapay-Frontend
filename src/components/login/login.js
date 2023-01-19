import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import EmailModal from "../../passwordreset/EmailModal";


function Login() {
  const [formData, setFormData] = useState({});
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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


      console.log(await res.text());
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <>
        <form onSubmit={handleClick}>
          <div className="login-decapay-3rZ">
            <div className="frame-8671-N89">
              <div className="frame-8670-7Ld">
                <img className="pay-Eg9" src="./assets/pay-iFT.png"/>
                <Link to="/">
                  <p className="decapay-mg5">DecaPay</p>{" "}
                </Link>
              </div>
              <div className="frame-8669-JAD">
                <p className="login-Dny">Login</p>
                <div className="frame-8668-MeH">
                  <div className="frame-8667-K5K">
                    <div className="frame-8666-GmF">
                      <div className="frame-8665-S9w">
                        <div className="frame-6-oFP">
                          <div className="frame-4-kRX">
                            <p className="email-f2h">Email</p>
                            <input
                                className="frame-2-B13"
                                name="email"
                                placeholder="Enter your email"
                                type="email"
                                onChange={handleChange}
                            />
                          </div>
                          <div className="frame-5-44q">
                            <p className="password-21f">Password</p>
                            <input
                                className="frame-3-kyF"
                                name="password"
                                placeholder="Enter your password"
                                type="password"
                                onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="frame-8664-rFb">
                          <div className="rectangle-5-Q2D"></div>
                          <p className="remember-login-WL9">Remember login</p>
                        </div>
                      </div>
                      <input className="frame-3-dvZ" value="Sign In" type="submit" onClick={handleClick}/>
                    </div>
                    <p className="forgot-password-L4H"><a href="#!" onClick={handleOpen}>Forgot password?</a></p>
                  </div>

                  <p className="dont-have-an-account-create-account-GTj">
              <span>
                Don’t have an account?
              </span>
                    {/* <span class="dont-have-an-account-create-account-GTj-sub-0">
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
                </span> */}
                    <Link to="/signup">
                      {" "}
                      <span className="dont-have-an-account-create-account-GTj-sub-1">
                    Create Account{" "}
                  </span>{" "}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </form>


        <div>
          <EmailModal handleClose={handleClose} handleOpen={handleOpen} open={open}/>
        </div>

      </>
  );
}
export default Login;

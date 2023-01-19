import React from 'react'
import "./resetpassword.css";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <form>
    <div class="login-decapay-3rZ">
      <div class="frame-8671-N89">
        <div class="frame-8670-7Ld">
          <img class="pay-Eg9" src="./assets/pay-iFT.png" />
          <Link to="/">
            <p class="decapay-mg5">DecaPay</p>{" "}
          </Link>
        </div>
        <div class="frame-8669-JAD">
          <p class="login-Dny">Password Reset </p>
          <div class="frame-8668-MeH">
            <div class="frame-8667-K5K">
              <div class="frame-8666-GmF">
                <div class="frame-8665-S9w">
                  <div class="frame-6-oFP">
                    <div class="frame-4-kRX">
                      <p class="email-f2h">New Password</p>
                      <input
                        class="frame-2-B13"
                        name="password"
                        placeholder="Enter new password"
                        type="email"
                      />
                    </div>
                    <div class="frame-5-44q">
                      <p class="password-21f">Confirm Password</p>
                      <input
                        class="frame-3-kyF"
                        name="password"
                        placeholder="Confirm Password"
                        type="password"
                      />
                    </div>
                  </div>
                </div>
                <input class="frame-3-dvZ" value="Reset" type="submit"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
  )
}

export default ResetPassword;

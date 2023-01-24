import React, {useState} from "react"
import {Link, useNavigate} from "react-router-dom";
import Loader from "../../globalresources/Loader";
import ResponseMessage from "../../globalresources/modals/ResponseMessage";
import axios from "axios";
import {baseEndpoint} from "../../globalresources/Config";


function EditProfile(){
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const [isSpinning, setisSpinning]=useState(false);
    const [responseMessage, setResponseMessage] =useState(null);

    const handleChange = (e) => {
        e.persist();
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setResponseMessage(null);
        setisSpinning(true);
        console.log(formData);

        /* Post Method */
        try {
            const response = await axios.post(
                baseEndpoint + "/api/v1/auth/register",
                formData
            );
            console.log(response);
            setisSpinning(false);
            setResponseMessage("Registration successful");
            navigate("/login");
        } catch (error) {
            console.log(error.message);
            setisSpinning(false);
            setResponseMessage("error : " + error.message + "- an error has occurred");
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <div className="sign-up-decapay-3kM">
                <div className="frame-8671-Yh7">
                    <a
                        className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                        href="#!"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <img
                            src="/assets/ellipse-8-bg-CXT.png"
                            className="rounded-circle"
                            height={22}
                            alt=""
                            loading="lazy"
                        />
                    </a>
                    <div className="frame-8669-UjB">
                        <p className="create-an-account-1z1">Edit Profile</p>
                        <div className="frame-8668-vbB">
                            <div className="frame-8666-HAq">
                                <div className="frame-6-2eD">
                                    <div className="frame-4-AkR">
                                        <p className="first-name-vzV">First Name</p>
                                        <input
                                            className="frame-2-fBP"
                                            placeholder="Enter your first name"
                                            name="firstName"
                                            type="text"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="frame-6-LYR">
                                        <p className="last-name-JVF">Last Name</p>
                                        <input
                                            className="frame-2-3Sq"
                                            placeholder="Enter your last name"
                                            name="lastName"
                                            type="text"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="frame-7-wHK">
                                        <p className="email-6g1">Email</p>
                                        <input
                                            className="frame-2-35T"
                                            placeholder="Enter your email"
                                            name="email"
                                            type="email"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="frame-8-wAq">
                                        <p className="phone-number-6pR">Phone Number</p>
                                        <input
                                            className="frame-2-Efj"
                                            placeholder="Enter your phone number"
                                            name="phoneNumber"
                                            type="number"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="frame-5-Lim">
                                        <p className="password-confirmation-Jfb">Password</p>
                                        <input
                                            className="frame-3-qQd"
                                            placeholder="Enter Password"
                                            name="password"
                                            type="password"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="frame-5-Lim">
                                        <p className="password-confirmation-Jfb">Confirm Password</p>
                                        <input
                                            className="frame-3-qQd"
                                            placeholder="Confirm Password"
                                            name="confirmPassword"
                                            type="password"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <button className="frame-3-jku" value="Sign Up"
                                        type="submit">
                                    Sign up <Loader status={isSpinning}/>
                                </button>
                            </div>
                            <p className="already-have-an-account-login-FDT">
                <span className="already-have-an-account-login-FDT-sub-0">
                  Already have an account?{" "}
                </span>
                                <Link to="/login">
                  <span className="already-have-an-account-login-FDT-sub-1">
                    Login
                  </span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {responseMessage && <ResponseMessage message={responseMessage}/>}
        </form>

    )

}
export default EditProfile;
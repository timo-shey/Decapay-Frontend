import React, {useRef, useState} from "react"
import {Link, useNavigate} from "react-router-dom";
import Loader from "../../globalresources/Loader";
import ResponseMessage from "../../globalresources/modals/ResponseMessage";
import axios from "axios";
import {baseEndpoint} from "../../globalresources/Config";
import "./EditProfile.css";


function EditProfile(){
    const [formData, setFormData] = useState({});
    const [file , setFile] = useState();
    const navigate = useNavigate();
    const inputRef = useRef(null)
    const hiddenFileInput = useRef(null);
    const [imageToForm, setImageToForm] = useState(null);
    const END_POINT_URL = baseEndpoint+"/api/v1/user/upload-profile-picture";

    const handleClick = () =>{
        hiddenFileInput.current.click();
 };

    const addImageToForm = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (e) => {
                setImageToForm(e.target.result);
            };
        }
    };

    const removeImage = () =>{setImageToForm(null)};





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

    const handleUpload = (e) => {
        e.preventDefault();
        if (!inputRef.current.value) return;
        const formData = new FormData();
        formData.append("file", imageToForm);
        console.log("image posted: " + imageToForm);

        axios      .post(END_POINT_URL, formData, {
            headers: { Accept: "application/json" },
        })
            .then((response) => {
                //inputRef.current.value = "";
                //dispatch(addPost(response.data));
                console.log(response.data);
                //removeImage();
            })
            .catch((error) => {
                console.log(error);
            });
    };




    const handleFile = (e)=>{
        setFile(e.target.files[0]);
        console.log(e.target.files[0])
    }

    // const handleUpload = ()=>{
    //     const token = localStorage.getItem("token");
    //     const formData = new FormData;
    //     formData.append('file', file);
    //
    //     fetch(
    //         baseEndpoint+"/api/v1/user/upload-profile-picture",
    //         {
    //             method: "POST",
    //             headers:{
    //                 Authorization: `Bearer ${token}`
    //             },
    //             body: formData
    //         }
    //     ).then((res)=>
    //         res.json()
    //     ).then((result)=> {
    //         setFile(result)
    //         console.log('success',result)
    //     }).catch(err =>{
    //             console.error("Error:",err);
    //         });
    //
    // }

    return(
        <form onSubmit={handleUpload}>
            <div className="sign-up-decapay-3kM">
                <div className="frame-8671-Yh7">
                    {imageToForm && (
                        <div onClick={removeImage} className="frame-8670-u1s">
                            {/*<a*/}
                            {/*    className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"*/}
                            {/*    href="#!"*/}
                            {/*    id="navbarDropdownMenuLink"*/}
                            {/*    role="button"*/}
                            {/*    data-mdb-toggle="dropdown"*/}
                            {/*    aria-expanded="false"*/}
                            {/*>*/}
                            <img
                                // src={file}
                                // className="rounded-circle profile-img"
                                // height={22}
                                // alt=""
                                // loading="lazy"
                                src={imageToForm}
                            />
                            {/*</a>*/}

                        </div>
                    )}

                    <div
                        onClick={handleClick} >
                    <p>upload image</p>

                    <input ref = {hiddenFileInput} type="file"
                           onChange={addImageToForm} accept="image/**" hidden/>
                        {/*<input  onChange={handleFile} onClick={handleUpload} type="file" id="file"/>*/}
                        {/*<label for ="file">Upload photo</label>*/}


                    </div>
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
                                    Save Changes <Loader status={isSpinning}/>
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
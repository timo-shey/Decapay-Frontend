import React, {useState} from "react";
import "./CreateCategory.css";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

function CreateCategory() {
    const navigate = useNavigate();
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value)
        console.log(e)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        const obj = {
            'name': text
        }
        console.log(obj)
        const res = await fetch("http://localhost:8082/api/v1/budgets/category/create", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify(obj)
        });

        const data = await res.json();
        console.log(data)
        navigate("/internal_link/budget-category-list");

    }

    return (
        <div className="create-category-decapay-Da9">
            <img className="ellipse-4-XKw" src="/assets/ellipse-4-f3X.png"/>
            <div className="frame-8794-Sho">
                <div className="frame-8780-ySq">
                    <img className="back-arrow-Gwj" src="/assets/back-arrow-YD7.png"/>
                    <p className="back-ckh">Back</p>
                </div>
                <div className="frame-8793-h1T">
                    <p className="what-do-you-usually-spend-on-qNZ">
                        What do you usually spend on?
                    </p>

                    <div className="frame-8792-wRb">
                        <div className="frame-4-uNR">
                            <form onSubmit={handleSubmit}>
                                <p className="name-of-category-Tuj">Name of Category</p>
                                <input
                                    className="frame-2-PYV"
                                    placeholder="Enter name of item"
                                    name="category"
                                    type="text"
                                    value={text}
                                    onChange={handleChange}
                                />
                                <br/><br/>
                                <button type="submit" className="frame-8754-GcH">Add</button>
                                {/*<Link*/}
                                {/*  className="frame-8754-GcH"*/}
                                {/*  to="/internal_link/budget-category-list"*/}
                                {/*>*/}

                                {/*</Link>*/}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateCategory;

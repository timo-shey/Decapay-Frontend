import React from "react";
import "./CreateCategory.css";
import { Link } from "react-router-dom";

function CreateCategory() {
  return (
    <div className="create-category-decapay-Da9">
      <img className="ellipse-4-XKw" src="/assets/ellipse-4-f3X.png" />
      <div className="frame-8794-Sho">
        <div className="frame-8780-ySq">
          <img className="back-arrow-Gwj" src="/assets/back-arrow-YD7.png" />
          <p className="back-ckh">Back</p>
        </div>
        <div className="frame-8793-h1T">
          <p className="what-do-you-usually-spend-on-qNZ">
            What do you usually spend on?
          </p>

          <div className="frame-8792-wRb">
            <div className="frame-4-uNR">
              <form>
                <p className="name-of-category-Tuj">Name of Category</p>
                <input
                  className="frame-2-PYV"
                  placeholder="Enter name of item"
                /> 
                <br/><br/>
                <Link
                  className="frame-8754-GcH"
                  to="/internal_link/budget-category-list"
                >
                  <button className="frame-8754-GcH">Add</button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCategory;

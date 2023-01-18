import React, { useEffect, useState } from "react";
import "./CreateBudget.css";
import { Link } from "react-router-dom";
function CreateBudget() {
    const [period, changePeriod] = useState(null);
    
      const selector= (el) => document.querySelector(el);
      useEffect (() => {
      if(period==null){
        selector(".start-date").style.display="none";
        selector(".end-date").style.display="none";
      }
      else if(period=="custom"){
        selector(".start-date").style.display="block";
        selector(".end-date").style.display="block";
      }
      else{
        selector(".start-date").style.display="block";
        selector(".end-date").style.display="none";
      }
    },[period]);
  return (
    <div className="create-budget-decapay-8vu">
      <div className="frame-8812-s7o">
        <div className="frame-8811-b3o">
          <div className="frame-8780-iPK">
            <img className="back-arrow-f3f" src="/assets/back-arrow.png" />
            <Link to="/decapay/dashboard" className="back-zbj">
              Back
            </Link>
          </div>
          <p className="create-budget-th7">Create Budget</p>
        </div>
        <form >
          <div className="frame-8666-RS9">
            <div className="frame-6-yiZ">
              <div className="frame-4-vNu">
                <p className="title-gcy">Title</p>
                <input className="frame-2-d2R" placeholder="Enter title" />
              </div>
              <div className="frame-6-VqK">
                <p className="amount-ey7">Amount</p>
                <input className="frame-2-Bi9" placeholder="Enter amount" />
              </div>
              <div className="frame-7-41F">
                <p className="budget-period-Qqo">Budget Period</p>
                <select className="frame-2-LzM" onChange={(e)=>changePeriod(e.target.value)} name="period">
                  <option value="null"></option>
                  <option value="daily">DAILY</option>
                  <option value="weekly">WEEKLY</option>
                  <option value="montly">MONTLY</option>
                  <option value="yearly">YEARLY</option>
                  <option value="custom">CUSTOM</option>
                </select>
              </div>
              <div className="frame-7-41F dateInput">
                <div className="row">
                  <div className="col-6 start-date">
                  <p className="amount-ey7 date-label">Start Date</p>
                <input className="frame-2-Bi9" type="date" name="startDate" />
                  </div>
                  <div className="col-6 end-date">
                  <p className="amount-ey7 date-label">End Date</p>
                <input className="frame-2-Bi9" type="date" name="endDate" />
                  </div>
                </div>
              </div>
              <div className="frame-5-XZ3">
                <p className="description-tuP">Description</p>
                <input
                  className="frame-3-d6H"
                  placeholder="Add description here..."
                />
              </div>
            </div>
            <Link to="/internal_link/budget-created" className="frame-3-WA5" >
              <input  className="frame-3-WA5" value="Done" type="submit" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CreateBudget;
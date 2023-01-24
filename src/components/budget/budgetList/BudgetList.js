import React from "react";
import "./BudgetList.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseEndpoint } from "../../../globalresources/Config";

function BudgetList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getBudgetList = async () => {
      const taskFromServer = await fetchBudgets();
      setList(taskFromServer);
    };

    getBudgetList();
  }, []);

  const fetchBudgets = async () => {
    const token = localStorage.getItem("token");

    const res = await fetch(baseEndpoint + "/api/v1/budgets", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    return data;
  };

  return (
    <main>
      <div className="budget-list-decapay-Do7">
        <div className="frame-8810-kY9">
          <Link to="/decapay/create-budget">
            <div className="cr1">Create Budget</div>
          </Link>
          <br />
          <br />
          <div className="frame-8809-GmP">
            {/* <div className="frame-8780-Q6u">
              <img
                className="back-arrow-94V"
                src="/assets/back-arrow-gGh.png"
              />
              <p className="back-t25">Back</p>
            </div> */}

            <p className="budget-list-Nxq">Budget List</p>
          </div>
          <div className="frame-8805-79j">
            <div className="frame-8804-fS9">
              <p className="most-recent-1F7">Most recent</p>
              <p className="showing-1-of-16-YVw">Showing 1 of 16</p>
            </div>

            {list.map((item) => (
              <div key={item.id} className="frame-8806-HCd">
                <div className="frame-8805-RZj">
                  <div className="frame-8799-x3s">
                    <p className="budget-1-monthly-hn9">
                      {" "}
                      Budget {item.budgetId}
                    </p>
                    <img className="option-qdT" src="/assets/option-2Qq.png" />
                  </div>
                  <div className="frame-8800-nHo">
                    <p className="budget-amount-WzV">Budget amount</p>
                    <p className="n5000-eqo">{item.amount}</p>
                  </div>
                  <div className="frame-8801-nh7">
                    <p className="total-amount-spent-Kh3">Total amount spent</p>
                    <p className="n8000-ezD">{item.totalAmountSpent}</p>
                  </div>
                  <div className="frame-8802-zoB">
                    <p className="percentage-9RB">Percentage</p>
                    <p className="item-397-J3B">{item.percentage * 100}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pagination-button-group-CmP">
          <div className="pagination-button-group-base-7NZ">
            <img className="arrow-left-Ei5" src="./assets/arrow-left.png" />
            <p className="text-mT7">Previous</p>
          </div>
          <div className="pagination-button-group-base-sW9">1</div>
          <div className="pagination-button-group-base-MgD">2</div>
          <div className="pagination-button-group-base-4Kj">3</div>
          <div className="pagination-button-group-base-Mpd">...</div>
          <div className="pagination-button-group-base-TMs">8</div>
          <div className="pagination-button-group-base-xpR">9</div>
          <div className="pagination-button-group-base-U25">10</div>
          <div className="pagination-button-group-base-xhw">
            <p className="text-Vhs">Next</p>
            <img className="arrow-right-SND" src="./assets/arrow-right.png" />
          </div>
        </div>
        <button className="create-budget-7Pf">Create Budget</button>
      </div>
    </main>
  );
}

export default BudgetList;

import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "./BudgetCreated.css";
import { Link } from "react-router-dom";
import LineItemModal from "../../modals/LineItemModals";

function BudgetCreated() {
  const [value, onChange] = useState(new Date());
  const[itemModal, setItemModal]= useState(false);

  const createBudgetHandler = ()=>{
    setItemModal(true)
    }


  return (
    <main>
    <div className="budget-created-decapay-XyT">
      <img className="ellipse-4-fJy" src="/assets/ellipse-4-gUq.png" />
      <div className="frame-8768-mso">
        <div className="frame-8770-UnD">
          <div className="frame-8769-qcm">
            <div className="frame-8767-n2D">
              <div className="frame-8766-jCM">
                <div className="frame-8757-62u">
                  <div className="frame-8756-Eeu">
                    <div className="rectangle-2-zty"></div>
                    <div className="frame-8625-LC9">
                      <div className="my-budget-U3T">My Budget</div>
                      <div className="n3000000-PgD">N30,000.00</div>
                    </div>
                    <img
                      className="ellipse-3-XGd"
                      src="/assets/ellipse-3-rGq.png"
                    />
                  </div>
                </div>
                <div className="frame-8765-rJu">
                  <div className="frame-8761-P3w">
                    <div className="frame-8760-KCV">
                      <div className="frame-8758-szh">
                        <div className="total-amount-spent-dys">
                          Total Amount
                          <br />
                          spent
                        </div>
                        <div className="n20000-89w">N20,000</div>
                      </div>
                      <img
                        className="frame-8759-fQm"
                        src="/assets/frame-8759.png"
                      />
                    </div>
                  </div>
                  <div className="frame-8764-aXj">
                    <div className="frame-8763-KVK">
                      <div className="percentage-5UV">Percentage</div>
                      <div className="item-375-17F">3.75%</div>
                    </div>
                    <img className="frame-8762-8Sm" src="/assets/frame-8762.png" />
                  </div>
                </div>
              </div>
              <div className="calendar-2022-839-2022-month-05-may-deR">
                <div className="header-Xzh">
                  <div className="calendar-2022-839-atoms-head-epR">May</div>
                </div>

                <div>
                  <Calendar onChange={onChange} value={value} />
                  <h5>{value.toString()}</h5>
                </div>
              </div>
            </div>
            <div className="frame-8742-Ui5">
              <img
                className="empty-folder-zRX"
                src="/assets/empty-folder-uvq.png"
              />
              <p className="no-line-item-found-in-this-budget-Wem">
                No line item found in this Budget{" "}
              </p>
            </div>
          </div>

          <div className="frame-8754-S2d">
            <img className="plus-mKo" src="/assets/plus-NyP.png" />

              <div className="create-budget-7Pf" onClick={createBudgetHandler} >Create Budget Line Item</div>
          </div>
        </div>
      </div>
    </div>

  <div>
    {
        itemModal&& 

        <LineItemModal 
        itemModal= {itemModal}
        setItemModal = {setItemModal}
        />
      }

</div>
    </main>
  );
}

export default BudgetCreated;

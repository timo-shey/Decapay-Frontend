import React from "react";
import "./BudgetCategoryList.css";

const BudgetCategoryCard = ({ item }) => {
  return (
    <div>
      <div className="frame-8722-XPf">
        <div className="frame-8717-FaZ">
          <img className="transport-ory" src="/assets/transport-wjX.png" />
          <p className="transportation-YJm">{item.name}</p>
        </div>
        <img className="option-sM3" src="/assets/option-uxu.png" />
      </div>
    </div>
  );
};

export default BudgetCategoryCard;

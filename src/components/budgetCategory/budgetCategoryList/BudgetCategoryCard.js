import React, {useState} from "react";
import "./BudgetCategoryList.css";
import {baseEndpoint} from "../../../globalresources/Config";
import BudgetCategoryEditModal from "./BudgetCategoryEditModal";

const BudgetCategoryCard = ({ item }) => {

    const [budgetCategoryName, setBudgetCategoryName]= useState("");
    const [budgetCategoryId, setBudgetCategoryId] = useState("");


    const [open, setOpen] = React.useState(false);
    const handleOpen = (e) =>{
        setOpen(true);

        setBudgetCategoryName(e.target.dataset.name);
        setBudgetCategoryId(e.target.dataset.id);

    }
    const handleClose = () => setOpen(false);

    // const handleChange = (e) => {
    //     e.persist();
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     setisSpinning(true);
    // };

    // const createBudgetCategory = (data) => {
    //     const token = localStorage.getItem("token");
    //     fetch(baseEndpoint+"/api/v1/budgets/category/create",{
    //         method:"POST",
    //         headers:{
    //             "content-type":"application/json",
    //             Authorization: `Bearer ${token}`
    //         },
    //         body:JSON.stringify(data)
    //     }).then(response=>{
    //         console.log(response);
    //         setResponseMessage("Budget Category Added");
    //         setisSpinning(false);
    //
    //         setBudgetCategoryName("");
    //     }).catch(error=>{
    //         console.log(error.message);
    //         setResponseMessage("error : "+ error.message + "- Budget category not added");
    //         setisSpinning(false);
    //     });
    // };

  return (
      <div className="frame-8722-XPf budgetCategoryList">
        <div className="frame-8717-FaZ">
          <p className="transportation-YJm">{item.name}</p>
        </div>


          <div className="dropdown button-dropdown">
              <button className="btn btn-secondary dropdown-toggle dropdown-bg" type="button" id="dropdownMenuButton1"
                      data-bs-toggle="dropdown" aria-expanded="false">
                  {/*<img className="option-sM3 dropdown-image" src="/assets/option-uxu.png" />*/}
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="#" onClick={handleOpen}
                         data-name={item.name}  data-id={item.id}>Edit</a></li>
                  <li><a className="dropdown-item" href="#" >View</a></li>
              </ul>
          </div>

          <BudgetCategoryEditModal
              handleClose={handleClose}
              handleOpen={handleOpen}
              open={open}
              budgetCategoryId={budgetCategoryId}
              budgetCategoryName={budgetCategoryName}

          />

    </div>
  );
};

export default BudgetCategoryCard;

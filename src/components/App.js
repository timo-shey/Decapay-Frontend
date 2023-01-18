import React from "react";
import Homepage from "./homepage/Homepage";
import Login from "./login/login";
import SignUp from "./signup/SignUp";
import NoBudgetCreated from "./budget/noBudgetCreated/NoBudgetCreated";
import BudgetCreated from "./dashboard/budgetCreated/BudgetCreated";
import CreateBudget from "./budget/createBudget/CreateBudget";
import CreateBudgetCategory from "./budgetCategory/createBudgetCategory/CreateBudgetCategory";
import CreateCategory from "./budgetCategory/createCategory/CreateCategory";
import BudgetCategoryList from "./budgetCategory/budgetCategoryList/BudgetCategoryList";
import BudgetList from "./budget/budgetList/BudgetList";
import ExpensesList from "./budgetCategory/expensesList/ExpensesList";
import BudgetCreatedDash from "./dashboard/budgetCreatedDashboard/BudgetCreatedDash";
import {Routes, Route} from 'react-router-dom';

import InternalLayout from "./Layout/internal_layout/InternalLayout";



function App(){
    
    return(

        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<SignUp/>}/>


        <Route path="internal_link" element={<InternalLayout/> }>
        <Route path='dashboard' element={<NoBudgetCreated/>}/>
            <Route path='create-budget' element={<CreateBudget/>}/>
            <Route path='budget-created' element={<BudgetCreated/>}/>
            <Route path='create-budget-category' element={<CreateBudgetCategory/>} />
            <Route path='create-category' element={<CreateCategory/>} />
            <Route path='budget-category-list' element={<BudgetCategoryList/>} />
            <Route path='budget-list' element={<BudgetList/>} />

            <Route path='dashboard-budget-created' element={<BudgetCreatedDash/>} />

            <Route path='expenses-list' element={<ExpensesList/>} />

            {/* <Route path='logout' element={<BudgetCreated/>}/> */}
        </Route>

        </Routes>
    );
        
}

export default App;
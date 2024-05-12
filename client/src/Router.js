import React, { Component } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from "./App";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import Activate from "./auth/Activate";
import Forgot from "./auth/Forgot";
// import Private from "./core/Private";
// import PrivateRoute from "./auth/PrivateRoute";

function Router(){
    return (
        <BrowserRouter>
           <Routes>
            <Route path="/" exact element={<App />} />
            <Route path="/signup" exact element={<SignUp />} />
            <Route path="/signin" exact element={<SignIn />} />
            <Route path="/accountActivation/:token" element={<Activate />} />
            <Route path="/password/forgot" exact element={<Forgot />} />
            {/* <PrivateRoute path="/private" exact component={Private} /> */}
            {/* <PrivateRoute path="/private" element={<PrivateRoute component={<Private />} />} /> */}
           </Routes>
        </BrowserRouter>
    )
};

export default Router; 
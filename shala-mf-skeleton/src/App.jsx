import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/home/Home";
//Remote Import
import SignIn from "shala_mf_auth/src/components/signin/SignIn";
import SignUp from "shala_mf_auth/src/components/signup/SignUp";

import "./index.css";

const App = () => (
  <BrowserRouter>
    <div className="conatiner">
      <Header />
      <div class='container'>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth/signin" exact element={<SignIn />} />
          <Route path="/auth/signup" exact element={<SignUp />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));

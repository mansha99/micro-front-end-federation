import React from "react";
import ReactDOM from "react-dom";
import SignIn from "./components/signin/SignIn";
import SignUp from "./components/signup/SignUp";
import Dummy from "./components/dummy/Dummy";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

const App = () => (
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Dummy />}></Route>
    <Route path="/auth/signin" element={<SignIn />}></Route>
      <Route path="/auth/signup" element={<SignUp />}></Route>
    </Routes>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));

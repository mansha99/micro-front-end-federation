import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SignIn = () => {
  useEffect(() => {}, []);

  return (
    <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4">
    <div class='card'>
    <div class='card-header'>
      <h4>SignIn</h4>
      </div>
    <div class='card-body'>
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        ></input>
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        ></input>
      </div>
     
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
    </div>
    </div>
    </div>
    <div class="col-md-4"></div>
    </div>

  );
};
export default SignIn;

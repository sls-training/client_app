import React from "react";
import { Navigate } from "react-router-dom";

import UserMicropostsForm from "../UserMicropostsForm";
import LogoutButton from "../LogoutButton";

const Home = () => {
  return (
    <div>
      <LogoutButton/>
      <h1>Home</h1>
      <UserMicropostsForm />
    </div>
  );
}

const HomePage = () => {
  return (
    <>
      {
        localStorage.getItem("Flag") ? <Home /> : <Navigate to="/login" />
      }
    </>
  );
};

export default HomePage;

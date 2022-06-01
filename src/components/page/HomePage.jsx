import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';

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
        Cookies.get("login_flag") ? <Home /> : <Navigate to="/login" />
      }
    </>
  );
};

export default HomePage;

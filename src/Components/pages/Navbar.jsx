import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { v4 as uuidv4 } from 'uuid';
const links = [
  {
    to: "/",
    title: "Home"
  },
  {
    to: "/about",
    title: "About"
  },
  {
    to: "/books",
    title: "Books"
  },
  {
    to: "/login",
    title: "Login"
  },
  {
    to: "/logout",
    title: "Logout"
  }

];


export const Navbar = () => {
  // const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
const id= uuidv4()
  return (
    
      <div style={{ display: 'flex', justifyContent: "center", height: "50px", backgroundColor:"#f49a94",padding:"20px"}}>
      {
          links.map(({ to, title }) => (
            <div key={id} style={{ padding: 5 }}>
              <Link to={to}>{title}</Link>
            </div>
          ))
        }
     </div>
    
  );
};

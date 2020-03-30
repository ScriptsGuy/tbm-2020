import React from "react";

import "../styles/header.css";

export default function Header() {
  //   useEffect(() => {
  //     // Update the document title using the browser API
  //     function change() {
  //       document.body.style.backgroundColor = "red";
  //     }
  //   });
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  return (
    <div>
      <div id="mySidenav" className="sidenav">
        <a href="#close" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#client">Clients</a>
        <a href="#contact">Contact</a>
      </div>
      <ul>
        <li>
          <a className="navBrand" href="#logo">
            <span className="sideHumberger" onClick={openNav}>
              {" "}
              &#9776;
            </span>{" "}
            TheBigMaghreb
          </a>
        </li>
        <div className="desktop">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li className="rightLink">
            <a className="signin" href="#signin">
              Signin
            </a>
          </li>
          <li className="rightLink">
            <a className="signup" href="#signup">
              Signup
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}

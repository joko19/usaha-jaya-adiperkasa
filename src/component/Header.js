import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../style/header.css";

function changeGlowingLogo(e){
 
    e.target.src = "logo_uja_white_glow.svg";
}
function changeWhiteLogo(e){
  e.target.src = "logo_uja putih 1.png";
}


function Header() {
  return (
    <div style={{ backgroundColor: "#22284C", color: "white" }}>
     <nav class="navbar navbar-expand-lg navbar " style={{backgroundColor: "#22284C", color: "white"}}>
  <div class="container-fluid">
    <img class="logowhite" src="logo_uja putih 1.png" width="100.56px" height="47.56px"
      onMouseEnter={changeGlowingLogo}
     onMouseLeave={changeWhiteLogo}></img>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">Tentang Kami</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Produk Kami</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Authorized Dealer</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Berita</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/blog">Blog</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Header;

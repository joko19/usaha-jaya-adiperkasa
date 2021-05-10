import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../style/header.css";
import { isMobile } from "react-device-detect";
import logoujaputih1 from "./../img/icon/logo_uja putih 1.png";
import logoujaglow from "./../img/icon/logo_uja_white_glow.svg";

const navbarmenu = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Tentang Kami",
    href: "/tentang",
  },
  {
    title: "Produk Kami",
    href: "/produk",
  },
  {
    title: "Dealer",
    href: "/dealer",
  },
  {
    title: "Berita",
    href: "/berita",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];
function changeGlowingLogo(e) {
  e.target.src = logoujaglow;
}
function changeWhiteLogo(e) {
  e.target.src = logoujaputih1;
}

function openhome() {
  window.open("/", "_self");
}

function renderNavBar(currentPage) {
  let list = [];
  navbarmenu.forEach((element) => {
    if (currentPage === element.title) {
      list.push(
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href={element.href}>
            {element.title}
          </a>
        </li>
      );
    } else {
      list.push(
        <li class="nav-item">
          <a class="nav-link" href={element.href}>
            {element.title}
          </a>
        </li>
      );
    }
    //   list.push(<li class="nav-item">
    //   <a class="nav-link" aria-current="page" href={element.href}>{element.title}</a>
    // </li>);
  });
  return list;
}

function Header(props) {
  if (isMobile) {
    return (
      <div style={{ backgroundColor: "#22284C", color: "white" }}>
        <nav
          class="navbar fixed-top navbar-expand-lg navbar "
          style={{ backgroundColor: "#22284C", color: "white" }}
        >
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="container-fluid">
            <a href="/">
              <img
                class="logowhite"
                src={logoujaputih1}
                width="100.56px"
                height="47.56px"
                onMouseEnter={changeGlowingLogo}
                onMouseLeave={changeWhiteLogo}
                onClick={openhome}
                alt="logo "
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">{renderNavBar(props.currentPage)}</ul>
            </div>
          </div>
        </nav>
      </div>
    );
  } else {
    return (
      <div style={{ backgroundColor: "#22284C", color: "white" }}>
        <nav
          class="navbar fixed-top navbar-expand-lg navbar "
          style={{
            backgroundColor: "#22284C",
            color: "white",
            paddingLeft: 40,
          }}
        >
          <div class="container-fluid">
            <img
              class="logowhite"
              src={logoujaputih1}
              width="100.56px"
              height="47.56px"
              style={{ marginRight: 25 }}
              onMouseEnter={changeGlowingLogo}
              onMouseLeave={changeWhiteLogo}
              onClick={openhome}
              alt="logo"
            />
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">{renderNavBar(props.currentPage)}</ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;

import React from "react";
import { Grid, makeStyles, Card, Menu } from "@material-ui/core";
import { Fade } from "react-reveal";
import "./../style/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {

  const imglogo = ["instagramlogo.png", "facebook.png", "youtube.png"];

  const data_menu = [

    {
      classname: "sub-menu-top",
      menu : "Tentang Kami"
    },
    {
      classname : "sub-menu",
      menu : "Produk Kami"
    },
    {
      classname : "sub-menu",
      menu : "Authorized Dealers"
    },
    {
      classname:  "sub-menu",
      menu : "Berita"
    },
    {
      classname : "sub-menu",
      menu: "Blog"
    }

  ];
  const data_contact_us =[
    {
      img: "iconlocation.png",
      data : "Jl.Kedinding Indah No.3-5, Sby"
    },
    {
      img: "iconemail.png",
      data: "admin@ujadiperkasa.com"
    },
    {
      img: "iconphone.png",
      data: "(031) - 51500278"
    },
  
  ];

  function mediaSocialList(){
    let list = [];
    imglogo.forEach(element =>{
      list.push(<li class="list-inline-item" id="" ><img src={element}></img></li>)
    });
    return list;
  }

  function contactusList() {
    let list = [];
    
    data_contact_us.forEach(element =>{
      
      list.push(<ul class="list-unstyled-inline" id=""> <li class="list-inline-item">
      <img src={element.img}></img> 
      </li>
      <li class="list-inline-item" id="data_contact_us">
      <p>{element.data}</p>
      </li> 
      </ul>);
      
    });
    return list;
  }

 function menuList() {
    let list = [];
    data_menu.forEach(element => {
      list.push(<li><a href="#" class={element.classname}>{element.menu}</a></li>)
    });
    // for(i = 1; i<data_menu.length; i++){
    //   list.push(<li><a href="#" class={data_menu[i].classname}>{data_menu[i].menu}</a></li>)
    // }
    return list;
  }
  return (
    <div style={{ backgroundColor: "#22284C", color: "white" }} >
      <div class="row">
        <div class="col-md-auto">
        <img class="logo-uja-footer" src="logo_uja putih 1.png" width="104px" heigth="71px"></img>
        <p className="nama-perusahaan">PT Usaha Jaya Adiperkasa</p>
        </div>
        <div class="col">
          <ul class="list-unstyled">
             <li>
            <p className="title-menu-footer">Menu</p>
          
            </li>

            {menuList()}
          </ul>
        </div>
        <div class="col-5">
          <ul class="list-unstyled">
            <li>
              <p className="title-menu-footer">Kontak Kami</p>
            </li>
            <li>
              <ul class="list-unstyled-inline" id=""> 
                {contactusList()}
              </ul>
            </li>
            <li>
              <ul class="list-unstyled-inline" >
                {mediaSocialList()}
              </ul>
            </li>
          </ul>
        </div>
      </div>
      </div>
  );
}

export default Footer;

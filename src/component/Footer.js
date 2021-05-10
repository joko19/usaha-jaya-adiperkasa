import React from "react";
import "./../style/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {isMobile} from 'react-device-detect';
import iconlocation from "./../img/icon/iconlocation.png"
import iconemail from "./../img/icon/iconemail.png"
import iconphone from "./../img/icon/iconphone.png"
import iconinstagram from "./../img/icon/iconinstagram.png"
import iconfb from "./../img/icon/iconfb.png"
import iconyoutube from "./../img/icon/iconyoutube.png"
import logoujaputih1 from "./../img/icon/logo_uja putih 1.png"

function Footer() {

  const imglogo = [{ icon : iconinstagram, link :"https://www.instagram.com/usahajaya.adiperkasa/"}, { icon : iconfb, link :"https://www.facebook.com/ujadiperkasa"}, {icon : iconyoutube, link:"https://www.youtube.com/channel/UCsy4EqK1eA1DIiB9zGVoWnA"}];

  const data_menu = [

    {
      classname: "sub-menu-top",
      menu : "Tentang Kami",
      link : "/about"
    },
    {
      classname : "sub-menu",
      menu : "Produk Kami",
      link : "/product"
    },
    {
      classname : "sub-menu",
      menu : "Authorized Dealers",
      link : "/dealers"
    },
    {
      classname:  "sub-menu",
      menu : "Berita",
      link : "/news-and-event"
    },
    {
      classname : "sub-menu",
      menu: "Blog",
      link : "/blog"
    }

  ];
  const data_contact_us =[
  
    {
      img: iconemail,
      data: "admin@ujadiperkasa.com",
      id: "contact-us-list-top"
    },
    {
      img: iconphone,
      data: "(031) - 51500278",
      id : "contact-us-list"
    },
  
  ];

  function mediaSocialList(){
    let list = [];
    imglogo.forEach(element =>{
      list.push(<li class="list-inline-item" id="media_social_item" ><a target="_blank" href={element.link} rel="noreferrer"><img src={element.icon} style={{width:60, height:60}} alt="gambar footer"></img></a></li>)
    });
    return list;
  }

  function contactusList() {
    let list = [];
    
    data_contact_us.forEach(element =>{
      
      list.push(<ul class="list-unstyled-inline" id={element.id}> <li class="list-inline-item">
      <img src={element.img}  style={{width:32, height:32}} alt="gambar footer"/>
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
      list.push(<li  class={element.classname}><a href={element.link} class="link_menu">{element.menu}</a></li>)
    });
    // for(i = 1; i<data_menu.length; i++){
    //   list.push(<li><a href="#" class={data_menu[i].classname}>{data_menu[i].menu}</a></li>)
    // }
    return list;
  }
  // function mobileVersion(){
  //   if(isMobile){
  //     return (<div class="w-100"></div>);
  //   } else { 
  //     return null;
  //   }
    
  // }

  if(isMobile){
    return( <div style={{ backgroundColor: "#22284C", color: "white" }} >
      <div class="container">
    <div class="row align-items-center">
      <div class="col">
      <img class="logo-uja-footer-mobile" src={logoujaputih1} width="104px" heigth="71px" alt="gambar footer"/>
      <p className="nama-perusahaan-mobile">PT.Usaha Jaya Adiperkasa</p>
      </div>
      </div>
      <div class="row">
      <div class="col">
        <ul class="list-unstyled">
           <li>
          <p className="title-menu-footer">Menu</p>
          </li>
          {menuList()}
        </ul>
      </div>
      </div>
      <div class="row">
      <div class="col">
        <ul class="list-unstyled">
          <li>
            <p className="title-menu-footer">Kontak Kami</p>
          </li>
          <li>
            <ul class="list-unstyled-inline" id="contact-us-list"> 
              {contactusList()}
             
            </ul>
          </li>
          <li>
            <ul class="list-unstyled-inline" id="media_social" >
              {mediaSocialList()}
              
            </ul>
          </li>
         
        </ul>
      </div>
      </div>
      <div class="row">
      <div class="col">
        <ul class="list-unstyled">
        <li>
            <p className="title-menu-footer">Lokasi Kami</p>
          </li>
          <ul class="list-unstyled-inline" id="contact-us-item">
          <li class="list-inline-item"><img src="iconlocation.png" alt="icon location"/></li>
          <li class="list-inline-item" id="data_contact_us"><p>Jl.Kedinding Indah No.3-5, Sby</p></li>
          </ul>
          <li class="list-inline-item" ><iframe title="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920.6013484287697!2d112.77586950700196!3d-7.227234008308983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f9b2619aeb3f%3A0x240afc723e7c084c!2sJl.%20Kedinding%20Indah%20No.3-5%2C%20RT.003%2FRW.05%2C%20Tanah%20Kali%20Kedinding%2C%20Kec.%20Kenjeran%2C%20Kota%20SBY%2C%20Jawa%20Timur%2060129!5e0!3m2!1sen!2sid!4v1619936882241!5m2!1sen!2sid" width="300" height="200" style={{border:0}} allowfullscreen="" loading="lazy"></iframe></li>
        </ul>
      </div>
      </div>
    </div>
    </div>);
  } else {
  return (
    <div style={{ backgroundColor: "#22284C", color: "white" }} >
      <div class="row">
        <div class="col-md-auto">
        <img class="logo-uja-footer" src={logoujaputih1} width="104px" heigth="71px" alt="logo"/>
        <p className="nama-perusahaan">PT.Usaha Jaya Adiperkasa</p>
        </div>
      
        <div class="col-2">
          <ul class="list-unstyled">
             <li>
            <p className="title-menu-footer">Menu</p>
            </li>
            {menuList()}
          </ul>
        </div>
        
        <div class="col-3">
          <ul class="list-unstyled">
            <li>
              <p className="title-menu-footer">Kontak Kami</p>
            </li>
            <li>
              <ul class="list-unstyled-inline" id="contact-us-list"> 
                {contactusList()}
               
              </ul>
            </li>
            <li>
              <ul class="list-unstyled-inline" id="media_social" >
                {mediaSocialList()}
                
              </ul>
            </li>
           
          </ul>
        </div>
       
        <div class="col-md-auto">
          <ul class="list-unstyled">
          <li>
              <p className="title-menu-footer">Lokasi Kami</p>
            </li>
            <ul class="list-unstyled-inline" id="contact-us-item">
            <li class="list-inline-item"><img src={iconlocation} style={{width:32, height:32}} alt="icon location"/></li>
            <li class="list-inline-item" id="data_contact_us"><p>Jl.Kedinding Indah No.3-5, Sby</p></li>
            </ul>
            <li class="list-inline-item" ><iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920.6013484287697!2d112.77586950700196!3d-7.227234008308983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f9b2619aeb3f%3A0x240afc723e7c084c!2sJl.%20Kedinding%20Indah%20No.3-5%2C%20RT.003%2FRW.05%2C%20Tanah%20Kali%20Kedinding%2C%20Kec.%20Kenjeran%2C%20Kota%20SBY%2C%20Jawa%20Timur%2060129!5e0!3m2!1sen!2sid!4v1619936882241!5m2!1sen!2sid" width="300" height="200" style={{border:0}} allowfullscreen="" loading="lazy"></iframe></li>
          </ul>
        </div>
      </div>
    
      </div>
  );
  }
}

export default Footer;

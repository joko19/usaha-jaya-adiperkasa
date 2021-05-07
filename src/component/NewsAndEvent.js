import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./../style/News.css";
import { Grid, makeStyles, Card, Slide, Select, MenuItem, FormControl } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import news1 from "./../img/news/News1.png"
import news2 from "./../img/news/News2.png"
import news3 from "./../img/news/News3.png"
import iconcalendar from "./../img/iconcalendar.png"
function NewsAndEvent() {


  // tulis semua item news 

  const news = [
    {
      img : news1,
      title: "ROADSHOW BERSAMA UJA",
      date : "16 April 2021",
      content : "Roadshow kali ini UJA akan mengunjungi 2 kota besar di Indonesia. salah satunya Bali dan Bondowoso. Yuk catat tanggalnya <br/><b>20 - 22 April 2021<br/>JAYA PRATAMA TEKNIK BALI </b> <br/><br/>Jl. Raya Sasetan No. 35/37 Kota Denpasar, Bali<br/><b>23 - 24 April 2021 TIMUR JAYA BONDOWOSO</b><br/> <br/> Jl. Raya Maesan 27 Bondowoso (Depan Pasar Maesan)<b>16 April 2021 - Management</b>",
    },
    {
      img : news2,
      title : 'Dalam Rangka Hari Film Nasional PT. Usaha Jaya Adiperkasa membuat film yang berjudul "NOT-ALONE"',
      date : "16 April 2021",
      content : 'Film garapan tim management UJA kali ini mengusung tema horor yang menceritakan tentang kepekaan terhadap diri sendiri dan lingkungan.<br/><br/> <b>Video lengkap dapat ditonton di channel youtube UJAdiperkasa</b><br/><br/> 30 Maret 2021 - Management'
    },
    {
      img : news3,
      title : 'Demi menjalin kedekatan & silaturahmi, PT. Usaha Jaya Adiperkasa mengadakan Gathering bersama dealer',
      date : "16 April 2021"
    }
  ];


 
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return( 
  <div>
    <Header currentPage="Berita"/>
    <div className="cover">
    <h1 className="cover-title">News & Event</h1>
    </div>
    <Grid container justify="center" style={{paddingBottom: 96}}>
      
      {news.map((element) => (
        <ItemNews data={element}/>
      ))}
    </Grid>
    <Footer/>
  </div>
  
  );
}

function ItemNews(props){
  return(
    <Grid container justify="center">
  <Grid item md={12} sm={12} xs={12} style={{paddingTop:82, paddingLeft:95}}>
    </Grid>
       <Grid item md={5} sm={12} xs={12}>
    <img src={props.data.img} style={{width:500, height:506}} ></img>
  </Grid>
  <Grid item md={6} sm={12} xs={12} style={{ paddingLeft:40}}>
  <p class="news-title">{props.data.title}</p>
    <p class="date-news">{props.data.date}</p>
    <div class="news-content" dangerouslySetInnerHTML={{ __html: props.data.content }} />
    {/* <p class="news-content">{props.data.content}</p>
   */}
  </Grid>
  </Grid>);
}

export default NewsAndEvent;

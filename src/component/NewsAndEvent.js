import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./../style/News.css";
import { Grid } from "@material-ui/core";
import news1 from "./../img/news/News1.png";
import news2 from "./../img/news/News2.png";
import news3 from "./../img/news/News3.png";
import MetaTags from "react-meta-tags";

function NewsAndEvent() {
  const news = [
    {
      img: news1,
      title: "ROADSHOW BERSAMA UJA",
      date: "16 April 2021",
      content:
        "Roadshow kali ini UJA akan mengunjungi 2 kota besar di Indonesia. salah satunya Bali dan Bondowoso. Yuk catat tanggalnya <br/><b>20 - 22 April 2021<br/>JAYA PRATAMA TEKNIK BALI </b> <br/><br/>Jl. Raya Sasetan No. 35/37 Kota Denpasar, Bali<br/><b>23 - 24 April 2021 TIMUR JAYA BONDOWOSO</b><br/> <br/> Jl. Raya Maesan 27 Bondowoso (Depan Pasar Maesan)",
        link: ""
    },
    {
      img: news2,
      title:
        'Dalam Rangka Hari Film Nasional PT. Usaha Jaya Adiperkasa membuat film yang berjudul "NOT-ALONE"',
      date: "30 Maret 2021",
      content:
        "Film garapan tim management UJA kali ini mengusung tema horor yang menceritakan tentang kepekaan terhadap diri sendiri dan lingkungan.<br/><br/> <b>Video lengkap dapat ditonton di channel youtube UJAdiperkasa</b><br/><br/>",
      link: "https://www.youtube.com/watch?v=P5dg09Gjd0Q&t=1s",
    },
    {
      img: news3,
      title:
        "Demi menjalin kedekatan & silaturahmi, PT. Usaha Jaya Adiperkasa mengadakan Gathering bersama dealer",
      date: "3 November 2019",
      link : ""
    },
  ];

function setTitle(){

}
  return (
    <div>

<MetaTags>
        <title>Berita | PT. Usaha Jaya Adi Perkasa</title>
        <meta
          name="description"
          content="Perusahaan Import dan Distributor di Bidang Industri Manufaktur"
        />
      </MetaTags>
      <Header currentPage="Berita" />
      <div className="cover">
        <h1 className="cover-title">Berita</h1>
      </div>
      <Grid container justify="center" style={{ paddingBottom: 96 }}>
        {news.map((element) => (
          <ItemNews data={element} />
        ))}
      </Grid>
      <Footer />
    </div>
  );
}

function ItemNews(props) {
  return (
    <Grid container justify="center">
      <Grid
        item
        md={12}
        sm={12}
        xs={12}
        style={{ paddingTop: 82, paddingLeft: 95 }}
      ></Grid>
      <Grid item md={5} sm={12} xs={12}>
        <img src={props.data.img} style={{ width: 500, height: 506 }} alt="gambar"/>
      </Grid>
      <Grid item md={6} sm={12} xs={12} style={{ paddingLeft: 40 }}>
        {props.data.link===""? <p class="news-title">{props.data.title}</p> : <a href={props.data.link} class="news-link" target="_blank"> <p class="news-title">{props.data.title}</p></a>}
        <p class="date-news">{props.data.date}</p>
        <div
          class="news-content"
          dangerouslySetInnerHTML={{ __html: props.data.content }}
        />
        {/* <p class="news-content">{props.data.content}</p>
         */}
      </Grid>
    </Grid>
  );
}

export default NewsAndEvent;

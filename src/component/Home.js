import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Grid, makeStyles, Card } from "@material-ui/core";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import { Fade } from "react-reveal";
import Rating from "@material-ui/lab/Rating";
// import Slider from "react-animated-slider";
import "./../style/Home.css";
import batuGerinda from "./../img/batu_gerinda.png";
import batuPoles from "./../img/batu_poles.png";
import borDuduk from "./../img/bor_duduk.png";
import pakingMesin from "./../img/paking_mesin.png";
import pakingMesinSquare from "./../img/paking_mesin_square.png";
// import kawatLasSquare from "./../img/kawat_las_square.png";
import kabelLas from "./../img/kabel_las 1.png";
import BatuPolesSquare from "./../img/batu_poles_square.png";
import Carousel from "react-material-ui-carousel";
import icEmpat from "./../img/icEmpat.png";
import icLaju from "./../img/icLaju.png";
import icCentralindo from "./../img/icCentralindo.png";
import icManyar from "./../img/icManyar.png";
import icAgung from "./../img/icAgung.png";
import icSurya from "./../img/icSurya.png";
import { useHistory } from "react-router-dom";
import MetaTags from "react-meta-tags";

function Home() {
  const [slideCount, setSlideCount] = useState(0);
  // const [count, setCount] = useState({});
  const product = [
    {
      name: "Paking Mesin",
      desc:
        "Paking Gasket TBA adalah sebuah bahan kertas yang terbuat dari kertas khusus gasket tipe cair (Liquid Gasket), oksirne silicone yang bermutu tinggi. Fungsi dari paking gasket TBA adalah untuk mengontrol kebocoran, bukan untuk mencegah seluruh kebocoran ",
      img: pakingMesinSquare,
      brand: "Klinger",
    },

    {
      name: "Kabel Las",
      desc:
        "Dengan barisan lengkap produk kabel las yang tahan lama dan dapat diandalkan, kami menyediakan produk yang cocok dihampir seluruh pengguna dan tingkat tekanan. Berbagai pilihan melengkapi dengan fitting yang sama macamnya dan kuat, yang dibuat dengan akurat dan diproduksi menjadi kualitas terbaik. Tersedia dalam berbagai ukuran dan konfigurasi.",
      img: kabelLas,
      brand: "Aulektro Deroflex",
    },
    {
      name: "Batu Poles",
      desc:
        "Sebagai produsen terkemuka yang berasal dari Jerman, dalam hal memoles, Langsol telah menjadi produk unggulan untuk pengerjaan permukaan dengan kualitas tinggi seperti logam, coats, dan plastik.  \n Produk ini menyediakan berbagai macam produk yang digunakan untuk memoles berbagai jenis bahan industri, mulai dari bahan stainless stell, alumunium, logam, logam non-ferrous, kayu clear coat hingga logam clear coat.",
      img: BatuPolesSquare,
      brand: "Langsol",
    },
  ];

  const nextProduct = () => {
    if (slideCount !== product.length - 1) {
      setSlideCount(slideCount + 1);
    }
    console.log(slideCount);
  };
  const previousProduct = () => {
    if (slideCount !== 0) {
      setSlideCount(slideCount - 1);
    }
    console.log(slideCount);
  };

  const client1 = [
    {
      name: "CV. Empat Jaya",
      img: icEmpat,
      desc:
        "PT.UJA adalah partner kami dalam memberikan suku cadang yang berkualitas dan terpercaya serta memberikan pelayanan yang terbaik kepada para konsumennya",
    },
    {
      name: "CV. Laju Jaya Teknik",
      img: icLaju,
      desc:
        "Produk konstruksi sangat berkualitas dan pelayanan yang memuaskan, belum pernah kecewa dengan produk PT.UJA selama ini",
    },
  ];
  const client2 = [
    {
      name: "PT. Centralindo Abadi Teknik ",
      img: icCentralindo,
      desc:
        "Kami telah mempercayakan semua kebutuhan konstruksi kami kepada PT.UJA sejak dulu karena kualitas yang masih tetap terjaga",
    },
    {
      name: "CV. Manyar",
      img: icManyar,
      desc:
        "PT.UJA adalah partner kami dalam memberikan suku cadang yang berkualitas dan terpercaya serta memberikan pelayanan yang terbaik kepada para konsumennya",
    },
  ];
  const client3 = [
    {
      name: "PT. Agung Nagasaki Teknik",
      img: icAgung,
      desc:
        "Produk konstruksi sangat berkualitas dan pelayanan yang memuaskan, belum pernah kecewa dengan produk PT.UJA selama ini",
    },
    {
      name: "CV.Surya Kencana Teknik",
      img: icSurya,
      desc:
        "Kami telah mempercayakan semua kebutuhan konstruksi kami kepada PT.UJA sejak dulu karena kualitas yang masih tetap terjaga",
    },
  ];
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <MetaTags>
        <title>Beranda | PT. Usaha Jaya Adi Perkasa</title>
        <meta
          name="description"
          content="Perusahaan Import dan Distributor di Bidang Industri Manufaktur"
        />
      </MetaTags>
      <Header currentPage="Home" />
      <div className="cover">
        <Grid container justify="center">
          <Grid item md={7} sm={12} xs={12} style={{ paddingRight: 50 }}>
            <Fade left>
              {" "}
              <p className="cover-title-home">
                Dapatkan Berbagai Macam Produk{" "}
                <p className="cover-quality">Berkualitas</p> Dari Para Pemasok
                Mancanegara
              </p>
              <p className="cover-desc">
                PT. Usaha Jaya Adiperkasa memiliki hubungan baik dengan para
                pemasok alat teknik, konstruksi, industri manufaktur dan pabrik
                dari mancanegara, seperti Jepang, Jerman, Inggris, Tiongkok,
                Taiwan, Australia, Italia dan tidak menutup kemungkinan adanya
                pemasok dari negara negara lain nantinya
              </p>
              <p className="cover-call" onClick={() => handleScroll()}>
                Hubungi Kami
              </p>
            </Fade>
          </Grid>
          <Grid item md={2} sm={6} sx={12}>
            <img className="cover-img" src={batuPoles} alt="batu poles" />
            <img className="cover-img" src={batuGerinda} alt="batu gerinda" />
          </Grid>
          <Grid item md={2} sm={6} sx={12}>
            <img className="cover-img" src={borDuduk} alt="bor duduk" />
            <img className="cover-img" src={pakingMesin} alt="paking mesin" />
          </Grid>
        </Grid>
      </div>

      {/* visi misi */}
      <Grid container justify="center" spacing={15} style={{ padding: 25 }}>
        <Grid item md={6} sm={12} xs={12} style={{ paddingRight: 30 }}>
          <Fade left>
            <p className="vm-title">Mengapa memilih kami ?</p>
            <p className="vm-desc">
              PT.Usaha Jaya Adiperkasa (PT.UJA) adalah salah satu perusahaan
              import dan distribusi yang berpengalaman, ahli dalam hal pengadaan
              alat, perangkat dan suku cadang untuk pabrik, konstruksi, Galangan
              kapal dan industri manufaktur.
            </p>
            <p className="vm-desc">
              PT.UJA menyatukan aspirasi dan kebutuhan masyarakat Indonesia
              dengan memasok berbagai macam produk berkualitas dan
              mendistribusikannya secara luas di seluruh wilayah Indonesia serta
              tetap mengutamakan dalam hal memberikan pelayanan serta menjaga
              hubungan kerjasama yang baik di antara para rekan kerja, pelanggan
              & konsumen yang ada.
            </p>
          </Fade>
        </Grid>
        <Grid item md={6} sm={12} xs={12} style={{ padding: 25 }}>
          <Fade bottom>
            <p className="vm-subtitle">Visi</p>
            <p className="vm-content">
              Menjadi sebuah perusahaan yang dapat dipercaya & diandalkan di
              seluruh Indonesia, khususnya wilayah Indonesia Timur sebagai salah
              satu penyedia berbagai macam alat-alat teknik yang berkualitas.
            </p>
            <h4 className="vm-subtitle">Misi</h4>
            <ul>
              <li className="vm-content">
                Memberikan pelayanan semaksimal mungkin kepada seluruh dealer &
                konsumen kami.
              </li>
              <li className="vm-content">
                Memastikan semua produk yang kami sediakan memiliki kualitas
                yang berstandart internasional & harga yang cukup bersaing.
              </li>
              <li className="vm-content">
                Memberikan rasa aman & nyaman kepada semua dealer serta konsumen
                kami terkait dengan merk & kualitas produk.
              </li>
            </ul>
          </Fade>
        </Grid>
      </Grid>

      {/* product */}
      <p className="product">Produk Kami</p>
      <Fade left>
        <ItemProduct item={product[slideCount]} />
      </Fade>
      <center>
        {slideCount === 0 ? (
          <ArrowBackIosRoundedIcon
            onClick={previousProduct}
            className="product-inactive"
          />
        ) : (
          <ArrowBackIosRoundedIcon
            onClick={previousProduct}
            className="product-active"
          />
        )}
        {"   "}
        {slideCount === product.length - 1 ? (
          <ArrowForwardIosRoundedIcon
            onClick={nextProduct}
            className="product-inactive"
          />
        ) : (
          <ArrowForwardIosRoundedIcon
            onClick={nextProduct}
            className="product-active"
          />
        )}
      </center>
      <br />

      {/* review client */}
      <p className="product">Penilaian Klien</p>
      <Grid container>
        <Grid item md={4}>
          {" "}
          <Carousel
            animation="fade"
            index={0}
            navButtonsAlwaysInvisible={true}
            indicators={false}
            interval={5000}
          >
            {client1.map((item) => (
              <ItemClient data={item} />
            ))}
          </Carousel>
        </Grid>
        <Grid item md={4}>
          {" "}
          <Carousel
            animation="fade"
            index={1}
            navButtonsAlwaysInvisible={true}
            indicators={false}
            interval={5500}
          >
            {client2.map((item) => (
              <ItemClient data={item} />
            ))}
          </Carousel>
        </Grid>
        <Grid item md={4}>
          {" "}
          <Carousel
            animation="fade"
            index={2}
            navButtonsAlwaysInvisible={true}
            indicators={false}
            interval={6000}
          >
            {client3.map((item) => (
              <ItemClient data={item} />
            ))}
          </Carousel>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

function ItemProduct(props) {
  let history = useHistory();

  const toProduct = (data) => {
    console.log(data);
    history.push({
      pathname: "/product",
      state: { brand: data },
    });
  };

  return (
    <Grid container justify="center" style={{ padding: 20 }}>
      <Grid item md={6} sm={12} xs={12} style={{ textAlign: "center" }}>
        <img src={props.item.img} className="product-img" alt="produk" />
      </Grid>
      <Grid item md={6} sm={12} xs={12}>
        <p className="product-title">{props.item.name}</p>
        <p className="product-desc">{props.item.desc}</p>
        <p
          className="product-detail"
          onClick={() => toProduct(props.item.brand)}
        >
          Lihat Detail
        </p>
      </Grid>
    </Grid>
  );
}

function ItemClient(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className="itc-container">
        <img src={props.data.img} style={{ width: 100 }} alt="client" />
        <p className="itc-title">{props.data.name}</p>
        <Rating name="read-only" value={5} readOnly />
        <p className="itc-desc">{props.data.desc}</p>
      </div>
    </Card>
  );
}

const useStyles = makeStyles({
  root: {
    maxWidth: 419,
    height: 360,
    padding: 19,
    backgroundColor: "#FBFBFB",
    margin: 20,
    display: "inline-block",
  },
});

export default Home;

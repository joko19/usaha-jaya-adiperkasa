import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Grid, Paper, FormControlLabel, Checkbox } from "@material-ui/core";
import Aulektro from "./../img/product/aulektro_deroflex.png";
import pict_product from "./../img/product/pict_produk.png";
import dormer_title from "./../img/product/dormer_title.png";
import dormer_pict_produk from "./../img/product/dormer_pict_produk.png";
import dormer_1 from "./../img/product/dormer_jobberdrill.png";
import dormer_2 from "./../img/product/dormerhsse.png";
import dormer_3 from "./../img/product/dormer_3.png";
import dormer_4 from "./../img/product/dormer_4.png";
import dormer_5 from "./../img/product/dormer_5.png";
import dormer_6 from "./../img/product/dormer_6.png";
import klinger_title from "./../img/product/klinger_title.png";
import klinger_pict_produk from "./../img/product/klinger_pict_produk.png";
import klinger_1 from "./../img/product/klinger_1.png";
import klinger_2 from "./../img/product/klinger_2.png";
import klinger_3 from "./../img/product/klinger_3.png";
import klinger_4 from "./../img/product/klinger_4.png";
import klinger_5 from "./../img/product/klinger_5.png";
import langsol_title from "./../img/product/langsol_title.png";
import langsol_pict_produk from "./../img/product/langsol_pict_produk.png";
import langsol_1 from "./../img/product/langsol_1.png";
import langsol_2 from "./../img/product/langsol_2.png";
import langsol_3 from "./../img/product/langsol_3.png";
import nippon_title from "./../img/product/nippon_title.png";
import nippon_pict_produk from "./../img/product/nippon_pict_produk.png";
import nippon_1 from "./../img/product/nippon_1.png";
import nippon_2 from "./../img/product/nippon_2.png";
import nippon_3 from "./../img/product/nippon_3.png";
import nippon_4 from "./../img/product/nippon_4.png";
import nippon_5 from "./../img/product/nippon_5.png";
import sp from "./../img/product/sp_.png";
import las_orange from "./../img/product/aulektrolasorange.png";
import "./../style/Product.css";
import icDownload from "./../img/product/unduh.png";
import active from "./../img/product/active.png";
import inactive from "./../img/product/inactive.png";

function Product(props) {
  const [data, setData] = useState("Aulektro Deroflex");

  const kategori = [
    "Aulektro Deroflex",
    "Dormer",
    "Klinger",
    "Langsol",
    "Nippon Resibon",
  ];

  useEffect(() => {
    if (props.history.location.state) {
      const brand = props.history.location.state.brand;
      window.scrollTo(0, 0);
      setData(brand);
    } else {
      setData("Aulektro Deroflex");
    }
  });

  const sekilas_product = [
    {
      category: "Aulektro Deroflex",
      img: sp,
      nama: "Kabel Las Biru - Full Tembaga",
      type: "AULEKTRO",
    },
    {
      category: "Aulektro Deroflex",
      img: las_orange,
      nama: "Kabel Las Orange - Full Tembaga",
      type: "DEROFLEX",
    },
    {
      category: "Dormer",
      img: dormer_1,
      nama: "HSS+TIN-TIP JOBBER DRILL",
      type: "A002",
    },
    {
      category: "Dormer",
      img: dormer_2,
      nama: "HSS-E JOBBER DRILL BRONZE COBALT",
      type: "A777",
    },
    {
      category: "Dormer",
      img: dormer_3,
      nama: "HSS CENTRE DRILL",
      type: "A200",
    },
    {
      category: "Dormer",
      img: dormer_4,
      nama: "END MILL 4 FLUTES",
      type: "C247",
    },
    {
      category: "Dormer",
      img: dormer_5,
      nama: "M MACHINE TAP SPIRAL FLUTE 45",
      type: "EX006H",
    },
    {
      category: "Dormer",
      img: dormer_6,
      nama: "M MACHINE/HAND TAP STRAIGHT FLUTE",
      type: "E500",
    },
    {
      category: "Klinger",
      img: klinger_1,
      nama: "Klinger SiL",
      type: "C4408",
    },
    {
      category: "Klinger",
      img: klinger_2,
      nama: "Klinger Top-Graph",
      type: "2000",
    },
    {
      category: "Klinger",
      img: klinger_3,
      nama: "Klingerit Universal",
      type: "3xA",
    },
    {
      category: "Klinger",
      img: klinger_4,
      nama: "Klingerit 100 Autralia",
      type: "",
    },
    {
      category: "Klinger",
      img: klinger_5,
      nama: "Klinger Packing Ring Cutter Autralia",
      type: "",
    },
    {
      category: "Langsol",
      img: langsol_1,
      nama: "Klinger SiL",
      type: "C4408",
    },
    {
      category: "Langsol",
      img: langsol_2,
      nama: "Klinger Top-Graph",
      type: "2000",
    },
    {
      category: "Langsol",
      img: langsol_3,
      nama: "Klingerit Universal",
      type: "3xA",
    },
    {
      category: "Nippon Resibon",
      img: nippon_1,
      nama: "Ceramic Grinding Wheel",
      type: "",
    },
    {
      category: "Nippon Resibon",
      img: nippon_2,
      nama: 'Grinding Wheels "IRON FREE"',
      type: "",
    },
    {
      category: "Nippon Resibon",
      img: nippon_3,
      nama: "Grinding Wheel",
      type: "A 24 S",
    },
    {
      category: "Nippon Resibon",
      img: nippon_4,
      nama: ' Cutting Wheel Super Cut "IRON FREE"',
      type: "",
    },
    {
      category: "Nippon Resibon",
      img: nippon_5,
      nama: "Cutting Wheel",
      type: "",
    },
  ];

  const produk = [
    {
      category: "Aulektro Deroflex",
      title: Aulektro,
      desc:
        "Dengan barisan lengkap produk kabel las yang tahan lama dan " +
        "dapat diandalkan, kami menyediakan produk yang cocok dihampir " +
        "seluruh pengguna dan tingkat tekanan.\nBerbagai pilihan " +
        "melengkapi dengan fitting yang sama macamnya dan kuat, yang" +
        "dibuat dengan akurat dan diproduksi menjadi kualitas terbaik." +
        "Tersedia dalam berbagai ukuran dan konfigurasi.",
      photo: pict_product,
    },
    {
      category: "Dormer",
      title: dormer_title,
      desc:
        "Dormer Tools merupakan produsen dan pemasok untuk industri alat teknik rotari dunia yang berasal dari U.K dan mulai dikenal secara global pada tahun 1975." +
        "Dormer merupakan brand yang berspesialisasi pada mata bor yang dapat digunakan pada media baja, stainless steel, plastik, serta berbagai media yang berbeda lainnya.",
      photo: dormer_pict_produk,
    },
    {
      category: "Klinger",
      title: klinger_title,
      desc:
        "Klinger Ltd merupakan bagian dari Klinger Group yang terkenal di dunia. Didirikan pada tahun 1886 oleh insyiur Australia Richard Klinger." +
        "Klinger Group telah menjadi yang terdepan dalam industri penyegelan. Klinger berspesialisasi dengan produk - produknya kedirgantaraan peralatan - peralatan, serta industri kimia." +
        "Para konsumen yang mencakup perusahaan - perusahaan global berskala besar juga telah mempercayai dan mengakui keunggulan kualitas dan kinerja produk - produk Klinger.",
      photo: klinger_pict_produk,
    },
    {
      category: "Langsol",
      title: langsol_title,
      desc:
        "Sebagai produsen terkemuka yang berasal dari Jerman, dalam hal memoles. Langsol telah menjadi produk unggulan untuk pengerjaan permukaan dengan kualitas tinggi seperti logam, coats, dan plastik." +
        "Produk ini menyediakan berbagai macam produk yang digunakan untuk memoles berbagai jenis bahan industri. Mulai dari bahan stainless steel, aluminium, logam, logam non-ferrous, kayu clear coat hingga logam clear coat.",
      photo: langsol_pict_produk,
    },
    {
      category: "Nippon Resibon",
      title: nippon_title,
      desc:
        "Nippon Resibon merupakan produk dari Resibon Japan Co Ltd, yang secara global dikenal sebagai ahli dalam memproduksi batu gerinda di Osaka, jepang sejak 1958. Sejak didirikan, telah diluncurkan beraneka produk unggulan berdasarkan ide murni dan teknologi yang memberikan hasil sempurna dalam menggerinda, memotong, dan memoles semua jenis besi dan material." +
        "Diantaranya terdapat “The Super Series” yang secara signifiikan dapat meningkatkan performa dari alat abrasi dan gerinda pada umumnya, “Colored Grinding Wheel” yang merubah persepsi industri terhadap seluruh kategori produk, dan “Flexible Grinding Wheel” merupakan jenis yang pertama dalam industri ini. Nippon Ressibon adalah merek profesional, dan produk ini juga telah menjadi merek unggulan dalam menggerinda dan memotong selama bertahun - tahun. ",
      photo: nippon_pict_produk,
    },
  ];

  let currentProduct = [];
  let currentSekilas = [];

  // const [sekilas, setSekilas] = useState({sekilasproduk});

  // console.log(sekilas.sekilasproduk);

  const clickProduct = (product) => {
    let item = produk.filter((x) => x.category === product);
    console.log(item);
    setData(product);
    setCurrentProduct();
  };

  function setCurrentProduct() {
    let item = produk.filter((x) => x.category === data);
    let itemsekilas = sekilas_product.filter((x) => x.category === data);
    currentProduct = item[0];
    currentSekilas = itemsekilas;
  }

  setCurrentProduct();
  return (
    <div>
      <Header currentPage="Produk Kami" />

      <div className="cover">
        <h1 className="cover-title">Produk Kami</h1>
      </div>
      <Grid container justify="center" style={{ marginTop: 100 }}>
        <Grid item md={3} sm={12} xs={12}>
          <Paper style={{ marginLeft: 50, padding: 25 }}>
            <p className="category-title">Kategori</p>
            <hr style={{ border: "3px solid #B4B4B4" }} />
            {kategori.map((item) => (
              <div className="category-main">
                {currentProduct.category === item ? (
                  <img src={active} />
                ) : (
                  <img src={inactive} />
                )}
                <div
                  className="category-menu-side"
                  onClick={() => clickProduct(item)}
                >
                  {item}
                </div>
              </div>
            ))}
          </Paper>
        </Grid>

        <Grid item md={8} sm={12} xs={12}>
          <Grid container>
            <Grid item md={6} sm={12} xs={12} style={{ padding: 25 }}>
              <img src={currentProduct.title} />
              <p className="product-content">{currentProduct.desc}</p>
            </Grid>
            <Grid item md={5} sm={12} xs={12}>
              <img src={currentProduct.photo} className="product-photo" />
              <p className="detail-info-title">DETAIL INFORMASI</p>
              <p className="detail-info">
                <img src={icDownload} /> Produk
              </p>
              <p className="detail-info">
                <img src={icDownload} /> Daftar Harga Produk
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <hr />
      <div className="sp">
        <h3 className="sp-title">SEKILAS PRODUK</h3>
        {currentSekilas.map((item) => (
          <Item_sekilas_product data={item} />
        ))}
        {/* {sekilas.sekilasproduk.map((item) =>(
          <Item_sekilas_product data={item}/>
        ))} */}
        {/* {sekilas.forEach(item => {
          <Item_sekilas_product data={item} />
        })} */}
      </div>
      <Footer />
    </div>
  );
}

export default Product;

function Item_sekilas_product(props) {
  return (
    <div className="sp-item">
      <img src={props.data.img} />
      <p className="sp-name">{props.data.nama}</p>
      <p className="sp-type">{props.data.type}</p>
    </div>
  );
}

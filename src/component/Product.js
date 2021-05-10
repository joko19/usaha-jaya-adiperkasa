import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Grid, Paper } from "@material-ui/core";
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
import nishiki_title from "./../img/product/nishiki_title.png";
import nishiki_pict_produk from "./../img/product/nishiki_pict_produk.png";
import nishiki_1 from "./../img/product/nishiki_1.png";
import nishiki_2 from "./../img/product/nishiki_2.png";
import nishiki_3 from "./../img/product/nishiki_3.png";
import nishiki_4 from "./../img/product/nishiki_4.png";
import nishiki_5 from "./../img/product/nishiki_5.png";
import roha_title from "./../img/product/roha_title.png";
import roha_pict_produk from "./../img/product/roha_pict_produk.png";
import roha_1 from "./../img/product/roha_1.png";
import roha_2 from "./../img/product/roha_2.png";
import roha_3 from "./../img/product/roha_3.png";
import roha_4 from "./../img/product/roha_4.png";
import roha_5 from "./../img/product/roha_5.png";
import shuangge_title from "./../img/product/shuangge_title.png";
import shuangge_pict_produk from "./../img/product/shuangge_pict_produk.png";
import shuangge_1 from "./../img/product/shuangge_1.png";
import shuangge_2 from "./../img/product/shuangge_2.png";
import shuangge_3 from "./../img/product/shuangge_3.png";
import shuangge_4 from "./../img/product/shuangge_4.png";
import shuangge_5 from "./../img/product/shuangge_5.png";
import t3a_title from "./../img/product/T3A_title.png";
import t3a_pict_produk from "./../img/product/t3a_pict_produk.png";
import t3a_1 from "./../img/product/t3a_1.png";
import westlake_title from "./../img/product/westlake_title.png";
import westlake_pict_produk from "./../img/product/westlake_pict_produk.png";
import westlake_1 from "./../img/product/westlake_1.png";
import westlake_2 from "./../img/product/westlake_2.png";
import westlake_3 from "./../img/product/westlake_3.png";
import westlake_4 from "./../img/product/westlake_4.png";
import westlake_5 from "./../img/product/westlake_5.png";
import yamato_title from "./../img/product/yamato_title.png";
import yamato_pict_produk from "./../img/product/yamato_pict_produk.png";
import yamato_1 from "./../img/product/yamato_1.png";
import yamato_2 from "./../img/product/yamato_2.png";
import yamato_3 from "./../img/product/yamato_3.png";
import yamato_4 from "./../img/product/yamato_4.png";
import yamato_5 from "./../img/product/yamato_5.png";
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
    "Nishiki",
    "Roha",
    "Shuang Ge",
    "T3A",
    "Westlake",
    "Yamato"
  ];

  useEffect(() => {
    if (props.history.location.state) {
      const brand = props.history.location.state.brand;
      window.scrollTo(0, 0);
      setData(brand);
    } else {
      setData("Aulektro Deroflex");
    }
  }, []);

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
    {
      category: "Nishiki",
      img: nishiki_1,
      nama: " Cup Brush",
      type: "SN-075A3",
    },
    {
      category: "Nishiki",
      img: nishiki_2,
      nama: "Twisted Wire Brush",
      type: "TN-075G5",
    },
    {
      category: "Nishiki",
      img: nishiki_3,
      nama: "Wheel Brush",
      type: "VH-106K5",
    },
    {
      category: "Nishiki",
      img: nishiki_4,
      nama: "Shank Wire Brush",
      type: "SE-010A3",
    },
    {
      category: "Nishiki",
      img: nishiki_5,
      nama: "N3 Nylon Filament Wire Type Grit #46",
      type: "",
    },
    {
      category: "Roha",
      img: roha_1,
      nama: "E6013 (RH-60)",
      type: "Mild Steel",
    },
    {
      category: "Roha",
      img: roha_2,
      nama: "RH-E7018",
      type: "High Tensile Steel",
    },
    {
      category: "Roha",
      img: roha_3,
      nama: "RH-E7018ER70S-6 (RH-70) WELDING WIRE ROLL CO2",
      type: "General Steel",
    },
    {
      category: "Roha",
      img: roha_4,
      nama: "WELDING WIRE ROLL CO2 E71T-1 ",
      type: "Stainless Steel",
    },
    {
      category: "Roha",
      img: roha_5,
      nama: "E308-16 (RH-308) STAINLESS STEEL ELECTRODE",
      type: "Stainless Steel",
    },
    {
      category: "Shuang Ge",
      img: shuangge_1,
      nama: "HS Series Hoist",
      type: "",
    },
    {
      category: "Shuang Ge",
      img: shuangge_2,
      nama: "HS -T Series Hoist",
      type: "",
    },
    {
      category: "Shuang Ge",
      img: shuangge_3,
      nama: "HSH - D Series Lever Blocks",
      type: "",
    },
    {
      category: "Shuang Ge",
      img: shuangge_4,
      nama: "GCL - AK Series Geared Trolley",
      type: "",
    },
    {
      category: "Shuang Ge",
      img: shuangge_5,
      nama: "GCT - AK Series Plain Trolley",
      type: ""
    },
    {
      category: "T3A",
      img: t3a_1,
      nama: "Paking Mesin",
      type: ""
    },
    {
      category: "Westlake",
      img: westlake_1,
      nama: "Light Type Bench Drilling Machine",
      type: "ZHX-13/I"
    },
    {
      category: "Westlake",
      img: westlake_2,
      nama: "Light Type Bench Drilling Machine",
      type: "ZQD4125/ZQD4132"
    },
    {
      category: "Westlake",
      img: westlake_3,
      nama: "Industrial Type Bench Drilling Machine",
      type: "Z516"
    },
    {
      category: "Westlake",
      img: westlake_4,
      nama: "Radial Drilling Machine",
      type: "Z3025x7/Z3032x7"
    },
    {
      category: "Westlake",
      img: westlake_5,
      nama: "High-Speed Accuracy Drilling Machine",
      type: "ZWG-4(A)"
    },
    {
      category: "Yamato",
      img: yamato_1,
      nama: "Regulator For Oxygen",
      type: ""
    },
    {
      category: "Yamato",
      img: yamato_2,
      nama: "Regulator For C02 + With Heater",
      type: ""
    },
    {
      category: "Yamato",
      img: yamato_3,
      nama: "Regulator For Nitrogen High Pressure",
      type: ""
    },
    {
      category: "Yamato",
      img: yamato_4,
      nama: "Large Cutting Tip (A)",
      type: ""
    },
    {
      category: "Yamato",
      img: yamato_5,
      nama: "Cutting Torch Medium Type 201",
      type: ""
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
    {
      category : "Nishiki",
      title : nishiki_title,
      desc : "Sikat kawat industri merupakan produk yang umum yang dapat ditemukan dan diproduksi di banyak negara. Yang membuat Nishiki King berbeda dari yang lain adalah produk ini menggunakan sistem cincin tetap, kawat lentur, dan metode pengolahan dalam memproduksi guna menghasilkan keseimbangan dalam berotasi selama beroperasi."+
      "Hal ini memastikan efisiensi kinerja yang terpercaya demi keselamatan penggunanya. Merek ini terus berinovasi dan memiliki berbagai macam sikat seperti power brushes, maintenance brushes, custom-designed conveyor cleaning brushes, dan strip brush seals.",
      photo : nishiki_pict_produk
    },
    {
      category : "Roha",
      title : roha_title,
      desc : "Produk - produk ROHA mencakup peralatan dan perlengkapan las. Produk ROHA adalah produk berkualitas dengan harga yang sangat terjangkau."+
      "Jajaran produk ROHA terus diperbarui dengan quality control yang tinggi, agar kinerja dan kualitas produk tetap terjaga dan mampu memberikan hasil yang maksimal.",
      photo : roha_pict_produk
    },
    {
      category : "Shuang Ge",
      title : shuangge_title,
      desc : "Produsen katrol rantai dan katrol tuas yang berasal dari Tiongkok ini telah berhasil mengekspor produk mereka ke lebih daro 60 negara di Eropa, Amerika, Timur Tengah, Australia, Asia Tenggara, Afrika."+
      "Produk ini telah mendapatkan reputasi yang baik dari klien mereka dan mematahkan persepsi mengenai produk buatan Tiongkok dengan secara terus menerus membuat produk berkualitas tinggi, aman, dan terpercaya serta pelayanan cepat dan efisien.",
      photo : shuangge_pict_produk
    },
    {
      category : "T3A",
      title : t3a_title,
      desc : "Paking Gasket TBA adalah sebuah bahan kertas yang terbuat dari kertas khusus gasket tipe cair (liquid Gasket), oksime silicone yang bermutu tinggi."+
      "Fungsi dari paking gasket TBA adalah untuk mengontrol kebocoran, bukan untuk mencegah seluruh kebocoran.",
      photo : t3a_pict_produk
    },
    {
      category : "Westlake",
      title : westlake_title,
      desc : "West Lake Drilling mesin Co, Ltd adalah produsen terbesar mesin bor, mesin milling & drilling, dan mesin trapping yang berasal dari Hangzhou, China yang berdiri sejak tahun 1956. Dengan merk “WEST LAKE”, ada berbagai jenis produk dengan kualitas tinggi dengan harga terjangkau. Kami memperoleh sertifikasi ISO 9002QA & ISO 9001:2000."+
      "West Lake merupakan merk yang memiliki kualitas mesin bor duduk yang baik. Sehingga mesin ini cocok untuk digunakan mulai dari hobi, hingga industri menengah ke atas.",
      photo : westlake_pict_produk
    },
    {
      category : "Yamato",
      title : yamato_title,
      desc : "Dengan pengalaman lebih dari 40 tahun, peralatan Yamato memiliki performa dan kinerja yang sangat baik. Motto produksi Yamato adalah “Selalu membuat produk = produk unggulan, dan perlengkapan yang mudah digunakan”. Yamato memiliki banyak sekali jajaran alat - alat potong dan las yang cocok untuk semua kebutuhan pengguna.”",
      photo : yamato_pict_produk
    }
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
                  <img src={active}  alt="active"/>
                ) : (
                  <img src={inactive} alt="inactive"/>
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
              <img src={currentProduct.title} alt="title product"/>
              <p className="product-content">{currentProduct.desc}</p>
            </Grid>
            <Grid item md={5} sm={12} xs={12}>
              <img src={currentProduct.photo} className="product-photo" alt="product-photos" />
              <p className="detail-info-title">DETAIL INFORMASI</p>
              <p className="detail-info">
                <img src={icDownload} alt="icon download" /> Produk
              </p>
              <p className="detail-info">
                <img src={icDownload} alt="icon download" /> Daftar Harga Produk
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <hr />
      <div className="sp">
        <h3 className="sp-title">SEKILAS PRODUK</h3>
        {currentSekilas.map((item) => (
          <ItemSekilasProduct data={item} />
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

function ItemSekilasProduct(props) {
  return (
    <div className="sp-item">
      <img src={props.data.img} alt="product"/>
      <p className="sp-name">{props.data.nama}</p>
      <p className="sp-type">{props.data.type}</p>
    </div>
  );
}

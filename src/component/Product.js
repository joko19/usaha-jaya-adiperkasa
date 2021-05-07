import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Grid, Paper } from "@material-ui/core";
import Aulektro from "./../img/product/aulektro_deroflex.png";
import pict_product from "./../img/product/pict_produk.png";
import sp from "./../img/product/sp_.png";
import "./../style/Product.css";
import icDownload from "./../img/product/unduh.png";

function Product() {
  const [data, setData] = useState([]);
  const kategori = ["Aulektro Dereflex", "Dormer", "Klinger", "Langsol"];
  const sekilas_product = [
    {
      img: sp,
      name: "Kabel Las Biru - Full Tembaga",
      type: "AULEKTRO",
    },
    {
      img: sp,
      name: "Kabel Las Biru - Full Tembaga",
      type: "AULEKTRO",
    },
    {
      img: sp,
      name: "Kabel Las Biru - Full Tembaga",
      type: "AULEKTRO",
    },
  ];

  const product=[
    {
      category: 'Aulektro Dereflex',
      title: Aulektro,
      desc: 'ini deskripsi',
      photo: pict_product,
    },
  ]

  const clickProduct = (product) => {
    console.log(product);
    setData(product);
  };
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
              <div onClick={() => clickProduct(item)}>{item}</div>
            ))}
          </Paper>
        </Grid>

        <Grid item md={8} sm={12} xs={12}>
          <Grid container>
            <Grid item md={6} sm={12} xs={12} style={{ padding: 25 }}>
              <h1>{data}</h1>
              <img src={Aulektro} />
              <p className="product-content">
                Dengan barisan lengkap produk kabel las yang tahan lama dan
                dapat diandalkan, kami menyediakan produk yang cocok dihampir
                seluruh pengguna dan tingkat tekanan. Berbagai pilihan
                melengkapi dengan fitting yang sama macamnya dan kuat, yang
                dibuat dengan akurat dan diproduksi menjadi kualitas terbaik.
                Tersedia dalam berbagai ukuran dan konfigurasi.
              </p>
            </Grid>
            <Grid item md={5} sm={12} xs={12}>
              <img src={pict_product} className="product-photo" />
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
        {sekilas_product.map((item) => (
          <Item_sekilas_product data={item} />
        ))}
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
      <p className="sp-name">{props.data.name}</p>
      <p className="sp-type">{props.data.type}</p>
    </div>
  );
}

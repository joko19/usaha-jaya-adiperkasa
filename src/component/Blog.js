import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./../style/Blog.css";
import t3a_1 from "./../img/product/t3a_1.png";
import blog1 from "./../img/blog/blog1.jpg";
import blog2 from "./../img/blog/blog2.jpg";
import blog3 from "./../img/blog/blog3.jpg";
import { isMobile } from "react-device-detect";
import MetaTags from "react-meta-tags";

function Blog() {
  const blogItem = [
    {
      index: 0,
      type: "Produk",
      title: "Memilih Spesifikasi Pada Produk Batu Gerinda",
      overview:
        "Di tengah perkembangan alat-alat teknik yang tumbuh sangat pesat, masih banyak di luar sana teman teman teknik belum mengetahui arti dari tulisan A24S / A30P / WA 60 yang terdapat di dalam kandungan abrasive wheel.",
      img: blog2,
    },
    {
      index: 1,
      type: "Produk",
      title: "Perbedaan Warna Dan Fungsi Produk Langsol",
      overview:
        "Langsol merupakan produk asal Jerman yang diformulakan khusus untuk memoles. Produk ini menyediakan beberapa pilihan tipe yang memiliki fungsinya masing-masing",
      img: blog3,
    },
    {
      index: 2,
      type: "Industri",
      title: "Fungsi Kertas TBA Firefly",
      overview:
        "Packing Gasket TBA FIREFLY adalah materi atau gabungan dari beberapa materi yang diapit di antara 2 sambungan mekanis yang dapat dipisah.Fungsi utama dari Packing Gasket TBA FIREFLY adaiah untuk mencegah kebocoran selama jangka waktu tertentu.",
      img: t3a_1,
    },
  ];

  function printBlog() {
    let row = [];
    let index = 0;
    if (isMobile) {
      for (let i = 0; i < blogItem.length; i++) {
        let item = blogItem[i];
        row.push(
          <div class="row" style={{ paddingTop: 100 }}>
            <div class="col">
              <img
                src={item.img}
                class="img-responsive"
                width="250"
                alt="gambar artikel"
              ></img>
              <p class="type">{item.type}</p>
              <p class="title">{item.title}</p>
              <p class="overview">{item.overview}</p>
            </div>
          </div>
        );
      }
    } else {
      for (let i = 0; i < blogItem.length / 3; i++) {
        let col = [];
        for (let j = 0; j < 3; j++) {
          let item = blogItem[index];
          col.push(
            <div class="col-4 .col-sm-8">
              <img
                src={item.img}
                class="img-responsive"
                width="350"
                height="234"
                alt="gambar artikel"
              ></img>
              <p class="type">{item.type}</p>
              <p class="title">{item.title}</p>
              <p class="overview">{item.overview}</p>
            </div>
          );
          index++;
        }
        if (i === Math.round(blogItem.length / 3) - 1) {
          row.push(
            <div class="row" style={{ paddingTop: 100, paddingBottom: 145 }}>
              {col}
            </div>
          );
        } else {
          row.push(
            <div class="row" style={{ paddingTop: 100 }}>
              {col}
            </div>
          );
        }
      }
    }
    return row;
  }

  return (
    <div>
    <MetaTags>
      <title>Blog | PT. Usaha Jaya Adi Perkasa</title>
      <meta
        name="description"
        content="Perusahaan Import dan Distributor di Bidang Industri Manufaktur"
      />
    </MetaTags>
      <Header currentPage="Blog" />
      <div className="cover">
        <h1 className="cover-title">Blog</h1>
      </div>

      <div class="container">
        <div className="row">
          <div class="col" style={{ paddingTop: 82 }}>
            {isMobile ? (
              <img
                src={blog1}
                class="img-responsive"
                width="250"
                alt="gambar artikel"
              />
            ) : (
              <img
                src={blog1}
                width="543"
                height="379"
                class="img-responsive"
                alt="gambar artikel"
              />
            )}
          </div>
          <div class="col" style={{ paddingTop: 82 }}>
            <p class="type-first">Industri</p>
            <p class="title-first">Keterangan Label Pada Produk Batu Gerinda</p>
            <p class="overview-first">
              Dalam dunia industri teknik untuk pemotongan dan penggerindaan itu
              harus menggunakan alat yang sering disebut abrasive wheel.
              Abrasive Wheel banyak digunakan di bengkel-bengkel pengerjaan
              logam.
            </p>
          </div>
        </div>
      </div>

      <div class="container">{printBlog()}</div>
      <Footer />
    </div>
  );
}

export default Blog;

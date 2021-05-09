import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Header from "./Header";
import Footer from "./Footer";
import "./../style/About.css";
import lusia from "./../img/photo/lusia.png";
import auw from "./../img/photo/auw.png";
import ike from "./../img/photo/ike.png";
import ida from "./../img/photo/ida.png";
import aditya from "./../img/photo//aditya.png";
import frans from "./../img/photo/frans.png";
import maulintang from "./../img/photo/maulintang.png";
import fitri from "./../img/photo/fitri.png";
import hayri from "./../img/photo/hayri.png";
import sriwijaya from "./../img/photo/sriwijaya.png";
import yohanes from "./../img/photo/yohanes.png";
import andika from "./../img/photo/andhika.png";
import kardi from "./../img/photo/kardi.png";
import daniella from "./../img/photo/daniella.png";
import andri from "./../img/photo/andri.png";
import karno from "./../img/photo/karno.png";
import urip from "./../img/photo/urip.png";
import fredy from "./../img/photo/fredy.png";
import dedik from "./../img/photo/dedik.png";
import nico from "./../img/photo/nico.png";
import suyadi from "./../img/photo/suyadi.png";
import suparian from "./../img/photo/suparian.png";
import imron from "./../img/photo/imron.png";
import edi from "./../img/photo/edi.png";
import buriman from "./../img/photo/buriman.png";
import hartono from "./../img/photo/hartono.png";
import michael from "./../img/photo/michael.png";
import ali from "./../img/photo/ali.png";
import santoso from "./../img/photo/santoso.png";
import ismuntoro from "./../img/photo/ismuntoro.png";

function About() {
  const classes = useStyles();
  const team = [
    {
      img: lusia,
      name: "Lusia Marganitha",
      position: "PIC Admin",
    },
    {
      img: auw,
      name: "Auw Ing Ing",
      position: "Admin",
    },
    {
      img: ike,
      name: "Ike Damayanti",
      position: "Admin",
    },
    {
      img: ida,
      name: "Ida Agus Rosalina",
      position: "Admin",
    },
    {
      img: aditya,
      name: "Aditya Mahardika",
      position: "PIC Management & Design",
    },
    {
      img: frans,
      name: "Frans Santoso",
      position: "Management",
    },
    {
      img: maulintang,
      name: "Maulintang Larassati",
      position: "Design",
    },
    {
      img: fitri,
      name: "Fitri Diah Wulandari",
      position: "Design",
    },
    {
      img: hayri,
      name: "Hayri Sutandar",
      position: "PIC Marketing",
    },
    {
      img: sriwijaya,
      name: "Sriwijaya",
      position: "Admin Sales",
    },
    {
      img: yohanes,
      name: "Yohanes Harianto",
      position: "Marketing",
    },
    {
      img: andika,
      name: "Andhika Pristyawan P.",
      position: "Marketing",
    },
    {
      img: kardi,
      name: "Kardi Priyanto Sutardji",
      position: "Marketing",
    },
    {
      img: daniella,
      name: "Daniella Sukma H.",
      position: "Marketing",
    },
    {
      img: andri,
      name: "Andri",
      position: "Marketing",
    },
    {
      img: karno,
      name: "Karno",
      position: "Marketing End User",
    },
    {
      img: urip,
      name: "Mochammad Urip S.",
      position: "Marketing End User",
    },
    {
      img: fredy,
      name: "Fredy",
      position: "Support",
    },
    {
      img: dedik,
      name: "Dedik Kurniawan",
      position: "Support",
    },
    {
      img: nico,
      name: "Nico Hermnsyah",
      position: "",
    },
    {
      img: suyadi,
      name: "Suyadi",
      position: "PIC Support",
    },
    {
      img: suparian,
      name: "PIC Warehouse",
      position: "",
    },
    {
      img: imron,
      name: "Muhammad Imron",
      position: "Warehouse",
    },
    {
      img: edi,
      name: "Edi Lesmana",
      position: "Warehouse",
    },
    {
      img: buriman,
      name: "Buriman",
      position: "Warehouse",
    },
    {
      img: hartono,
      name: "Hartono",
      position: "Warehouse",
    },
    {
      img: michael,
      name: "Michael",
      position: "Warehouse",
    },
    {
      img: ali,
      name: "Moh. Ali",
      position: "Driver",
    },
    {
      img: santoso,
      name: "Edi Santoso",
      position: "PIC Driver",
    },
    {
      img: ismuntoro,
      name: "Ismuntoro",
      position: "Driver",
    },
  ];

  const timeline = [
    {
      year: "1979",
      desc: "Tahun pertama Usaha Jaya mulai dibangun",
    },
    {
      year: "1989",
      desc: "Tahun dimana Usaha Jaya semakin membesarkan perusahaan",
    },
    {
      year: "2017",
      desc:
        "Tahun dimana Usaha Jaya merubah nama dari UD. Usaha Jaya menjadi PT.Usaha Jaya Adi Perkasa",
    },
  ];
  return (
    <div>
      <Header currentPage="Tentang Kami" />
      <div className="cover">
        <h1 className="cover-title">Tentang Kami</h1>
      </div>
      <p className="desc-first">
        Sebagai bagian dari Usaha Jaya Group{" "}
        <strong className="desc-bold">PT.Usaha Jaya Adiperkasa (PT.UJA)</strong>
        adalah salah satu perusahaan import dan distribusi yang berpengalaman,
        ahli dalam hal pengadaan alat, perangkat dan suku cadang untuk pabrik,
        konstruksi, Galangan kapal dan industri manufaktur. PT.UJA beroperasi
        dan memiliki jaringan yang tersebar di seluruh Indonesia, khususnya
        wilayah Indonesia Timur.
      </p>

      <div className="timeline">
        <h2 className="timeline-title">Telah melayani dan dipercaya selama</h2>
        <h2 className="timeline-year"> 40 tahun</h2>
        <Timeline align="alternate">
          {timeline.map((item) => (
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector className={classes.secondaryTail} />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography
                    variant="h6"
                    component="h1"
                    style={{
                      color: "#FFC639",
                      fontWeight: "bold",
                      fontSize: 48,
                    }}
                  >
                    {item.year}
                  </Typography>
                  <Typography style={{ fontSize: 20 }}>{item.desc}</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">{/* <RepeatIcon /> */}</TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Paper
                elevation={3}
                className={classes.paper}
                style={{ backgroundColor: "#383E5E" }}
              >
                <Typography
                  variant="h6"
                  component="h1"
                  style={{ color: "#FFDD88", fontSize: 48, fontWeight: "bold" }}
                >
                  2019
                </Typography>
                <Typography style={{ color: "#FFF", fontSize: 20 }}>
                  PT.Usaha Jaya Adi Perkasa akan terus berinovasi untuk
                  mengikuti digital era saat ini
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>

      <p className="desc">
        PT.UJA menyatukan aspirasi dan kebutuhan masyarakat Indonesia dengan
        memasok berbagai macam produk berkualitas dan mendistribusikannya secara
        luas di seluruh wilayah Indonesia serta tetap mengutamakan dalam hal
        memberikan pelayanan serta menjaga hubungan kerjasama yang baik di
        antara para rekan kerja, pelanggan & konsumen yang ada.
      </p>

      <p className="desc">
        Dengan adanya kualitas produk yang dapat diandalkan dan terjaga, PT.UJA
        berharap dapat terus membangun dan menjaga hubungan baik dengan para
        pemasok dari mancanegara, seperti Jepang, Jerman, Inggris, Tiongkok,
        Taiwan, Australia, Italia dan tidak menutup kemungkinan adanya pemasok
        dari negara-negara lain nantinya.
      </p>
      <center>
        <h2 style={{ marginTop: 75, marginBottom: 25 }}>
          Kami Siap Melayani Kebutuhan Bisnis Anda
        </h2>
        {team.map((item) => {
          return <Photo item={item} />;
        })}
      </center>
      <br/>
      <Footer />
    </div>
  );
}

const Photo = (props) => {
  return (
    <div className="photo">
      <img src={props.item.img} className="photo-img" alt="img" />
      <h6 className="photo-name">{props.item.name}</h6>
      <p className="photo-position">{props.item.position}</p>
    </div>
  );
};

export default About;

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
    // maxWidth: 360
  },
  secondaryTail: {
    backgroundColor: "#FFDD88",
  },
}));

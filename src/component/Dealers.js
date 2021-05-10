import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import call from "./../img/dealer/call.png";
import location from "./../img/dealer/location.png";
import direction from "./../img/dealer/direction.png";
import "./../style/Dealer.css";
import icBentang from "./../img/dealer/icBentang.png";
import icEmpatJaya from "./../img/dealer/icEmpatJaya.png";
import icJaya from "./../img/dealer/icJaya.png";
import icLajuJaya from "./../img/dealer/icLajuJaya.png";
import icMayar from "./../img/dealer/icMayar.png";
import icMitra from "./../img/dealer/icMitra.png";
import icNikimura from "./../img/dealer/icNikimura.png";
import icSurya from "./../img/dealer/icSurya.png";
import icTokoMulya from "./../img/dealer/icTokoMulia.png";
import icTools from "./../img/dealer/icTools.png";
import icTunasBaja from "./../img/dealer/icTunasBaja.png";
import icTunggal from "./../img/dealer/icTunggal.png";
import icYang from "./../img/dealer/icYang.png";
import icCipta from "./../img/dealer/icCipta.png";
import icGlobal from "./../img/dealer/icGlobal.png";
import icYunika from "./../img/dealer/icYunika.png";
import icAgung from "./../img/dealer/icAgung.png";
import icNaga from "./../img/dealer/icNaga.png";
import icSari from "./../img/dealer/icSari.png";
import icDinamika from "./../img/dealer/icDinamika.png";
import icCentralindo from "./../img/dealer/icCentralindo.png";
import icSumber from "./../img/dealer/icSumber.png";
import icRaya from "./../img/dealer/icRaya.png";

function Dealers() {
  const classes = useStyles();

  const Jatim = [
    {
      logo: icNikimura,
      name: "Nikimura",
      telp: "+62315328700",
      address:
        "Jl. Bubutan No.81, Bubutan, Kec. Bubutan, Kota SBY, Jawa Timur 60174",
      maps: "https://goo.gl/maps/g97nypoWpXNou9AH8",
    },
    {
      logo: icEmpatJaya,
      name: "CV.Empat Jaya",
      telp: "+62313521388",
      address:
        "Jl. Dupak No.152 A, Gundih, Kec. Bubutan, Kota SBY, Jawa Timur 60172",
      maps: "https://g.page/empat-jaya?share",
    },
    {
      logo: icBentang,
      name: "PT.Bentang Persada Internusa",
      telp: "+628113526178",
      address:
        "Jl. Margomulyo No.46, Greges, Asemrowo, Surabaya City, East Java 60183",
      maps: "https://g.page/wireropebentangpersada?share",
    },
    {
      logo: icLajuJaya,
      name: "CV.Laju Jaya Teknik",
      telp: "+62315036015",
      address:
        "Jl. Kapas Krampung No.198-A, Ploso, Kec. Tambaksari, Kota SBY, Jawa Timur 60133",
      maps: "https://goo.gl/maps/14N7SgekUcZWgEEv8",
    },
    {
      logo: icCipta,
      name: "CV. Cipta Sejahtera Teknik",
      telp: "-",
      address:
        "Jl. Raya Jemursari No.9, Jemur Wonosari, Kec. Wonocolo, Kota SBY, Jawa Timur 60237",
      maps: "https://goo.gl/maps/tB6Fe2ZhPbTTTFhx5",
    },
    {
      logo: icGlobal,
      name: "Global Spex Mandiri",
      telp: "+62315347113",
      address:
        "Jl. Kranggan No.102 - 6, Bubutan, Kec. Bubutan, Kota SBY, Jawa Timur 60251",
      maps: "https://goo.gl/maps/QCGY2R1aacBUt7wd6",
    },
    {
      logo: icYunika,
      name: "Yunika Tool Store",
      telp: "+62315353828",
      address:
        "Jl. Bubutan No.142, Alun-alun Contong, Kec. Bubutan, Kota SBY, Jawa Timur 60174",
      maps: "https://goo.gl/maps/ZhiR652DZJ1nccQp8",
    },
    {
      logo: icAgung,
      name: "PT. Agung Nagasaki Teknik",
      telp: "+62315350044",
      address:
        "Jl. Pengenal Blok No.1, Bubutan, Kec. Bubutan, Kota SBY, Jawa Timur 60174",
      maps: "https://goo.gl/maps/Tf2eTfN5vvmiJbda6",
    },
    {
      logo: icNaga,
      name: "Naga Tech",
      telp: "-",
      address:
        "Jl. Kalimati Wetan No.22, Nyamplungan, Kec. Pabean Cantian, Kota SBY, Jawa Timur 60162",
      maps: "https://goo.gl/maps/Ay1xhJ8Zq3Wg2o1j8",
    },
    {
      logo: icSari,
      name: "PT. Sari Pratama Tools",
      telp: "-",
      address:
        "Jl. Pengenal Blok No.1, Bubutan, Kec. Bubutan, Kota SBY, Jawa Timur 60174",
      maps: "https://goo.gl/maps/rb1oeitMV9sjed4D9",
    },
    {
      logo: icDinamika,
      name: "Dinamika",
      telp: "+62341327312",
      address:
        "Ruko Petra, Jl. Prof. Moch Yamin No.26, Sukoharjo, Kec. Klojen, Kota Malang, Jawa Timur 65118",
      maps: "https://goo.gl/maps/eeWmmAtxmzWKmecUA",
    },
    {
      logo: icCentralindo,
      name: "PT. Centralindo Abadi Teknik",
      telp: "+6282232718284",
      address:
        "Ngagel Jaya Selatan Ruko RMI Blok H 12, Baratajaya, Kec. Gubeng, Kota SBY, Jawa Timur 60284",
      maps: "https://goo.gl/maps/Vju1D7jao2yNxvJ16",
    },
    {
      logo: icSumber,
      name: "CV. Sumber Abadi",
      telp: "+62341327312",
      address:
        "Jalan raya, Ruko A-6, Dusun Larangan, Kec. Driyorejo, Kab. Gresik, Jawa Timur 61177",
      maps: "https://goo.gl/maps/ao71dPj3wS7drKAd7",
    },
  ];

  const Jateng = [
    {
      logo: icTunggal,
      name: "CV.Tunggal Pantes Sukses",
      telp: "+62271664997",
      address:
        "Jl. Suryopranoto No.14, Kepatihan Wetan, Kec. Jebres, Kota Surakarta, Jawa Tengah 57129",
      maps: "https://goo.gl/maps/ZGP5Z9saNdRpJfBz8",
    },
    {
      logo: icMayar,
      name: "CV.Manyar",
      telp: "+6281329869226",
      address:
        "Jl. Poncowinatan No.49, Gowongan, Kec. Jetis, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55233",
      maps: "https://goo.gl/maps/X6R4psocV6xDHpp88",
    },
  ];

  const Kalimantan = [
    {
      logo: icMitra,
      name: "Mitra Sedjati",
      telp: "-",
      address:
        "Jl. Pasar Baru, Kertak Baru Ilir, Kec. Banjarmasin Tengah, Banjarmasin, Kalimantan Selatan 70234",
      maps: "https://goo.gl/maps/jot1FEnQXWgBmS1H7",
    },
    {
      logo: icTools,
      name: "Toolsmart",
      telp: "+625416294516",
      address:
        "Jl. Untung Suropati No.38, Karang Asam Ulu, Kec. Sungai Kunjang, Samarinda, Kalimantan Timur 75243",
      maps: "https://goo.gl/maps/KpuK5uTY7ihEPeqh9",
    },
    {
      logo: icTokoMulya,
      name: "Toko Mulia",
      telp: "+62541741192",
      address:
        "Jl. Gajah Mada No.35, Ps. Pagi, Kec. Samarinda Kota, Kota Samarinda, Kalimantan Timur 75111",
      maps: "https://goo.gl/maps/7Kw86rVsSiP1XCJE6",
    },
    {
      logo: icRaya,
      name: "Toko Mulia Raya",
      telp: "+62541749225",
      address:
        "Jl. Gajah Mada No.5, Ps. Pagi, Kec. Samarinda Kota, Kota Samarinda, Kalimantan Timur 75111",
      maps: "https://goo.gl/maps/7Kw86rVsSiP1XCJE6",
    },
  ];

  const Sulawesi = [
    {
      logo: icSurya,
      name: "CV.Surya Kencana Teknik",
      telp: "+624113616551",
      address:
        "Jl. Dr. Wahidin Sudiro Husodo No.109, Ende, Kec. Wajo, Kota Makassar, Sulawesi Selatan 90156",
      maps: "https://goo.gl/maps/rWRsuoKx6EMvXA426",
    },
    {
      logo: icTunasBaja,
      name: "Tunas Baja",
      telp: "+624113623695",
      address:
        "Jl. Muna No.12, Melayu, Kec. Wajo, Kota Makassar, Sulawesi Selatan 90171",
      maps: "https://goo.gl/maps/1Qh94orthje3U9oN9",
    },
  ];
  const Bali = [
    {
      logo: icJaya,
      name: "PT.Jaya Pratama Groserindo",
      telp: "+623619073369",
      address:
        "Jl. Gatot Subroto Barat No.305D, Pemecutan Kaja, Kec. Denpasar Utara, Kota Denpasar, Bali 80111",
      maps: "https://goo.gl/maps/X371TfsJkArs5Nmr8",
    },
    {
      logo: icYang,
      name: "Yang Putra Teknik",
      telp: "+623618495363",
      address:
        "Jl. Mahendradatta Selatan No.99, Padangsambian, Kec. Denpasar Bar., Kota Denpasar, Bali 80119",
      maps: "https://goo.gl/maps/Xqek9immhP56qxsb9",
    },
  ];

  const toLocation = (maps) => {
    window.open(maps);
  };

  return (
    <div>
      <Header currentPage="Authorized Dealer" />
      <div className="cover">
        <h1 className="cover-title">Authorized Dealer</h1>
      </div>

      <div className={classes.root}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <p className="heading">Jawa Timur</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              {Jatim.map((data) => (
                <Grid item md={6} sm={6} xs={12}>
                  <Paper className={classes.paperItem}>
                    <img src={data.logo} alt="logo perusahaan" />
                    <p className="item-title"> {data.name}</p>
                    <div style={{ marginLeft: 60 }}>
                      <img src={call} alt="icon call" />
                      <p className="item-call">{data.telp}</p>
                    </div>

                    <div style={{ marginLeft: 60 }}>
                      <img src={location} alt="icon location" />
                      <div className="item-address">{data.address}</div>
                    </div>

                    <p
                      className="item-location"
                      onClick={() => toLocation(data.maps)}
                    >
                      Lihat Lokasi Dealer{" "}
                      <img src={direction} alt="icon direction" />
                    </p>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <p className="heading">Jawa Tengah</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container justify="center">
              {Jateng.map((data) => (
                <Grid item md={6} sm={6} xs={12}>
                  <Paper className={classes.paperItem}>
                    <img src={data.logo} alt="logo perusahaan" />
                    <p className="item-title"> {data.name}</p>
                    <div style={{ marginLeft: 60 }}>
                      <img src={call} alt="icon call" />
                      <p className="item-call">{data.telp}</p>
                    </div>

                    <div style={{ marginLeft: 60 }}>
                      <img src={location} alt="icon location" />
                      <div className="item-address">{data.address}</div>
                    </div>

                    <p
                      className="item-location"
                      onClick={() => toLocation(data.maps)}
                    >
                      Lihat Lokasi Dealer{" "}
                      <img src={direction} alt="icon direction" />
                    </p>
                  </Paper>{" "}
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <p className="heading">Kalimantan</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container justify="center">
              {Kalimantan.map((data) => (
                <Grid item md={6} sm={6} xs={12}>
                  <Paper className={classes.paperItem}>
                    <img src={data.logo} alt="logo perusahaan" />
                    <p className="item-title"> {data.name}</p>
                    <div style={{ marginLeft: 60 }}>
                      <img src={call} alt="icon call" />
                      <p className="item-call">{data.telp}</p>
                    </div>

                    <div style={{ marginLeft: 60 }}>
                      <img src={location} alt="icon location" />
                      <div className="item-address">{data.address}</div>
                    </div>

                    <p
                      className="item-location"
                      onClick={() => toLocation(data.maps)}
                    >
                      {" "}
                      Lihat Lokasi Dealer{" "}
                      <img src={direction} alt="icon direction" />
                    </p>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <p className="heading">Sulawesi</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container justify="center">
              {Sulawesi.map((data) => (
                <Grid item md={6} sm={6} xs={12}>
                  <Paper className={classes.paperItem}>
                    <img src={data.logo} alt="logo perusahaan" />
                    <p className="item-title"> {data.name}</p>
                    <div style={{ marginLeft: 60 }}>
                      <img src={call} alt="icon call" />
                      <p className="item-call">{data.telp}</p>
                    </div>

                    <div style={{ marginLeft: 60 }}>
                      <img src={location} alt="icon location" />
                      <div className="item-address">{data.address}</div>
                    </div>

                    <p
                      className="item-location"
                      onClick={() => toLocation(data.maps)}
                    >
                      {" "}
                      Lihat Lokasi Dealer{" "}
                      <img src={direction} alt="icon direction" />
                    </p>
                  </Paper>{" "}
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <p className="heading">Bali</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container justify="center">
              {Bali.map((data) => (
                <Grid item md={6} sm={6} xs={12}>
                  <Paper className={classes.paperItem}>
                    <img src={data.logo} alt="logo perusahaan" />
                    <p className="item-title"> {data.name}</p>
                    <div style={{ marginLeft: 60 }}>
                      <img src={call} alt="icon call" />
                      <p className="item-call">{data.telp}</p>
                    </div>

                    <div style={{ marginLeft: 60 }}>
                      <img src={location} alt="icon location" />
                      <div className="item-address">{data.address}</div>
                    </div>

                    <p
                      className="item-location"
                      onClick={() => toLocation(data.maps)}
                    >
                      {" "}
                      Lihat Lokasi Dealer{" "}
                      <img src={direction} alt="icon direction" />
                    </p>
                  </Paper>{" "}
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      </div>
      <Footer />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    color: "#22284C",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 45,
  },
  paperItem: {
    padding: 10,
    maxWidth: 608,
    marginBottom: 20,
  },
}));

export default Dealers;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./../style/Blog.css";
import constructionimg from "./../img/blog/Rectangle21743.png";
import img2 from "./../img/blog/Rectangle21744.png"
import img3 from "./../img/blog/Rectangle21745.png"
import img4 from "./../img/blog/Rectangle21746.png"
import img5 from "./../img/blog/Rectangle21747.png"
import img6 from "./../img/blog/Rectangle21748.png"
import img7 from "./../img/blog/Rectangle21749.png"
import img8 from "./../img/blog/Rectangle21750.png"
import img9 from "./../img/blog/Rectangle21751.png"
import img10 from "./../img/blog/Rectangle21752.png"
import { makeStyles } from "@material-ui/core";


function Blog() {
  
  const blogItem = [
    {
      index: 0,
      type: "Event",
      title : "Clean Washing Machine with Vinegar and Bicarbonate",
      overview: "Follow our tips to clean and get rid of the bad smell in your washing machine. Refresh your washing machine today with simple housewife tips.",
      img : img2
    },
    {
      index: 1,
      type:  "Life Hacks",
      title : "Wash carpets environmentally friendly in the snow",
      overview : "Clean carpets in snow - environmentally friendly and completely without chemicals. Getting rid of stains and thoroughly washing",
      img: img3
    },
    {
      index: 2,
      type: "Tips & Tricks",
      title : "Cleaning tips for Christmas",
      overview: "There are many musts during Christmas and there are plenty of things to do. We have put together a bunch of useful cleaning tips for you before the Christmas preparations. Here you get cleaning tips for oven, refrigerator and windows!",
      img: img4
    },
    {
      index: 3,
      type: "Life Hacks",
      title : "Descale the coffee maker with vinegar",
      overview: "Learn how to descale the coffee machine in the best way with the help of our tips. Give new life to your coffee machine and enjoy your coffee again. Read more here!",
      img : img5
    }, 
    {
      index: 4,
      type : "Work From Home",
      title : "Working from home?",
      overview: "Many of us are working from home right now and therefore we have developed some tips on how to get the best home office. Everything from the fact that it is important to move when you may not sit as well as in the office, to nice music to work to. Take a look at Fresca's best work from home tips below.",
      img : img6
    },
    {
      index: 5,
      type : "Tips & Tricks",
      title : "Clean up Christmas like a pro!",
      overview: "When do you clean up after Christmas? Some do it already on December 25, others on New Year's Day and some follow the tradition and wait until January 13",
      img : img7
    }, 
    {
      index: 6,
      type : "Testimoni",
      title : "Clean off limescale deposits with lemon",
      overview : "Skip detergent and clean environmentally friendly with lemon. This is how easy it is to clean your bathtub, sink, tiles and more from lime!",
      img : img8
    }, 
    {
      index: 7,
      type : "Testimoni",
      title : "Six questions with Jon",
      overview: "Outsourcing cleaning to Freska enables us to have more moments together with the family and more time to prepare something special for those occasions.",
      img : img9
    },
    {
      index: 8,
      type : "Testimoni",
      title : "Six questions with Canelia",
      overview: "It’s a wonderfull feeling to come back home from work and know that you don’t have to start cleaning. There’s a lot going on with the kids and having a cleaner means that I can fully focus on them.",
      img : img10
    }
  ];

  function printBlog(){
    let row = [];
    let index = 0;
    for(let i = 0; i<blogItem.length/3; i++){
      let col = [];
      for (let j = 0; j<3; j++){
        let item = blogItem[index]
        col.push(<div class="col-4" >
        <img src={item.img} width="350"></img>
        <p class="type" >{item.type}</p>
        <p class="title" >{item.title}</p>
        <p class="overview">{item.overview}</p>
      </div>);
      index++;
      }
      if(i==2){
        row.push( <div class="row" style={{paddingTop: 100, paddingBottom: 145}}>{col}</div>)  
      } else{
        row.push( <div class="row" style={{paddingTop: 100}}>{col}</div>)
      }
      
    }
    return row;
  }


  return( 
  <div>
    <Header currentPage="Blog"/>
    <div className="cover">
      <h1 className="cover-title">Blog</h1>
    </div>

    <div class="container">
      <div className="row">
        <div class="col" style={{ paddingTop: 82}}>
          <img src={constructionimg}></img>
        </div>
        <div class="col" style={{paddingTop: 82}}>
        <p class="type-first" >Layanan</p>
        <p class="title-first">Cheap cleaning and fixed price with Freska Flex</p>
        <p class="overview-first">Do you want to find the cheapest choice for cleaning help? Book Freska Flex! We offer cleaning at a reduced price for you who are flexible with cleaning day.</p>
        </div>
      </div>
    </div>

    <div class="container">
      {printBlog()}
    </div>
    <Footer/>
    </div>
  );
}

export default Blog;

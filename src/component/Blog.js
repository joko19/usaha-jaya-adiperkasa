import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./../style/Blog.css";

function Blog() {
  
  return( 
  <div>
    <Header currentPage="Blog"/>
    <div className="cover">
      <h1 className="cover-title">Blog</h1>
    </div>
    </div>
  );
}

export default Blog;

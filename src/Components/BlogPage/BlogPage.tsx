"use client";

import React from "react";
import Banner from "../AboutUs/Banner/Banner";
import BlogBanner from "./BlogBanner/BlogBanner";
import Blogs from "./Blogs/Blogs";
import JoinTeam from "./Blogs/JoinTeam";

const BlogPage = () => {
  return (
    <div className=''>
      <Banner
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
        title='PlutoHub Blog'
      />
      <BlogBanner />
      <Blogs />
      <JoinTeam/>
    </div>
  );
};

export default BlogPage;

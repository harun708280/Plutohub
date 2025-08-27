import Image from "next/image";
import React from "react";

const BlogBanner = () => {
  return (
    <section className='blog-banner'>
      <div className='container'>
        <div className='blog-banner__img'>
          <Image
            src='/images/blog-banner.png'
            alt='Blog Banner'
            width={1216}
            height={597}
          />
          <div className='blog-banner__content'>
            <span className='blog-banner__content--category'>Technology</span>
            <h1 className='blog-banner__content--title'>
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </h1>
            <div className='blog-banner__content--author'>
              <Image
                src='/images/author.png'
                width={36}
                height={36}
                alt='Author'
              />
              <span className='blog-banner__content--author-name'>
                John Doe
              </span>
              <span className='blog-banner__content--date'>
                August 25, 2023
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogBanner;

"use client";
import { CalendarDays, CircleCheckBig, MessageCircleMore } from "lucide-react";
import Image from "next/image";
import { Tab } from "react-bootstrap";
import Buttons from "../../Banner/Buttons";

const BlogContent = () => {
  return (
    <Tab.Content className="blogContent">
      <Tab.Pane eventKey="stock">
        <span className="blog-Category">Technology</span>
        <h2>
          The Impact of Technology on the Workplace: How Technology is Changing
        </h2>
        <div className="blog-author-meta">
          <div className="blog-author-meta-gap">
            <Image
              src="/images/author.png"
              width={36}
              height={36}
              alt="Author"
            />
            <span className="">Jason Francisco</span>
          </div>
          <span className="blog-author-meta-gap">
            <CalendarDays />
            August 25, 2023
          </span>
          <span className="blog-author-meta-gap">
            <MessageCircleMore />
            No Comments
          </span>
        </div>
        <div className="blog-explain">
          <Image
            src="/images/blogDetails-01.png"
            height={300}
            width={652}
            alt=""
            layout="responsive"
          />
          <p className="blog-explain-text-1">
            The stock market is a financial marketplace where trading of
            publicly-held stocks occurs. Stock markets allow stockbrokers,
            investors and traders to buy and sell stocks of publicly traded
            companies. It allows companies to go public and raise money as well.
            A share represents part ownership in an organization and individuals
            who possess these are called shareholders.
          </p>
          <p className="blog-explain-text-2">
            The stock market is a financial marketplace where trading of
            publicly-held stocks occurs. Stock markets allow stockbrokers,
            investors and traders to buy and sell stocks of publicly traded
            companies. It allows companies to go public and raise money as well.
            A share represents part ownership in an organization and individuals
            who possess these are called shareholders.
          </p>
        </div>
        <div className="app-design">
          <h6>Mobile App Design</h6>
          <p>
            We Create Unique Digital Experiences For Global Brands By
            Integrating AI, Innovative Design, And advanced Technology.
          </p>
          <ul>
            <li>
              <span className="blog-author-meta-gap">
                <CircleCheckBig />
              </span>
              Travel App
            </li>
            <li>
              <span className="blog-author-meta-gap">
                <CircleCheckBig />
              </span>
              Ecommerce App
            </li>
            <li>
              <span className="blog-author-meta-gap">
                <CircleCheckBig />
              </span>
              Medical App and more.
            </li>
          </ul>
          <div className="">
            <Buttons btnText="Get a Service" />
          </div>
        </div>
        <div className="blog-explain-2">
          <Image
            src="/images/blogDetails-02.png"
            height={300}
            width={652}
            alt=""
            layout="responsive"
          />
          <p>
            The stock market is a financial marketplace where trading of
            publicly-held stocks occurs. Stock markets allow stockbrokers,
            investors and traders to buy and sell stocks of publicly traded
            companies. It allows companies to go public and raise money as well.
          </p>
        </div>
        <hr />

        <div className="blog-comment-main">
          <div className="row gx-4 align-items-center">
            <div className="col-auto">
              <Image
                src="/images/blog-writer.png"
                height={150}
                width={150}
                alt=""
                layout="responsive"
              />
            </div>
            <div className="col comment-author-info">
              <span className="written-by">Written by</span>
              <h5>Shahinul Islam</h5>
              <p className="writer-post">Founder & CEO</p>
              <p className="mission-text">
                I'm on a mission to systemize creativity while embracing the
                journey of continuous learning. Passionate about everything
                design and creativity
              </p>
            </div>
          </div>

          <div className=" blog-comment">
            <h4 className="reply-title">Leave a Reply</h4>
            <form className="">
              <div className="">
                <label className="">
                  Full Name<span>*</span>
                </label>
                <input
                  type="text"
                  className=""
                  id="fullName"
                  placeholder="e.g. Adam Smith"
                />
              </div>
              <div className="">
                <label className="form-label">
                  Email Address<span>*</span>
                </label>
                <input
                  type="email"
                  className=""
                  id="emailAddress"
                  placeholder="you@example.com"
                />
              </div>
              <div className="">
                <label className="form-label">Write a comment</label>
                <textarea
                  className=""
                  id="comment"
                  placeholder="Tell us more about your thought"
                  rows={3}
                ></textarea>
              </div>

              <div className="d-flex justify-content-end submit-btn">
                <Buttons btnText="Submit your comment" />
              </div>
            </form>
          </div>
        </div>
      </Tab.Pane>

      <Tab.Pane eventKey="lowFid">
        <p>
          Low-fidelity prototyping is the process of creating simple sketches or
          wireframes to visualize ideas before building high-fidelity designs.
        </p>
      </Tab.Pane>

      <Tab.Pane eventKey="usage">
        <h2>Usage Of Low-Fidelity Prototyping</h2>
        <p>
          Teams use low-fidelity prototypes for brainstorming, quick feedback,
          and testing ideas without heavy investment of time and resources.
        </p>
      </Tab.Pane>

      <Tab.Pane eventKey="diff">
        <h2>Difference Between Low & High Fidelity Prototypes</h2>
        <p>
          Low-fidelity prototypes are quick and rough, while high-fidelity ones
          are closer to the final product in design, interaction, and visuals.
        </p>
      </Tab.Pane>

      <Tab.Pane eventKey="unique">
        <h2>We Create Unique</h2>
        <p>
          Our team ensures every design is unique, user-friendly, and tailored
          to meet client requirements while maintaining scalability.
        </p>
      </Tab.Pane>
    </Tab.Content>
  );
};

export default BlogContent;

"use client";
import { Tab } from "react-bootstrap";

const BlogContent = () => {
  return (
    <Tab.Content>
      <Tab.Pane eventKey="stock">
        <h2>The Stock Market</h2>
        <p>
          The stock market is a financial marketplace where trading of
          publicly-held stocks occurs. Stock markets allow stockbrokers,
          investors and traders to buy and sell stocks of publicly traded
          companies. It allows companies to go public and raise money as well.
        </p>
      </Tab.Pane>

      <Tab.Pane eventKey="lowFid">
        <h2>What Is Low-Fidelity Prototyping?</h2>
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

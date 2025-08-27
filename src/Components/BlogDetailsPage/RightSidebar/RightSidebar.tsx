"use client";

import Image from "next/image";
import Buttons from "../../Banner/Buttons";

const RightSidebar = () => {
  return (
    <>
      <div className="sidebar-main">
        <Image
          src="/images/blogDetails-sideBar.png"
          height={252}
          width={252}
          alt=""
          layout="responsive"
        />
        <h6>Are you interested in a quoted project?</h6>
        <p>
          Start with a UI/UX design and if we’re fit for your needs without any
          major commitment.
        </p>
        <div>
          <Buttons btnText="Get a Quote" />
        </div>
      </div>
      <div className="sidebar-main-tag">
        <h6>More Tags</h6>
        <div className="d-flex flex-wrap gap-2">
          <button className="tag technology">Technology</button>
          <button className="tag design">Design</button>
          <button className="tag ui-Design">Ui Design</button>
        </div>
      </div>
    </>
  );
};

export default RightSidebar;

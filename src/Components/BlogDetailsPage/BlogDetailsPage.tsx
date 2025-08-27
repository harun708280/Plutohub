"use client";

import { Tab } from "react-bootstrap";
import TableOfContents from "./TableOfContents/TableOfContents";
import BlogContent from "./BlogContent/BlogContent";
import RightSidebar from "./RightSidebar/RightSidebar";


interface BlogDetailsPageProps {
  params: {
    id: string;
  };
}

const BlogDetailsPage = ({ params }: BlogDetailsPageProps) => {
  return (
    <div className="container py-4 blog-details">
      <Tab.Container defaultActiveKey="stock">
        <div className="row">
          {/* Left Sidebar */}
          <div className="col-lg-3 mb-4">
            <TableOfContents />
          </div>

          {/* Middle Blog Content */}
          <div className="col-lg-6 mb-4">
            <BlogContent />
          </div>

          {/* Right Sidebar */}
          <div className="col-lg-3">
            <RightSidebar />
          </div>
        </div>
      </Tab.Container>
    </div>
  );
};

export default BlogDetailsPage;

"use client";
import React, { useState } from "react";

import Masonry from "react-masonry-css";
import Filter from "./Filter";
import Item from "./Item";

// Define the type for each item
type ItemType = {
  id: number;
  description: string;
  category: string;
  image: string;
};

const Blogs: React.FC = () => {
  // Sample data for items
  const items: ItemType[] = [
    {
      id: 1,

      description:
        "Learn the fundamentals of UX wireframing for apps and websites.",
      category: "Technology",
      image: "/images/blog-1.png",
    },
    {
      id: 2,

      description:
        "Explore the latest advancements in artificial intelligence and technology.",
      category: "Technology",
      image: "/images/blog-2.png",
    },
    {
      id: 3,

      description:
        "Understand how to create flexible and responsive web designs.",
      category: "Technology",
      image: "/images/blog-3.png",
    },
    {
      id: 4,

      description:
        "Step-by-step guide to building high-fidelity iOS prototypes.",
      category: "Technology",
      image: "/images/blog-4.png",
    },
    {
      id: 5,

      description: "Introduction to design tokens for scalable design systems.",
      category: "Technology",
      image: "/images/blog-5.png",
    },
    {
      id: 6,

      description: "Map out user journeys to enhance UX decision-making.",
      category: "Technology",
      image: "/images/blog-6.png",
    },
    {
      id: 7,

      description:
        "Learn how cloud services power modern technology solutions.",
      category: "Technology",
      image: "/images/blog-7.png",
    },
    {
      id: 8,

      description: "Best practices for creating high-converting landing pages.",
      category: "Technology",
      image: "/images/blog-8.png",
    },
    {
      id: 9,

      description:
        "Apply Material Design principles to build sleek Android apps.",
      category: "Technology",
      image: "/images/blog-9.png",
    },
  ];

  // Categories for the filter
  const categories: string[] = [
    "UX Design",
    "Technology",
    "Web Design ",
    "Mobile App Design",
    "Design System",
  ];

  // State to manage the filtered items
  const [filteredItems, setFilteredItems] = useState<ItemType[]>(items);

  // Handle category selection for filtering
  const handleSelectCategory = (category: string) => {
    if (category === "") {
      setFilteredItems(items);
    } else {
      const filtered = items.filter((item) => item.category === category);
      setFilteredItems(filtered);
    }
  };

  return (
    <div className="app  blog-main">
      <div className="container ">
        <Filter
          categories={categories}
          onSelectCategory={handleSelectCategory}
        />

       
        <div className="row justify-content-center">
          {filteredItems.length === 0 ? (
            <div className="no-data text-center py-5">
              <h3>No blogs found</h3>
            </div>
          ) : (
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 blog-card-main">
                  {filteredItems.map((item) => (
                    <div key={item.id} className="col">
                      <Item item={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

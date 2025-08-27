import React, { useEffect, useState } from "react";
import Image from "next/image";

interface ItemProps {
  item: {
    id: number;
    description: string;
    category: string;
    image: string;
  };
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${isVisible ? "appear" : ""}`}>
      <a href={`/blog/${item.id}`} className="blog-card-link">
        <div className="blog-card">
          <Image
            src={item.image}
            alt={item.description}
            height={309}
            width={400}
            layout="responsive"
          />
          <div className="blog-card-text">
            <span>{item.category}</span>
            <h3>{item.description}</h3>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Item;

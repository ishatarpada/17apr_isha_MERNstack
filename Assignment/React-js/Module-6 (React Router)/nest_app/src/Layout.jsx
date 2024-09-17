import React, { useState, useEffect } from 'react';
import Header from "./Component/Customer/Header"
import Slider from "./Component/Customer/Slider"
import Content from "./Component/Customer/Content"
import PopularProduct from './Component/Customer/PopularProduct';
import Banner from "./Component/Customer/Banner"
import Featured from "./Component/Customer/Featured"
import Footer from "./Component/Customer/Footer"

export default function Layout() {
  const imageUrls = [
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg",
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-2.svg",
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-3.svg",
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-4.svg",
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-5.svg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImage = index => {
      if (index < imageUrls.length) {
        const img = new Image();
        img.src = imageUrls[index];
        img.onload = () => {
          setTimeout(() => {
            setCurrentImageIndex(index + 1);
          }, 100); 
        };
      } else {
        // All images loaded
        setLoading(false);
      }
    };

    // Load first image immediately
    loadImage(currentImageIndex);

    return () => { }; // Cleanup function is empty since we're not using setInterval anymore
  }, [currentImageIndex]);

  return (
    <div className="">
      {loading ? (
        <div className="flex justify-center items-center h-screen w-screen">
          <img
            src={imageUrls[currentImageIndex]}
            alt={`Loading image ${currentImageIndex + 1}`}
          />
        </div>
      ) : (
        <>
          <Header />
          <Slider />
          <Content />
          <PopularProduct />
          <Featured />
          <Banner />
          <Footer />
        </>
      )}
    </div>
  );
}

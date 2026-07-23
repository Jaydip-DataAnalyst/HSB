import React from "react";
import Slider from "react-slick";
import { banners } from "../../utils/constants";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
  const settings = {
    centerMode: true,
    centerPadding: "180px",
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 700,
    arrows: true,
    dots: true,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          centerPadding: "120px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="w-full bg-white py-6">
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div key={index} className="px-2">
              <img
                src={banner}
                alt={`banner-${index}`}
                className="w-full h-[300px] rounded-xl object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BannerSlider;
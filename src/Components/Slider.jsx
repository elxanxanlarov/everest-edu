import React from "react";
import Slider from "react-slick";

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
     <Slider {...settings}>
              <div className="item">
                <img src="../../../src/assets/image/about-img.jpg" alt="" />
              </div>
              <div className="item">
                <img src="../../../src/assets/image/logo.png" alt="" />
              </div>
              <div className="item">
                <img src="../../../src/assets/image/about-img.jpg" alt="" />
              </div>
              <div className="item">
                <img src="../../../src/assets/image/logo.png" alt="" />
              </div>
              <div className="item">
                <img src="../../../src/assets/image/about-img.jpg" alt="" />
              </div>
              <div className="item">
                <img src="../../../src/assets/image/logo.png" alt="" />
              </div>
            </Slider>
    </div>
  );
}

export default Responsive;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"; // For arrow icons
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// Custom Left Arrow
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute text-gray-300  text-4xl top-[33%] z-30 w-8 h-20   hidden xl:block "
    >
      <IoMdArrowDropleft />
    </button>
  );
}

// Custom Right Arrow
function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute text-gray-300  text-4xl top-[33%] right-0  z-30 w-8 h-20  hidden xl:block"
    >
      <IoMdArrowDropright />
    </button>
  );
}

function Slider1() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Autoplay enabled
    autoplaySpeed: 5000, // Autoplay speed set to 3 seconds (3000 ms)
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom previous arrow
  };

  return (
    <div className="border ">
      <Slider {...settings}>
        <div>
          <img
            src="https://crazzyhub.s3.amazonaws.com/media/slider/WhatsApp_Image_2023-09-24_at_3.26.59_PM.jpeg"
            alt=""
            srcset=""
          />
        </div>
        <div>
          <img
            src="		https://crazzyhub.s3.amazonaws.com/media/slider/90_Mins..png"
            alt=""
            srcset=""
          />
        </div>
        <div>
          <img
            src="https://crazzyhub.s3.amazonaws.com/media/slider/phonepe_a3Q14Pt.png"
            alt=""
            srcset=""
          />
        </div>
        <div>
          <img
            src="	https://crazzyhub.s3.amazonaws.com/media/slider/WhatsApp_Image_2023-09-24_at_3.27.03_PM.jpeg"
            alt=""
            srcset=""
          />
        </div>
        <div>
          <img
            src="	https://crazzyhub.s3.amazonaws.com/media/slider/SM_Watch_BG_Change.png"
            alt=""
            srcset=""
          />
        </div>
        <div>
          <img
            src="	https://crazzyhub.s3.amazonaws.com/media/slider/WhatsApp_Image_2023-09-24_at_3.27.03_PM.jpeg"
            alt=""
            srcset=""
          />
        </div>
        <div>
          <img
            src="		https://crazzyhub.s3.amazonaws.com/media/slider/IP-15.png"
            alt=""
            srcset=""
          />
        </div>
      </Slider>
      
    </div>
  );
}

export default Slider1;
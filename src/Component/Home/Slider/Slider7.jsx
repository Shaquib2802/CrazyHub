import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"; // For arrow icons
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Slider7() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Autoplay enabled
    autoplaySpeed: 5000, // Autoplay speed set to 3 seconds (3000 ms)
    // Custom previous arrow
  };

  return (
    <div className="border border-gray-500">
      <Slider {...settings}>
        <div>
          <img
            src="	https://crazzyhub.s3.amazonaws.com/media/banner/powerbank_with_brand.jpg"
            alt=""
            srcset=""
          />
        </div>
        <div>
          <img
            src="	https://crazzyhub.s3.amazonaws.com/media/banner/for-app-7live.png"
            alt=""
            srcset=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default Slider7;
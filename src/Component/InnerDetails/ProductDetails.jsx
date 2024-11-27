import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Slider from "@mui/material/Slider";
import { blue, orange } from "@mui/material/colors";
import Header from "../Header1/Header";
import Bottom1 from "../Bottom/Bottom1";
import { MdFilter, MdOutlineSort } from "react-icons/md";
import { FaFilter } from "react-icons/fa";

function valuetext(value) {
  return `${value}°C`;
}

const ProductDetails = () => {
  const [value, setValue] = React.useState([20, 37]);
  const [value1, setValue1] = React.useState(5);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="w-[100%] ">
      <Header />
      <div className="flex gap-5 m-4">
        <div className="w-[15%] h-fit pb-5 shadow-xl border hidden lg:block ">
          <div className="flex  justify-between mx-1 mt-2">
            <div className="font-semibold text-xl">Filters</div>
            <div className="text-sm text-orange-500 mt-1">CLEAR</div>
          </div>
          <div className="border m-1 p-1  bg-gray-100 rounded-sm text-base mt-3 font-semibold">
            PRICE
          </div>
            <div className="m-3">
              {" "}
              <Box sx={{ width:"100%" }}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  sx={{
                    color: "red",
                    "& .MuiSlider-thumb": {
                      backgroundColor: "#bf4128",
                  },
                  "& .MuiSlider-rail": {
                    backgroundColor: "#bf4128",
                  },
                }}
              />
            </Box>
          </div>
          <div className="border m-1 p-1  bg-gray-100 rounded-sm text-base mt-4 font-semibold">
            BRAND
          </div>
          <div className="ml-5 space-y-3">
            <div className="mt-4">Xiaomi</div>
            <div>Samsung</div>
            <div>Oppo</div>
            <div>Vivo</div>
            <div>OnePlus</div>
            <div>Redmi</div>
            <div>Apple</div>
            <div>Huawai</div>
            <div>Micromax</div>
            <div>Xiaomi</div>
            <div>Huawai</div>
            <div>Micromax</div>
            <div>Xiaomi</div>
            <div>Nokia</div>
            <div>Fire-Bolt</div>
            <div>Itel</div>
            <div>Dell</div>
            <div>Nothing</div>
            <div>Mi</div>
            <div>Lenovo</div>
          </div>
          <div className=" flex justify-center mt-4">
            <KeyboardArrowDownIcon className=" !text-4xl text-orange-600" />
          </div>
          <div className="border m-1 p-1  bg-gray-100 rounded-sm text-base mt-4 font-semibold">
            Categories
          </div>
          <div className="ml-5 space-y-3">
            <div className="mt-4">Mobiles & Tablet</div>
            <div>TV's & Electronics</div>
            <div>Laptop & Accessories</div>
            <div>Computer & Pheripheral</div>
            <div>Smart Technology</div>
            <div>Mobile Accessories</div>
          </div>
          <div className="border m-1 p-1  bg-gray-100 rounded-sm text-base mt-4 font-semibold">
            RATING
          </div>
          <div className="mt-4 ml-2">
            {" "}
            <Box sx={{ "& > legend": { mt: 2 } }}>
              <Rating
                name="simple-controlled"
                value={value1}
                onChange={(event, newValue) => {
                  setValue1(newValue);
                }}
              />
            </Box>
          </div>
        </div>

        <div className="w-[100%]  xl:w-[100%] ">
          <div className="justify-between  mb-3 hidden lg:flex">
            <div className="text-xl font-semibold">MOBILES & TABLET</div>
            <div className="flex gap-x-2 ">
              <div className="border border-rose-400 text-xs font-medium w-24 text-center pt-1.5 text-red-400">
                Most Popular
              </div>
              <div className="border border-rose-400 text-xs font-medium w-24 text-center pt-1.5 text-red-400">
                Top Review
              </div>
              <div className="border border-rose-400 text-xs font-medium w-24 text-center pt-1.5 text-red-400">
                Newest First
              </div>
            </div>
          </div>
          <div className="w-[100%] grid grid-cols-2 relative lg:hidden h-10 -mt-4 ">
            <div className="text-center border text-rose-500  flex justify-center  gap-x-7 md:gap-x-0  ">
              <div>
                <MdOutlineSort className="absolute left-[19%] text-xl text-rose-500 mt-2.5 " />
              </div>
              <div className="mt-2">SORT</div>
            </div>
            <div className="text-center border text-rose-500  flex justify-center  gap-x-5 md:gap-x-0  ">
              <div>
                <FaFilter className="absolute right-[29%]  text-xl text-rose-500 mt-2.5" />
              </div>
              <div className="mt-2">FILTERS</div>
            </div>
           
          </div>
          <div className="grid lg:gap-4  grid-cols-2 lg:grid-cols-5  w-[100%]">
            <div className=" relative border border-gray-3 rounded-md  bg-white">
              <div>
                <img
                  className="h-40 w-32 mx-auto mt-4"
                  src="https://crazzyhub.s3.amazonaws.com/media/product_variant/VIVO_V23_PRO_5G_-_SUNSHINE_GOLD.jpg"
                />
              </div>
              <div className="absolute !top-2 !right-2 ">
                <FavoriteBorderIcon />
              </div>
              <div className="text-sm font-semibold mt-2 ml-2">
                Vivo V23 Pro 5G (Sunshine Gold, 128 GB) (8 GB RAM)
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-green-500">
                In-Stock
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-black">
                {" "}
                ₹38,890
              </div>
              <div className="flex gap-x-4 mb-2 ">
                <div className="text-xs line-through text-gray-500 font-semibold ml-2 mt-1">
                  ₹12000
                </div>
                <div className="border text-xs font-bold bg-green-500 rounded-md mt-1 w-14 text-center text-white">
                  15% off
                </div>
              </div>
            </div>
            <div className=" relative border border-gray-3 rounded-md  bg-white">
              <div>
                <img
                  className="h-40 w-44 mx-auto mt-4"
                  src="https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_46_2GUElU1.jpg"
                />
              </div>
              <div className="absolute !top-2 !right-2 ">
                <FavoriteBorderIcon />
              </div>
              <div className="text-sm font-semibold mt-2 ml-2">
                Vivo T1 5G (Starlight Black, 128 GB) (4 GB RAM)
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-green-500">
                In-Stock
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-black">
                {" "}
                ₹38,890
              </div>
              <div className="flex gap-x-4 mb-2 ">
                <div className="text-xs line-through text-gray-500 font-semibold ml-2 mt-1">
                  ₹12000
                </div>
                <div className="border text-xs font-bold bg-green-500 rounded-md mt-1 w-14 text-center text-white">
                  15% off
                </div>
              </div>
            </div>
            <div className=" relative border border-gray-3 rounded-md  bg-white">
              <div>
                <img
                  className="h-40 w-40 mx-auto mt-4"
                  src="https://crazzyhub.s3.amazonaws.com/media/product_variant/Crazzyhub_images_1_c1APxjy.jpg"
                />
              </div>
              <div className="absolute !top-2 !right-2 ">
                <FavoriteBorderIcon />
              </div>
              <div className="text-sm font-semibold mt-2 ml-2">
                vivo V23 Pro 5G (Rainbow, 128 GB) (8 GB RAM)
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-green-500">
                In-Stock
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-black">
                {" "}
                ₹38,890
              </div>
              <div className="flex gap-x-4 mb-2 ">
                <div className="text-xs line-through text-gray-500 font-semibold ml-2 mt-1">
                  ₹12000
                </div>
                <div className="border text-xs font-bold bg-green-500 rounded-md mt-1 w-14 text-center text-white">
                  15% off
                </div>
              </div>
            </div>
            <div className=" relative border border-gray-3 rounded-md  bg-white">
              <div>
                <img
                  className="h-40 w-40 mx-auto mt-4"
                  src="https://crazzyhub.s3.amazonaws.com/media/product_variant/Vivo-t1-pro-5g-turbo-cyan-128gb-8gb-ram-Front-Back-View_JN7AAED.webp"
                />
              </div>
              <div className="absolute !top-2 !right-2 ">
                <FavoriteBorderIcon />
              </div>
              <div className="text-sm font-semibold mt-2 ml-2">
                vivo V23 Pro 5G (Sunshine Gold, 128 GB) (8 GB RAM)
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-green-500">
                In-Stock
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-black">
                {" "}
                ₹38,890
              </div>
              <div className="flex gap-x-4 mb-2 ">
                <div className="text-xs line-through text-gray-500 font-semibold ml-2 mt-1">
                  ₹12000
                </div>
                <div className="border text-xs font-bold bg-green-500 rounded-md mt-1 w-14 text-center text-white">
                  15% off
                </div>
              </div>
            </div>
            <div className=" relative border border-gray-3 rounded-md  bg-white">
              <div>
                <img
                  className="h-40 w-40 mx-auto mt-4"
                  src="https://crazzyhub.s3.amazonaws.com/media/product_variant/Vivo-t1-pro-5g-turbo-black-128gb-8gb-ram-Front-Back-View_XQt5E1p.webp"
                />
              </div>
              <div className="absolute !top-2 !right-2 ">
                <FavoriteBorderIcon />
              </div>
              <div className="text-sm font-semibold mt-2 ml-2">
                vivo V23 Pro 5G (Sunshine Gold, 128 GB) (8 GB RAM)
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-green-500">
                In-Stock
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-black">
                {" "}
                ₹38,890
              </div>
              <div className="flex gap-x-4 mb-2 ">
                <div className="text-xs line-through text-gray-500 font-semibold ml-2 mt-1">
                  ₹12000
                </div>
                <div className="border text-xs font-bold bg-green-500 rounded-md mt-1 w-14 text-center text-white">
                  15% off
                </div>
              </div>
            </div>
            <div className=" relative border border-gray-3 rounded-md  bg-white">
              <div>
                <img
                  className="h-40 w-40 mx-auto mt-4"
                  src="https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_33_m2L399z.jpg"
                />
              </div>
              <div className="absolute !top-2 !right-2 ">
                <FavoriteBorderIcon />
              </div>
              <div className="text-sm font-semibold mt-2 ml-2">
                vivo V23 Pro 5G (Sunshine Gold, 128 GB) (8 GB RAM)
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-green-500">
                In-Stock
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-black">
                {" "}
                ₹38,890
              </div>
              <div className="flex gap-x-4 mb-2 ">
                <div className="text-xs line-through text-gray-500 font-semibold ml-2 mt-1">
                  ₹12000
                </div>
                <div className="border text-xs font-bold bg-green-500 rounded-md mt-1 w-14 text-center text-white">
                  15% off
                </div>
              </div>
            </div>
            <div className=" relative border border-gray-3 rounded-md  bg-white">
              <div>
                <img
                  className="h-40 w-40 mx-auto mt-4"
                  src="https://crazzyhub.s3.amazonaws.com/media/product_variant/Crazzyhub_images_41.jpg"
                />
              </div>
              <div className="absolute !top-2 !right-2 ">
                <FavoriteBorderIcon />
              </div>
              <div className="text-sm font-semibold mt-2 ml-2">
                vivo V23 Pro 5G (Sunshine Gold, 128 GB) (8 GB RAM)
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-green-500">
                In-Stock
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-black">
                {" "}
                ₹38,890
              </div>
              <div className="flex gap-x-4 mb-2 ">
                <div className="text-xs line-through text-gray-500 font-semibold ml-2 mt-1">
                  ₹12000
                </div>
                <div className="border text-xs font-bold bg-green-500 rounded-md mt-1 w-14 text-center text-white">
                  15% off
                </div>
              </div>
            </div>
            <div className=" relative border border-gray-3 rounded-md  bg-white">
              <div>
                <img
                  className="h-40 w-40 mx-auto mt-4"
                  src="https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_54_DSRVtO0_40kOhJL.jpg"
                />
              </div>
              <div className="absolute !top-2 !right-2 ">
                <FavoriteBorderIcon />
              </div>
              <div className="text-sm font-semibold mt-2 ml-2">
                vivo V23 Pro 5G (Sunshine Gold, 128 GB) (8 GB RAM)
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-green-500">
                In-Stock
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-black">
                {" "}
                ₹38,890
              </div>
              <div className="flex gap-x-4 mb-2 ">
                <div className="text-xs line-through text-gray-500 font-semibold ml-2 mt-1">
                  ₹12000
                </div>
                <div className="border text-xs font-bold bg-green-500 rounded-md mt-1 w-14 text-center text-white">
                  15% off
                </div>
              </div>
            </div>
            <div className=" relative border border-gray-3 rounded-md  bg-white">
              <div>
                <img
                  className="h-40 w-40 mx-auto mt-4"
                  src="https://crazzyhub.s3.amazonaws.com/media/product_variant/Vivo_Y100_qWwbZsi.jpg"
                />
              </div>
              <div className="absolute !top-2 !right-2 ">
                <FavoriteBorderIcon />
              </div>
              <div className="text-sm font-semibold mt-2 ml-2">
                vivo V23 Pro 5G (Sunshine Gold, 128 GB) (8 GB RAM)
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-green-500">
                In-Stock
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-black">
                {" "}
                ₹38,890
              </div>
              <div className="flex gap-x-4 mb-2 ">
                <div className="text-xs line-through text-gray-500 font-semibold ml-2 mt-1">
                  ₹12000
                </div>
                <div className="border text-xs font-bold bg-green-500 rounded-sm mt-1 w-14 text-center text-white">
                  15% off
                </div>
              </div>
            </div>
            <div className=" relative border border-gray-3 rounded-md  bg-white">
              <div>
                <img
                  className="h-40 w-40 mx-auto mt-4"
                  src="https://crazzyhub.s3.amazonaws.com/media/product_variant/Vivo-Y100-Mobile-Phone.jpg"
                />
              </div>
              <div className="absolute !top-2 !right-2 ">
                <FavoriteBorderIcon />
              </div>
              <div className="text-sm font-semibold mt-2 ml-2">
                vivo V23 Pro 5G (Sunshine Gold, 128 GB) (8 GB RAM)
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-green-500">
                In-Stock
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-black">
                {" "}
                ₹38,890
              </div>
              <div className="flex gap-x-4 mb-2 ">
                <div className="text-xs line-through text-gray-500 font-semibold ml-2 mt-1">
                  ₹12000
                </div>
                <div className="border text-xs font-bold bg-green-500 rounded-sm mt-1 w-14 text-center text-white">
                  15% off
                </div>
              </div>
            </div>
            <div className=" relative border border-gray-3 rounded-md  bg-white">
              <div>
                <img
                  className="h-40 w-40 mx-auto mt-4"
                  src="https://crazzyhub.s3.amazonaws.com/media/product_variant/samsung-galaxy-a14-5g-dark-red-4gb-128gb-front-back-view-min_3ocw0SE.webp"
                />
              </div>
              <div className="absolute !top-2 !right-2 ">
                <FavoriteBorderIcon />
              </div>
              <div className="text-sm font-semibold mt-2 ml-2">
                vivo V23 Pro 5G (Sunshine Gold, 128 GB) (8 GB RAM)
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-green-500">
                In-Stock
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-black">
                {" "}
                ₹38,890
              </div>
              <div className="flex gap-x-4 mb-2 ">
                <div className="text-xs line-through text-gray-500 font-semibold ml-2 mt-1">
                  ₹12000
                </div>
                <div className="border text-xs font-bold bg-green-500 rounded-sm mt-1 w-14 text-center text-white">
                  15% off
                </div>
              </div>
            </div>
            <div className=" relative border border-gray-3 rounded-md  bg-white">
              <div>
                <img
                  className="h-40 w-40 mx-auto mt-4"
                  src="https://crazzyhub.s3.amazonaws.com/media/product_variant/Samsung-Galaxy-A14-5G-Light-Green-4GB-128GB-front-back-view-min_XwUIITG.webp"
                />
              </div>
              <div className="absolute !top-2 !right-2 ">
                <FavoriteBorderIcon />
              </div>
              <div className="text-sm font-semibold mt-2 ml-2">
                vivo V23 Pro 5G (Sunshine Gold, 128 GB) (8 GB RAM)
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-green-500">
                In-Stock
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-black">
                {" "}
                ₹38,890
              </div>
              <div className="flex gap-x-4 mb-2 ">
                <div className="text-xs line-through text-gray-500 font-semibold ml-2 mt-1">
                  ₹12000
                </div>
                <div className="border text-xs font-bold bg-green-500 rounded-sm mt-1 w-14 text-center text-white">
                  15% off
                </div>
              </div>
            </div>
            <div className=" relative border border-gray-3 rounded-md  bg-white">
              <div>
                <img
                  className="h-40 w-40 mx-auto mt-4"
                  src="https://crazzyhub.s3.amazonaws.com/media/product_variant/Vivo-Y100-Mobile-Phone-GOLD.jpg"
                />
              </div>
              <div className="absolute !top-2 !right-2 ">
                <FavoriteBorderIcon />
              </div>
              <div className="text-sm font-semibold mt-2 ml-2">
                vivo V23 Pro 5G (Sunshine Gold, 128 GB) (8 GB RAM)
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-green-500">
                In-Stock
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-black">
                {" "}
                ₹38,890
              </div>
              <div className="flex gap-x-4 mb-2 ">
                <div className="text-xs line-through text-gray-500 font-semibold ml-2 mt-1">
                  ₹12000
                </div>
                <div className="border text-xs font-bold bg-green-500 rounded-sm mt-1 w-14 text-center text-white">
                  15% off
                </div>
              </div>
            </div>
            <div className=" relative border border-gray-3 rounded-md  bg-white">
              <div>
                <img
                  className="h-40 w-40 mx-auto mt-4"
                  src="https://crazzyhub.s3.amazonaws.com/media/product_variant/Samsung-Galaxy-A14-5G-Light-Green-4GB-128GB-front-back-view-min_XwUIITG.webp"
                />
              </div>
              <div className="absolute !top-2 !right-2 ">
                <FavoriteBorderIcon />
              </div>
              <div className="text-sm font-semibold mt-2 ml-2">
                vivo V23 Pro 5G (Sunshine Gold, 128 GB) (8 GB RAM)
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-green-500">
                In-Stock
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-black">
                {" "}
                ₹38,890
              </div>
              <div className="flex gap-x-4 mb-2 ">
                <div className="text-xs line-through text-gray-500 font-semibold ml-2 mt-1">
                  ₹12000
                </div>
                <div className="border text-xs font-bold bg-green-500 rounded-sm mt-1 w-14 text-center text-white">
                  15% off
                </div>
              </div>
            </div>
            <div className=" relative border border-gray-3 rounded-md  bg-white">
              <div>
                <img
                  className="h-40 w-40 mx-auto mt-4"
                  src="https://crazzyhub.s3.amazonaws.com/media/product_variant/samsung-galaxy-a14-5g-black-128gb-4gb-ram-front-back-view-min_2sGxNYC.webp"
                />
              </div>
              <div className="absolute !top-2 !right-2 ">
                <FavoriteBorderIcon />
              </div>
              <div className="text-sm font-semibold mt-2 ml-2">
                vivo V23 Pro 5G (Sunshine Gold, 128 GB) (8 GB RAM)
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-green-500">
                In-Stock
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-black">
                {" "}
                ₹38,890
              </div>
              <div className="flex gap-x-4 mb-2 ">
                <div className="text-xs line-through text-gray-500 font-semibold ml-2 mt-1">
                  ₹12000
                </div>
                <div className="border text-xs font-bold bg-green-500 rounded-sm mt-1 w-14 text-center text-white">
                  15% off
                </div>
              </div>
            </div>
            <div className=" relative border border-gray-3 rounded-md  bg-white">
              <div>
                <img
                  className="h-40 w-40 mx-auto mt-4"
                  src="https://crazzyhub.s3.amazonaws.com/media/product_variant/samsung-galaxy-a23-5g-silver-6gb-128gb-front-and-back-view_8e67Y1T.webp"
                />
              </div>
              <div className="absolute !top-2 !right-2 ">
                <FavoriteBorderIcon />
              </div>
              <div className="text-sm font-semibold mt-2 ml-2">
                vivo V23 Pro 5G (Sunshine Gold, 128 GB) (8 GB RAM)
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-green-500">
                In-Stock
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-black">
                {" "}
                ₹38,890
              </div>
              <div className="flex gap-x-4 mb-2 ">
                <div className="text-xs line-through text-gray-500 font-semibold ml-2 mt-1">
                  ₹12000
                </div>
                <div className="border text-xs font-bold bg-green-500 rounded-sm mt-1 w-14 text-center text-white">
                  15% off
                </div>
              </div>
            </div>
            <div className=" relative border border-gray-3 rounded-md  bg-white">
              <div>
                <img
                  className="h-40 w-40 mx-auto mt-4"
                  src="https://crazzyhub.s3.amazonaws.com/media/product_variant/samsung-galaxy-a23-5g-orange-128gb-6gb-ram-Front-Back_wDKlXji.webp"
                />
              </div>
              <div className="absolute !top-2 !right-2 ">
                <FavoriteBorderIcon />
              </div>
              <div className="text-sm font-semibold mt-2 ml-2">
                vivo V23 Pro 5G (Sunshine Gold, 128 GB) (8 GB RAM)
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-green-500">
                In-Stock
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-black">
                {" "}
                ₹38,890
              </div>
              <div className="flex gap-x-4 mb-2 ">
                <div className="text-xs line-through text-gray-500 font-semibold ml-2 mt-1">
                  ₹12000
                </div>
                <div className="border text-xs font-bold bg-green-500 rounded-sm mt-1 w-14 text-center text-white">
                  15% off
                </div>
              </div>
            </div>
            <div className=" relative border border-gray-3 rounded-md  bg-white">
              <div>
                <img
                  className="h-40 w-40 mx-auto mt-4"
                  src="https://crazzyhub.s3.amazonaws.com/media/product_variant/Apple-MLPH3HN-A-SmartPhones-PINK.jpg"
                />
              </div>
              <div className="absolute !top-2 !right-2 ">
                <FavoriteBorderIcon />
              </div>
              <div className="text-sm font-semibold mt-2 ml-2">
                vivo V23 Pro 5G (Sunshine Gold, 128 GB) (8 GB RAM)
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-green-500">
                In-Stock
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-black">
                {" "}
                ₹38,890
              </div>
              <div className="flex gap-x-4 mb-2 ">
                <div className="text-xs line-through text-gray-500 font-semibold ml-2 mt-1">
                  ₹12000
                </div>
                <div className="border text-xs font-bold bg-green-500 rounded-sm mt-1 w-14 text-center text-white">
                  15% off
                </div>
              </div>
            </div>
            <div className=" relative border border-gray-3 rounded-md  bg-white">
              <div>
                <img
                  className="h-40 w-40 mx-auto mt-4"
                  src="https://crazzyhub.s3.amazonaws.com/media/product_variant/Apple-iphone-14-512gb-purple-Front-Back-View.webp"
                />
              </div>
              <div className="absolute !top-2 !right-2 ">
                <FavoriteBorderIcon />
              </div>
              <div className="text-sm font-semibold mt-2 ml-2">
                vivo V23 Pro 5G (Sunshine Gold, 128 GB) (8 GB RAM)
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-green-500">
                In-Stock
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-black">
                {" "}
                ₹38,890
              </div>
              <div className="flex gap-x-4 mb-2 ">
                <div className="text-xs line-through text-gray-500 font-semibold ml-2 mt-1">
                  ₹12000
                </div>
                <div className="border text-xs font-bold bg-green-500 rounded-sm mt-1 w-14 text-center text-white">
                  15% off
                </div>
              </div>
            </div>
            <div className=" relative border border-gray-3 rounded-md  bg-white">
              <div>
                <img
                  className="h-40 w-40 mx-auto mt-4"
                  src="https://crazzyhub.s3.amazonaws.com/media/product_variant/Vivo-Y100-Mobile-Phone.jpg"
                />
              </div>
              <div className="absolute !top-2 !right-2 ">
                <FavoriteBorderIcon />
              </div>
              <div className="text-sm font-semibold mt-2 ml-2">
                vivo V23 Pro 5G (Sunshine Gold, 128 GB) (8 GB RAM)
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-green-500">
                In-Stock
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-black">
                {" "}
                ₹38,890
              </div>
              <div className="flex gap-x-4 mb-2 ">
                <div className="text-xs line-through text-gray-500 font-semibold ml-2 mt-1">
                  ₹12000
                </div>
                <div className="border text-xs font-bold bg-green-500 rounded-sm mt-1 w-14 text-center text-white">
                  15% off
                </div>
              </div>
            </div>
            <div className=" relative border border-gray-3 rounded-md  bg-white">
              <div>
                <img
                  className="h-40 w-40 mx-auto mt-4"
                  src="https://crazzyhub.s3.amazonaws.com/media/product_variant/Vivo-Y100-Mobile-Phone.jpg"
                />
              </div>
              <div className="absolute !top-2 !right-2 ">
                <FavoriteBorderIcon />
              </div>
              <div className="text-sm font-semibold mt-2 ml-2">
                vivo V23 Pro 5G (Sunshine Gold, 128 GB) (8 GB RAM)
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-green-500">
                In-Stock
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-black">
                {" "}
                ₹38,890
              </div>
              <div className="flex gap-x-4 mb-2 ">
                <div className="text-xs line-through text-gray-500 font-semibold ml-2 mt-1">
                  ₹12000
                </div>
                <div className="border text-xs font-bold bg-green-500 rounded-sm mt-1 w-14 text-center text-white">
                  15% off
                </div>
              </div>
            </div>
            <div className=" relative border border-gray-3 rounded-md  bg-white">
              <div>
                <img
                  className="h-40 w-40 mx-auto mt-4"
                  src="https://crazzyhub.s3.amazonaws.com/media/product_variant/Vivo-Y100-Mobile-Phone.jpg"
                />
              </div>
              <div className="absolute !top-2 !right-2 ">
                <FavoriteBorderIcon />
              </div>
              <div className="text-sm font-semibold mt-2 ml-2">
                vivo V23 Pro 5G (Sunshine Gold, 128 GB) (8 GB RAM)
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-green-500">
                In-Stock
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-black">
                {" "}
                ₹38,890
              </div>
              <div className="flex gap-x-4 mb-2 ">
                <div className="text-xs line-through text-gray-500 font-semibold ml-2 mt-1">
                  ₹12000
                </div>
                <div className="border text-xs font-bold bg-green-500 rounded-sm mt-1 w-14 text-center text-white">
                  15% off
                </div>
              </div>
            </div>
            <div className=" relative border border-gray-3 rounded-md  bg-white">
              <div>
                <img
                  className="h-40 w-40 mx-auto mt-4"
                  src="https://crazzyhub.s3.amazonaws.com/media/product_variant/Vivo-v25-pro-pure-black-256gb-12gb-ram-Front-Back-Side-View.webp"
                />
              </div>
              <div className="absolute !top-2 !right-2 ">
                <FavoriteBorderIcon />
              </div>
              <div className="text-sm font-semibold mt-2 ml-2">
                vivo V23 Pro 5G (Sunshine Gold, 128 GB) (8 GB RAM)
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-green-500">
                In-Stock
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-black">
                {" "}
                ₹38,890
              </div>
              <div className="flex gap-x-4 mb-2 ">
                <div className="text-xs line-through text-gray-500 font-semibold ml-2 mt-1">
                  ₹12000
                </div>
                <div className="border text-xs font-bold bg-green-500 rounded-sm mt-1 w-14 text-center text-white">
                  15% off
                </div>
              </div>
            </div>
            <div className=" relative border border-gray-3 rounded-md  bg-white">
              <div>
                <img
                  className="h-40 w-40 mx-auto mt-4"
                  src="https://crazzyhub.s3.amazonaws.com/media/product_variant/Apple-iphone-14-midnight-512gb-Front-Back-View.webp"
                />
              </div>
              <div className="absolute !top-2 !right-2 ">
                <FavoriteBorderIcon />
              </div>
              <div className="text-sm font-semibold mt-2 ml-2">
                vivo V23 Pro 5G (Sunshine Gold, 128 GB) (8 GB RAM)
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-green-500">
                In-Stock
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-black">
                {" "}
                ₹38,890
              </div>
              <div className="flex gap-x-4 mb-2 ">
                <div className="text-xs line-through text-gray-500 font-semibold ml-2 mt-1">
                  ₹12000
                </div>
                <div className="border text-xs font-bold bg-green-500 rounded-sm mt-1 w-14 text-center text-white">
                  15% off
                </div>
              </div>
            </div>
            <div className=" relative border border-gray-3 rounded-md  bg-white">
              <div>
                <img
                  className="h-40 w-40 mx-auto mt-4"
                  src="https://crazzyhub.s3.amazonaws.com/media/product_variant/Vivo-Y100-Mobile-Phone.jpg"
                />
              </div>
              <div className="absolute !top-2 !right-2 ">
                <FavoriteBorderIcon />
              </div>
              <div className="text-sm font-semibold mt-2 ml-2">
                vivo V23 Pro 5G (Sunshine Gold, 128 GB) (8 GB RAM)
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-green-500">
                In-Stock
              </div>
              <div className="text-sm font-semibold mt-1 ml-2 text-black">
                {" "}
                ₹38,890
              </div>
              <div className="flex gap-x-4 mb-2 ">
                <div className="text-xs line-through text-gray-500 font-semibold ml-2 mt-1">
                  ₹12000
                </div>
                <div className="border text-xs font-bold bg-green-500 rounded-sm mt-1 w-14 text-center text-white">
                  15% off
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bottom1 />
    </div>
  );
};

export default ProductDetails;

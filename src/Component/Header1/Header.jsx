import React, { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import "animate.css";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ImCross } from "react-icons/im";
import SearchIcon from "@mui/icons-material/Search";
import { RiAccountCircleFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosHeart } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  return (
    <div className=" top-0 sticky z-50 ">
      <div className="">
        <div className="h-24 bg-gradient-to-r from-rose-500 via-sky-500 flex justify-between to-orange-500  lg:hidden ">
          <div className="flex ml-5 gap-x-7">
            <div className="my-9 text-white text-2xl">
              <GiHamburgerMenu />
            </div>
            <div className="w-11 my-4">
              <img
                src="https://www.crazzyhub.com/static/media/weblogo.77a9ceab0e5b281d7a91.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex gap-x-5 my-9 mr-4 ">
            <div
              className="text-white text-3xl"
              onClick={() => navigate("/wish")}
            >
              <IoIosHeart />
            </div>
            <div className="text-white text-3xl">
              <IoMdCart />
            </div>

            <div className="text-white text-3xl" onClick={handleOpen}>
              <RiAccountCircleFill />
              {open && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
                  <form className=" border w-[70%] h-[70%]  bg-white  relative">
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-2xl font-semibold text-black mt-10">
                        Welcome Back
                      </div>
                      <div className="text-gray-700 font-semibold  text-sm">
                        Sign in to complete your shopping
                      </div>
                      <div>
                        <input
                          type="text"
                          className="border-2 w-[53vw] border-gray-200 h-9 rounded-md mt-8 pb-3 placeholder:pl-4 placeholder:text-gray-800 placeholder:text-sm "
                          placeholder="Mobile Number"
                        />
                      </div>

                      <div className="w-[77%] text-white bg-orange-400 font-semibold  h-10 rounded-md text-center mt-7 py-2 text-base">
                        Log In
                      </div>
                      <div className="w-[90%] text-xs mt-2 text-black text-center">
                        by signing in, you are conforming that you have accepted
                        our
                        <span className="text-blue-500"> Privacy & Policy</span>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="h-13 bg-rose-600 py-1 relative block lg:hidden">
          <input
            type="text"
            placeholder="Search for Products,Brands"
            className="w-[95%] flex mx-auto rounded-full h-11 placeholder:text-base font-semibold pl-4 "
          />

          <div>
            <SearchIcon className="right-6 absolute top-4" />
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block ">
        <div className="h-[14vh] flex bg-gradient-to-r from-rose-500 via-sky-500 to-orange-500 ">
          <div className="flex flex-col ml-20 mt-1">
            <div className="text-sm text-white mt-3">Delivery to</div>
            <div className="flex ">
              <div className=" text-white font-bold ">Location </div>
              <div>
                <MdLocationPin className="text-white text-xl mt-1" />
              </div>
            </div>
          </div>
          <div className="">
            <input
              type="text"
              className="rounded-3xl w-[35vw] ml-11 h-10 mt-5 outline-none placeholder:font-semibold pl-5 "
              placeholder="Search for Product,Brands,Offers"
            />
          </div>
          <div className="flex flex-col ml-20 mt-1">
            <div className="text-white text-sm  mt-3">Wishlist</div>
            <div className="flex">
              <div className="text-white font-bold">0 Items</div>
              <div>
                <FaHeart
                  onClick={() => navigate("wish")}
                  className="text-white  text-lg hover:!cursor-pointer ml-1 !h-5 !w-5  mt-1"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-36 mt-1">
            <div className="text-white text-sm  mt-3">0 Items</div>
            <div className="flex">
              <div className="text-white font-bold">₹0</div>
              <div>
                <IoMdCart  onClick={() => navigate("/cart")} className="text-white text-xl ml-1  mt-1" />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-36 mt-1">
            <div className="text-white text-sm  mt-3">My Account</div>
            <div className="flex z-40">
              <div className="text-white font-bold" onClick={handleOpen}>
                Sign In
              </div>
              {open && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40" onClick={handleClose}>
                  <form className="grid grid-cols-2 border w-[50%]  bg-white  relative">
                    <div>
                      <img
                        src="https://pub-027efb0add534c4fbed7432cf1c407a1.r2.dev/Assets/login-img.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-2xl font-semibold">Welcome Back</div>
                      <div className="text-gray-600 font-semibold ">
                        Sign in to complete your shopping
                      </div>
                      <div>
                        <input
                          type="text"
                          className="border  w-60 border-gray-200 h-9 rounded-md mt-8  placeholder:pl-4 placeholder:text-gray-600  "
                          placeholder="Mobile Number"
                        />
                      </div>

                      <div className="w-60 text-white bg-orange-400 font-semibold  h-10 rounded-md text-center mt-7 py-2">
                        Login
                      </div>
                      <div className="w-60 text-xs mt-2">
                        by signing in, you are conforming that you have accepted
                        our{" "}
                        <span className="text-blue-500">Privacy & Policy</span>
                      </div>
                    </div>

                  </form>
                </div>
              )}
              <div>
                <RiAccountCircleFill className="text-white text-xl ml-1  mt-1" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-9  bg-white shadow-lg mb-5">
          <div className="flex w-[50%]  justify-center gap-5   ">
            <div className="font-semibold mt-1.5">Tablets & Mobiles</div>
            <div className="font-semibold mt-1.5">Tv's & Electronics</div>
            <div className="font-semibold mt-1.5">Laptop & Accesories</div>
          </div>
          <div className="  flex items-center justify-center w-24 top-0 ">
            <div className="w-20 absolute top-1 animate__animated animate__tada animate__infinite infinite ">
              <img
                src="https://www.crazzyhub.com/static/media/weblogo.77a9ceab0e5b281d7a91.png"
                alt=""
              />
            </div>
          </div>

          <div className="flex w-[50%]  justify-center gap-5   ">
            <div className="font-semibold mt-1.5">Tablets & Mobiles</div>
            <div className="font-semibold mt-1.5">Tv's & Electronics</div>
            <div className="font-semibold mt-1.5">Laptop & Accesories</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
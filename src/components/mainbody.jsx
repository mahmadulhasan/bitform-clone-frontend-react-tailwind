import React from "react";
import InfiniteScroller from "./InfiniteScroller";

const Mainbody = () => {
  return (
    <div className="flex flex-col">
      <div className="relative min-h-screen w-full flex flex-col items-end overflow-x-hidden">
        <img
          src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/6868f8b6b7b4596dd255b80a_Home%20V1%20Banner%20Shape.png"
          alt=""
          className="absolute top-0 left-0 h-screen "
        />
        <img
          src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/687b3507d7f42e25dcf9e234_banner%20inner%20circle%20element.png"
          alt=""
          className="absolute md:-top-75 md:h-150 -top-50 h-100 left-1/2 -translate-x-1/2  rotate -z-8"
        />

        <div className="w-full h-screen z-10 flex flex-col justify-end items-center py-[20vh] gap-10 md:px-20 px-10">
          <center className="text-[clamp(3rem,6vw,7rem)] font-semibold leading-tight">
            Next-Gen Crypto Trading Webflow Template
          </center>
          <center className="text-lg">
            Designed to empower crypto dashboards, changelogs, and everything in
            between.
          </center>
          <span className="text-lg w-fit relative py-3 px-10 bg-white/5 button-move-still">
            More Templet
            <img
              src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ec3f56167133bfaf3_Protected%20Password%20Text%20Input%20Line1.png"
              alt=""
              className="absolute w-10px top-0 left-0"
            />
            <img
              src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ed7b848859065342c_Protected%20Password%20Text%20Input%20Line2.png"
              alt=""
              className="absolute w-10px top-0 right-0"
            />
            <img
              src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ea1797499826e7800_Protected%20Password%20Text%20Input%20Line3.png"
              alt=""
              className="absolute w-10px bottom-0 left-0"
            />
            <img
              src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1e8df2ae8cbec14459_Protected%20Password%20Text%20Input%20Line4.png"
              alt=""
              className="absolute w-10px bottom-0 right-0"
            />
          </span>
        </div>
      </div>

      <div className="py-[10vh] bg-transparent">
        <InfiniteScroller />
      </div>

      <div className="flex flex-col gap-10 py-[10vh] items-center">
        <span className="text-lg w-fit relative py-3 px-10 bg-white/5 button-move-still">
          Bitform Features
          <img
            src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ec3f56167133bfaf3_Protected%20Password%20Text%20Input%20Line1.png"
            alt=""
            className="absolute w-10px top-0 left-0"
          />
          <img
            src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ed7b848859065342c_Protected%20Password%20Text%20Input%20Line2.png"
            alt=""
            className="absolute w-10px top-0 right-0"
          />
          <img
            src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ea1797499826e7800_Protected%20Password%20Text%20Input%20Line3.png"
            alt=""
            className="absolute w-10px bottom-0 left-0"
          />
          <img
            src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1e8df2ae8cbec14459_Protected%20Password%20Text%20Input%20Line4.png"
            alt=""
            className="absolute w-10px bottom-0 right-0"
          />
        </span>
        <center className="text-6xl">What is included in Bitform</center>
        <div className="flex flex-wrap gap-5 w-full items-start justify-center">
          <div className="flex flex-col gap-3">
            <div className="p-2 bg-white/5 relative">
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/6878988232da9aa10c1901d6_Preview%20Features%20Image1.jpg"
                alt=""
                className="w-70 lg:w-100"
              />
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ec3f56167133bfaf3_Protected%20Password%20Text%20Input%20Line1.png"
                alt=""
                className="absolute w-10px top-0 left-0"
              />
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ed7b848859065342c_Protected%20Password%20Text%20Input%20Line2.png"
                alt=""
                className="absolute w-10px top-0 right-0"
              />
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ea1797499826e7800_Protected%20Password%20Text%20Input%20Line3.png"
                alt=""
                className="absolute w-10px bottom-0 left-0"
              />
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1e8df2ae8cbec14459_Protected%20Password%20Text%20Input%20Line4.png"
                alt=""
                className="absolute w-10px bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col w-70 lg:w-100 gap-2">
              <span className="text-xl text-center font-semibold">
                Multiple Pre-built Page
              </span>
              <span className="text-center">
                Packed with over 10 ready-to-use pages with cleanly structured,
                and easy to customize
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="p-2 bg-white/5 relative">
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/6878988237321c8f7e44bc65_Preview%20Features%20Image2.jpg"
                alt=""
                className="w-70 lg:w-100"
              />
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ec3f56167133bfaf3_Protected%20Password%20Text%20Input%20Line1.png"
                alt=""
                className="absolute w-10px top-0 left-0"
              />
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ed7b848859065342c_Protected%20Password%20Text%20Input%20Line2.png"
                alt=""
                className="absolute w-10px top-0 right-0"
              />
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ea1797499826e7800_Protected%20Password%20Text%20Input%20Line3.png"
                alt=""
                className="absolute w-10px bottom-0 left-0"
              />
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1e8df2ae8cbec14459_Protected%20Password%20Text%20Input%20Line4.png"
                alt=""
                className="absolute w-10px bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col w-70 lg:w-100 gap-2">
              <span className="text-xl text-center font-semibold">
                20+ Sections
              </span>
              <span className="text-center">
                20+ Creative designed sections for many purpose of using
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-[10vh] w-full">
        <div className="p-2 bg-white/5 relative">
          <div className="bg-[#010513] flex md:flex-row flex-col lg:gap-20 gap-10  lg:p-10 p-5">
            <div className="flex flex-col gap-5">
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68789d6551897af7c1bfbf1d_Preview%20Features%20Figma%20Icon.svg"
                alt=""
                className="w-10"
              />
              <span className="text-lg font-semibold">Figma File Access</span>
              <span className="max-w-80">
                After the purchase, simply send us an email to xyz@gmail.co and
                we will be happy to forward you the Figma file.
              </span>
              <span className="text-md w-fit relative py-2 px-10 bg-white/5 button-move-still">
                Request File
                <img
                  src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ec3f56167133bfaf3_Protected%20Password%20Text%20Input%20Line1.png"
                  alt=""
                  className="absolute w-10px top-0 left-0"
                />
                <img
                  src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ed7b848859065342c_Protected%20Password%20Text%20Input%20Line2.png"
                  alt=""
                  className="absolute w-10px top-0 right-0"
                />
                <img
                  src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ea1797499826e7800_Protected%20Password%20Text%20Input%20Line3.png"
                  alt=""
                  className="absolute w-10px bottom-0 left-0"
                />
                <img
                  src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1e8df2ae8cbec14459_Protected%20Password%20Text%20Input%20Line4.png"
                  alt=""
                  className="absolute w-10px bottom-0 right-0"
                />
              </span>
            </div>
            <div className="flex flex-col gap-5 max-w-70">
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68789f499facec1b0d2ff152_Preview%20Features%20Figma%20File%20Icon.svg"
                alt=""
                className="w-full"
              />
            </div>
          </div>
          <img
            src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ec3f56167133bfaf3_Protected%20Password%20Text%20Input%20Line1.png"
            alt=""
            className="absolute w-10px top-0 left-0"
          />
          <img
            src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ed7b848859065342c_Protected%20Password%20Text%20Input%20Line2.png"
            alt=""
            className="absolute w-10px top-0 right-0"
          />
          <img
            src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ea1797499826e7800_Protected%20Password%20Text%20Input%20Line3.png"
            alt=""
            className="absolute w-10px bottom-0 left-0"
          />
          <img
            src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1e8df2ae8cbec14459_Protected%20Password%20Text%20Input%20Line4.png"
            alt=""
            className="absolute w-10px bottom-0 right-0"
          />
        </div>
      </div>

      <div className="flex flex-col gap-10 w-full items-center justify-center py-[10vh]">
        <span className="text-lg w-fit relative py-3 px-10 bg-white/5 button-move-still">
          Bitform Templet
          <img
            src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ec3f56167133bfaf3_Protected%20Password%20Text%20Input%20Line1.png"
            alt=""
            className="absolute w-10px top-0 left-0"
          />
          <img
            src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ed7b848859065342c_Protected%20Password%20Text%20Input%20Line2.png"
            alt=""
            className="absolute w-10px top-0 right-0"
          />
          <img
            src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ea1797499826e7800_Protected%20Password%20Text%20Input%20Line3.png"
            alt=""
            className="absolute w-10px bottom-0 left-0"
          />
          <img
            src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1e8df2ae8cbec14459_Protected%20Password%20Text%20Input%20Line4.png"
            alt=""
            className="absolute w-10px bottom-0 right-0"
          />
        </span>
        <span className="text-6xl">The Landing Page</span>
        <div className="flex flex-wrap gap-5 w-full items-start justify-center">
          <div className="flex flex-col gap-3 ">
            <div className="p-2 bg-white/5 relative">
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/6878a2dfb1c2f4b31b57fbfd_Demo%20Image1.jpg"
                alt=""
                className="w-70 lg:w-100"
              />
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ec3f56167133bfaf3_Protected%20Password%20Text%20Input%20Line1.png"
                alt=""
                className="absolute w-10px top-0 left-0"
              />
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ed7b848859065342c_Protected%20Password%20Text%20Input%20Line2.png"
                alt=""
                className="absolute w-10px top-0 right-0"
              />
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ea1797499826e7800_Protected%20Password%20Text%20Input%20Line3.png"
                alt=""
                className="absolute w-10px bottom-0 left-0"
              />
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1e8df2ae8cbec14459_Protected%20Password%20Text%20Input%20Line4.png"
                alt=""
                className="absolute w-10px bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col w-70 lg:w-100 gap-2">
              <span className="text-xl text-center font-semibold">
                Home V1
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="p-2 bg-white/5 relative">
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/6878a47eb1c2f4b31b58dd6a_Demo%20Image2.jpg"
                alt=""
                className="w-70 lg:w-100"
              />
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ec3f56167133bfaf3_Protected%20Password%20Text%20Input%20Line1.png"
                alt=""
                className="absolute w-10px top-0 left-0"
              />
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ed7b848859065342c_Protected%20Password%20Text%20Input%20Line2.png"
                alt=""
                className="absolute w-10px top-0 right-0"
              />
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ea1797499826e7800_Protected%20Password%20Text%20Input%20Line3.png"
                alt=""
                className="absolute w-10px bottom-0 left-0"
              />
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1e8df2ae8cbec14459_Protected%20Password%20Text%20Input%20Line4.png"
                alt=""
                className="absolute w-10px bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col w-70 lg:w-100 gap-2">
              <span className="text-xl text-center font-semibold">
                Home V2
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 w-full items-center justify-center min-h-screen py-[10vh] bg-[url('https://cdn.prod.website-files.com/686615b36b71a296c4649489/6878a94d8924088f525c576e_Preview%20CTA%20Bg.png')] bg-center">
        <span className="text-6xl max-w-[1000px] text-center px-10">Ready to Launch Your Crypto Platform With Style?</span>
        <button className="py-2 px-10 text-center bg-primary button-move-still"> <span className="">Purchase Now</span> </button>
      </div>
    </div>
  );
};

export default Mainbody;

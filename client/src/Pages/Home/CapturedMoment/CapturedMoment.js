import React from "react";
import "./CapturedMoment.css";
import { BsPlayCircleFill } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { FaHandHoldingUsd } from "react-icons/fa";

const CapturedMoment = () => {
  return (
    <div>
      <div className="hero bg-base-200 font">
        <div className="hero-content items-start flex-col lg:flex-row-reverse">
          <div className="lg:w-1/2 img-overlay relative">
            <img
              src="https://wp.w3layouts.com/pixshot/wp-content/themes/pixshot/assets/images/ab2.jpg"
              className=" rounded shadow-2xl"
              alt=""
            />
            <div className="absolute">
              <button className="rounded-full  bg-[#EF002D]">
                {" "}
                <span className="text-7xl text-white">
                  <BsPlayCircleFill />
                </span>
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-10 lg:py-20">
            <div className=" ">
              <p className="text-xl uppercase">
                CAPTURE AND SHARE YOUR BEST SIDE
              </p>
              <h1 className="text-5xl font-bold mt-2">
                Photography Is Not An
                <br /> Exact Science.{" "}
              </h1>
              <p className="text-lg w-4/5 pt-5">
                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                ultrices in ligula. Semper at tempufddfel.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div className=" hover ">
                <figure className="px-10 pt-10 ">
                  <button className="rounded-full  w-24 h-24 flex justify-center items-center bg-base-100">
                    {" "}
                    <span className="text-6xl text-white">
                      <MdGroups />
                    </span>
                  </button>
                </figure>
                <div className="card-body ">
                  <h2 className="card-title hover:text-[#EF002D]">
                    EDITING PROCESS
                  </h2>
                  <p>
                    Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                    ultrices in ligula.
                  </p>
                </div>
              </div>
              <div className=" hover ">
                <figure className="px-10 pt-10 ">
                  <button className="rounded-full   w-24 h-24 flex justify-center items-center bg-base-100">
                    {" "}
                    <span className="text-6xl text-white">
                      <FaHandHoldingUsd />
                    </span>
                  </button>
                </figure>
                <div className="card-body  ">
                  <h2 className="card-title hover:text-[#EF002D]">
                    EDITING PROCESS
                  </h2>
                  <p>
                    Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                    ultrices in ligula.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapturedMoment;

import React from "react";
import { Link } from "react-router-dom";

const Captured = () => {
  return (
    <div className="font">
      <div className="hero min-h-screen bg-base-200 lg:py-40">
        <div className=" container mx-auto ">
          <div className=" lg:pl-28">
            <p className="text-xl uppercase">
              CAPTURE AND SHARE YOUR BEST SIDE
            </p>
            <h1 className="text-4xl font-bold mt-2">
              For Exceptional Photographers, It’s <br /> All About The Details
            </h1>
          </div>
          <div className="hero-content flex-col lg:flex-row items-start lg:relative">
            <div className="lg:w-1/2 ">
              <img
                src="https://wp.w3layouts.com/pixshot/wp-content/themes/pixshot/assets/images/banner5.jpg"
                className=" rounded  shadow-2xl"
                alt=""
              />
            </div>
            <div className="lg:w-1/3  ">
              <p className="pb-6  text-xl lg:ml-10">
                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
              <Link
                to={"/"}
                className="btn bg-[#D6D600] 
          lg:ml-10 hover:bg-[#b3b313] rounded text-black px-10"
              >
                Read more
              </Link>
            </div>

            <div className="lg:absolute lg:w-1/2 top-64 left-2/4 ">
              <div className="stats bg-[#EF002D] text-primary-content rounded lg:pr-40  pr-5 lg:p-10 ">
                <div className="stat ">
                  <div className="stat-title">Location</div>
                  <div className="stat-value">89,400</div>
                  <div className="stat-title">Total Snaps</div>
                </div>

                <div className="stat">
                  <div className="stat-title">People</div>
                  <div className="stat-value">40,400</div>
                  <div className="stat-title">Happy Client</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Captured;

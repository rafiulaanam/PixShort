import React from "react";

const WeOffer = () => {
  return (
    <div className="font lg:mb-64 lg:relative">
      <div
        className="hero lg:h-[500px]"
        style={{
          backgroundImage: `url("https://wp.w3layouts.com/pixshot/wp-content/themes/pixshot/assets/images/banner4.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content">
          <div className="lg:-mt-28 lg:-ml-52">
            <p className="lg:text-xl text-[#D6D600] uppercase">What we Offer</p>
            <h1 className="lg:text-5xl font-bold mt-2 text-white">
              Photography Is Not About The Camera,
              <br /> It’s About Passion
            </h1>
          </div>
        </div>
      </div>
      <div className="lg:absolute grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 top-80 gap-10 container mx-auto lg:px-20">
        <div className="card rounded bg-base-100 shadow-xl hover:bg-[#EF002D]">
          <figure className="px-2 pt-2">
            <img
              src="https://wp.w3layouts.com/pixshot/wp-content/themes/pixshot/assets/images/g6.jpg"
              alt="Shoes"
              className="rounded"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title uppercase text-white">Commercial</h2>
          </div>
        </div>
        <div className="card rounded bg-base-100 shadow-xl hover:bg-[#EF002D]">
          <figure className="px-2 pt-2">
            <img
              src="https://wp.w3layouts.com/pixshot/wp-content/themes/pixshot/assets/images/g6.jpg"
              alt="Shoes"
              className="rounded "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title uppercase text-white">Personal</h2>
          </div>
        </div>
        <div className="card rounded bg-base-100 shadow-xl hover:bg-[#EF002D]">
          <figure className="px-2 pt-2">
            <img
              src="https://wp.w3layouts.com/pixshot/wp-content/themes/pixshot/assets/images/g6.jpg"
              alt="Shoes"
              className="rounded  "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title uppercase text-white">editorial</h2>
          </div>
        </div>
        <div className="card rounded bg-base-100 shadow-xl hover:bg-[#EF002D]">
          <figure className="px-2 pt-2 ">
            <img
              src="https://wp.w3layouts.com/pixshot/wp-content/themes/pixshot/assets/images/g6.jpg"
              alt="Shoes"
              className="rounded "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title uppercase text-white">design</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;

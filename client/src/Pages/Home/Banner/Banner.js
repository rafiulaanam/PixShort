import React from "react";
import "./Banner.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="font">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true} 
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper lg:h-[600px]"
      >
        <SwiperSlide>
          <div>
            <div className="img-gradient">
              <img
                src="https://wp.w3layouts.com/pixshot/wp-content/themes/pixshot/assets/images/banner1.jpg"
                alt=""
              />
            </div>
            <div className="absolute  transform -translate-y-1/2 lg:right-14 md:left-16 left-8 md:top-1/2  lg:top-1/2 top-1/3">
              <p className="mt-8  lg:text-2xl md:text-3xl text-[#DDE200]">
                Put Hope In Every Click
              </p>
              <h1 className="lg:text-8xl md:text-6xl text-3xl font-bold uppercase lg:mt-5 mt-2	 text-white">
                Turn your photos
                <br /> into art
              </h1>
              <Link to={"/"}>
                <button className="btn border-none  bg-[#EF002D] text-white rounded px-8  lg:mt-8 mt-3">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="img-gradient">
              <img
                src="https://wp.w3layouts.com/pixshot/wp-content/themes/pixshot/assets/images/banner2.jpg"
                alt=""
              />
            </div>
            <div className="absolute  transform -translate-y-1/2 lg:right-14 md:left-16 left-8 md:top-1/2  lg:top-1/2 top-1/3">
              <p className="mt-8  lg:text-2xl md:text-3xl text-[#DDE200]">
                Put Hope In Every Click
              </p>
              <h1 className="lg:text-8xl md:text-6xl text-3xl font-bold uppercase lg:mt-5 mt-2	 text-white">
                WAIT FOR THE BEST SHOT.
              </h1>
              <Link to={"/"}>
                <button className="btn border-none  bg-[#EF002D] text-white rounded px-8  lg:mt-8 mt-3">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="img-gradient">
              <img
                src="https://wp.w3layouts.com/pixshot/wp-content/themes/pixshot/assets/images/banner3.jpg"
                alt=""
              />
            </div>
            <div className="absolute  transform -translate-y-1/2 lg:right-14 md:left-16 left-8 md:top-1/2  lg:top-1/2 top-1/3">
              <p className="mt-8  lg:text-2xl md:text-3xl text-[#DDE200]">
                Put Hope In Every Click
              </p>
              <h1 className="lg:text-8xl md:text-6xl text-3xl font-bold uppercase lg:mt-5 mt-2	 text-white">
                Turn your photos
                <br /> into art
              </h1>
              <Link to={"/"}>
                <button className="btn border-none  bg-[#EF002D] text-white rounded px-8  lg:mt-8 mt-3">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="img-gradient">
              <img
                src="https://wp.w3layouts.com/pixshot/wp-content/themes/pixshot/assets/images/banner4.jpg"
                alt=""
              />
            </div>
            <div className="absolute  transform -translate-y-1/2 lg:right-14 md:left-16 left-8 md:top-1/2  lg:top-1/2 top-1/3">
              <p className="mt-8  lg:text-2xl md:text-3xl text-[#DDE200]">
                Put Hope In Every Click
              </p>
              <h1 className="lg:text-8xl md:text-6xl text-3xl font-bold uppercase lg:mt-5 mt-2	 text-white">
                Turn your photos
                <br /> into art
              </h1>
              <Link to={"/"}>
                <button className="btn border-none  bg-[#EF002D] text-white rounded px-8  lg:mt-8 mt-3">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="img-gradient">
              <img
                src="https://wp.w3layouts.com/pixshot/wp-content/themes/pixshot/assets/images/banner5.jpg"
                alt=""
              />
            </div>
            <div className="absolute  transform -translate-y-1/2 lg:right-14 md:left-16 left-8 md:top-1/2  lg:top-1/2 top-1/3">
              <p className="mt-8  lg:text-2xl md:text-3xl text-[#DDE200]">
                Put Hope In Every Click
              </p>
              <h1 className="lg:text-8xl md:text-6xl text-3xl font-bold uppercase lg:mt-5 mt-2	 text-white">
                Turn your photos
                <br /> into art
              </h1>
              <Link to={"/"}>
                <button className="btn border-none  bg-[#EF002D] text-white rounded px-8  lg:mt-8 mt-3">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="img-gradient">
              <img
                src="https://wp.w3layouts.com/pixshot/wp-content/themes/pixshot/assets/images/banner6.jpg"
                alt=""
              />
            </div>
            <div className="absolute  transform -translate-y-1/2 lg:right-14 md:left-16 left-8 md:top-1/2  lg:top-1/2 top-1/3">
              <p className="mt-8  lg:text-2xl md:text-3xl text-[#DDE200]">
                Put Hope In Every Click
              </p>
              <h1 className="lg:text-8xl md:text-6xl text-3xl font-bold uppercase lg:mt-5 mt-2	 text-white">
                Turn your photos
                <br /> into art
              </h1>
              <Link to={"/"}>
                <button className="btn border-none  bg-[#EF002D] text-white rounded px-8  lg:mt-8 mt-3">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

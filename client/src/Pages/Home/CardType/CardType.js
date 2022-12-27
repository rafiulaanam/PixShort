import React from "react";
import { FaEdit, FaVideo, FaPhotoVideo, FaPaintBrush } from "react-icons/fa";
import { BsArrowRightCircleFill } from "react-icons/bs";

const CardType = () => {
  return (
    <div className="font grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto">
      <div className=" bg-base-100 ">
        <figure className="px-10 pt-10 text-5xl flex justify-center text-[#EF002D]">
          <FaEdit></FaEdit>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">EDITING PROCESS</h2>
          <p>
            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices
            in ligula.
          </p>
          <div className="card-actions">
            <button>
              <span className="text-5xl btn btn-circle border-none text-[#D6D600] hover:text-[#EF002D] hover:bg-white">
                <BsArrowRightCircleFill></BsArrowRightCircleFill>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-base-100 ">
        <figure className="px-10 pt-10 text-5xl flex justify-center text-[#EF002D]">
          <FaVideo></FaVideo>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">EDITING PROCESS</h2>
          <p>
            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices
            in ligula.
          </p>
          <div className="card-actions">
            <button>
              <span className="text-5xl btn btn-circle border-none text-[#D6D600] hover:text-[#EF002D] hover:bg-white">
                <BsArrowRightCircleFill></BsArrowRightCircleFill>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-base-100 ">
        <figure className="px-10 pt-10 text-5xl flex justify-center text-[#EF002D]">
          <FaPhotoVideo></FaPhotoVideo>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">EDITING PROCESS</h2>
          <p>
            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices
            in ligula.
          </p>
          <div className="card-actions">
            <button>
              <span className="text-5xl btn btn-circle border-none text-[#D6D600] hover:text-[#EF002D] hover:bg-white">
                <BsArrowRightCircleFill></BsArrowRightCircleFill>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-base-100 ">
        <figure className="px-10 pt-10 text-5xl flex justify-center text-[#EF002D]">
          <FaPaintBrush></FaPaintBrush>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">EDITING PROCESS</h2>
          <p>
            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices
            in ligula.
          </p>
          <div className="card-actions">
            <button>
              <span className="text-5xl btn btn-circle border-none text-[#D6D600] hover:text-[#EF002D] hover:bg-white">
                <BsArrowRightCircleFill></BsArrowRightCircleFill>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardType;

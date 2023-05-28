import React from "react";
import "./Carousel.css";

const CarouselItem = ({ slide }) => {
  const { image, id, next, prev } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} className="w-full rounded-xl" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
        <h1 className="font-bold text-white text-6xl">
          Affordable <br />
          Price For Car <br />
          Servicing
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-96">
        <p className="text-white text-xl">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-2/3">
        <div className="flex gap-5">
          <button className="btn bg-red-600 text-white">Discover More</button>
          <button className="btn btn-outline text-white">
            Latest Projects
          </button>
        </div>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle bg-red-600 mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle bg-red-600">
          ❯
        </a>
      </div>
    </div>
  );
};

export default CarouselItem;

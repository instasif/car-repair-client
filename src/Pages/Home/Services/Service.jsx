import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { img, title, price, _id } = service;
  return (
    <div className="card card-compact w-96 shadow-xl bg-orange-50">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="h-56" />
      </figure>
      <div className="card-body flex">
        <div>
          <h2 className="card-title">{title}</h2>
          <p className="text-red-500 font-medium">Price: {price}$</p>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-ghost text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;

import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://genius-car-server-jade-rho.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <p className="text-2xl font-bold text-red-600 text-center">Services</p>
      <h2 className="text-5xl font-semibold text-center">Our Service Area</h2>
      <p className="text-center">
        the majority have suffered alteration in some form, by injected humour,
        or randomised <br /> words which don't look even slightly believable.{" "}
      </p>

      <div className="my-20 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 ms-5">
        {services.map((service, index) => (
          <Service service={service} key={index} />
        ))}
      </div>
    </>
  );
};

export default Services;

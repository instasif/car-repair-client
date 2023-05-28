import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const queries = form.queries.value;
    const email = user?.email || "unregistered";
    const order = {
      service: service._id,
      serviceName: service.title,
      price: service.price,
      img: service.img,
      customer: name,
      phone,
      queries,
      email,
    };

    // ?----- post the data on database by backend
    fetch("https://genius-car-server-jade-rho.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Order placed successfully");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 className="text-4xl my-1">
          You are about to order:{" "}
          <span className="text-red-600">{service.title}</span>
        </h2>
        <h4 className="text-3xl">
          Price: <span className="text-red-600">{service.price}$</span>
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            required
            className="input input-ghost w-full input-bordered"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            required
            className="input input-ghost w-full input-bordered"
          />
          <input
            name="phone"
            type="text"
            required
            placeholder="Your Phone"
            className="input input-ghost w-full input-bordered"
          />
          <input
            name="email"
            type="text"
            required
            placeholder="Your Email"
            defaultValue={user?.email}
            readOnly
            className="input input-ghost w-full input-bordered"
          />
        </div>
        <textarea
          name="queries"
          required
          className="textarea textarea-ghost w-full input-bordered my-3"
          placeholder="Quaries"
        ></textarea>
        <input
          className="btn bg-red-600 w-full mb-2"
          type="submit"
          value="Place your order"
        />
      </form>
    </div>
  );
};

export default Checkout;

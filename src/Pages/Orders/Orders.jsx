import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  const url = `https://genius-car-server-jade-rho.vercel.app/orders?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      })
      .then((err) => console.error(err));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order?"
    );
    if (proceed) {
      fetch(`https://genius-car-server-jade-rho.vercel.app/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = orders.filter((odr) => odr._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  const handleStatusUpdate = (id) => {
    fetch(`https://genius-car-server-jade-rho.vercel.app/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Order Approved");
          const pending = orders.filter((odr) => odr._id !== id);
          const approving = orders.find((odr) => odr._id === id);
          approving.status = "Approved";
          const newOrders = [approving, ...pending];
          setOrders(newOrders);
        }
      });
  };

  return (
    <>
      <h2 className="text-3xl">
        You have only:{" "}
        <span className="text-red-600">{orders.length} orders!</span>
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead className="w-full">
            <tr>
              <th></th>
              <th>Customer</th>
              <th>Service Name</th>
              <th>Customer Queries</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <OrderRow
                key={index}
                order={order}
                handleDelete={handleDelete}
                handleStatusUpdate={handleStatusUpdate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;

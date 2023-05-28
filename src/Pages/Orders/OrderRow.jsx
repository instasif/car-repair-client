import React, { useEffect, useState } from "react";

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
  const [data, setData] = useState([]);
  const {
    _id,
    serviceName,
    email,
    price,
    phone,
    customer,
    queries,
    service,
    status,
  } = order;

  useEffect(() => {
    fetch(`https://genius-car-server-jade-rho.vercel.app/services/${service}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [service]);

  return (
    <tr className="">
      <th>
        <label>
          <input
            onClick={() => handleDelete(_id)}
            type="submit"
            value="X"
            className="btn btn-ghost text-red-600 text-xl"
          />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-36 h-28">
              {data?.img && <img src={data.img} alt="Service Image" />}
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">{price} $</span>
      </td>
      <td className="">{queries}</td>
      <th>
        <button
          className="btn btn-ghost btn-xs"
          onClick={() => handleStatusUpdate(_id)}
        >
          {status ? status : "Pending"}
        </button>
      </th>
    </tr>
  );
};

export default OrderRow;

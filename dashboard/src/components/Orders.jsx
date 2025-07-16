import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Orders = () => {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/newOrder");
      setOrderData(response.data);
    };
    fetchData();
  });
  return (
    <div className="orders">
      {orderData ? (
        <div>
          <h3 className="title">Orders ({orderData.length})</h3>
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Qty.</th>
                  <th>LTP</th>
                  <th>Mode</th>
                </tr>
              </thead>
              <tbody>
                {orderData.map((stock, index) => {
                  return (
                    <tr key={index}>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.price}</td>
                      <td
                        style={{
                          color: stock.mode === "BUY" ? "green" : "red",
                        }}
                      >
                        {stock.mode}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="no-orders">
          <p>You haven't placed any orders</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      )}
    </div>
  );
};

export default Orders;

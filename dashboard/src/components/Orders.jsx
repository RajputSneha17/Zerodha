import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Orders = () => {
  const [orderData, setOrderData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:8000/newOrder");
    setOrderData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSellClick = async (id) => {
    try {
      await axios.patch("http://localhost:8000/updateMode", {
        id: id,
        mode: "Sell",
      });

      await fetchData();
      toast.success("Your stock has been sold ✅");
    } catch (error) {
      console.error(error);
      toast.error("No matching order found");
    }
  };

  const deleteHandle = async(id) => {
    try {
      await axios.delete("http://localhost:8000/deleteOrder", {
      data: { id: id },
    })
    await fetchData();
      toast.success("Delete Successfully! ✅");
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  }
  return (
    <div className="orders">
      <ToastContainer position="top-right" autoClose={3000} />
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
                  <th>Sell</th>
                </tr>
              </thead>
              <tbody>
                {orderData.map((stock, index) => {
                  return (
                    <tr key={index}>
                      <td>{stock.name} </td>
                      <td>{stock.qty}</td>
                      <td>{stock.price}</td>
                      <td
                        style={{
                          color: stock.mode === "BUY" ? "green" : "red",
                        }}
                      >
                        {stock.mode}
                      </td>
                      <td>
                        <button
                          style={{
                              background: "red",
                              color: "white",
                              border: "none",
                              padding: "3.5px",
                            }}
                          onClick={() => handleSellClick(stock._id)}
                        >
                          sell
                        </button>{" "}
                        {stock.mode.toLowerCase() === "sell" ? (
                          <button
                            onClick={() => deleteHandle(stock._id)}
                            style={{
                              background: "red",
                              color: "white",
                              border: "none",
                              padding: "3.5px",
                            }}
                          >
                            Delete
                          </button>
                        ) : null}
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

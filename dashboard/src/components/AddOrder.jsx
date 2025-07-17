import React, { useState } from "react";
import "./AddOrder.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddOrder = ({ onClose, name }) => {
  const [price, setPrice] = useState("140");
  const [quantity, setQuantity] = useState("1");

  const orderData =  (e) => {
    e.preventDefault();
    const minPrice = 140;
    const minQuantity = 1;
    if(price< minPrice || minQuantity> quantity){
      toast.error("Please enter a valid price (min ₹140) and quantity (min 1)");
      return
    }

    try {
       axios.post("http://localhost:8000/newOrder", {
        name: name,
        qty: quantity,
        price: price,
        mode: "BUY",
      });
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="popup-overlay">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="popup-box">
        <h3>Buy Stock</h3>
        <form method="post" onSubmit={orderData}>
          <input type="text" value={name} readOnly />
          <input 
            type="number" 
            placeholder="Quantity" 
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <input 
            type="number" 
            placeholder="Price" 
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button type="submit">Buy</button>
          <button type="button" onClick={onClose} className="close-btn">
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddOrder;
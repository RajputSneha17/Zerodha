import React, { useState, useContext, useEffect } from "react";
import AddOrder from "./AddOrder";

import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import axios from "axios";

const WatchList = () => {
  const [watchlist, setWatchlistData] = useState([]);

  useEffect(() => {
    const fetchWatchlistData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/watchlist");
        setWatchlistData(response.data);
      } catch (error) {
        console.log("Failed to fetch watchlist:", error);
      }
    };

    fetchWatchlistData();
  }, []);

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseEnter = () => setShowWatchlistActions(true);
  const handleMouseLeave = () => setShowWatchlistActions(false);

  const handleBuy = () => {
    setShowPopup(true);
  };

  return (
    <>
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="item">
          <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
          <div className="itemInfo">
            <span className="percent">{stock.percent}</span>
            {stock.isDown ? (
              <KeyboardArrowDown className="down" />
            ) : (
              <KeyboardArrowUp className="down" />
            )}
            <span className="price">{stock.price}</span>
          </div>
        </div>

        {showWatchlistActions && (
          <span className="actions">
            <Tooltip
              title="Buy (B)"
              placement="top"
              arrow
              TransitionComponent={Grow}
            >
              <button className="buy" onClick={handleBuy}>
                Buy
              </button>
            </Tooltip>

            <Tooltip
              title="Analytics (A)"
              placement="top"
              arrow
              TransitionComponent={Grow}
            >
              <button className="action">
                <BarChartOutlined className="icon" />
              </button>
            </Tooltip>

            <Tooltip
              title="More"
              placement="top"
              arrow
              TransitionComponent={Grow}
            >
              <button className="action">
                <MoreHoriz className="icon" />
              </button>
            </Tooltip>
          </span>
        )}
      </li>
      {showPopup && <AddOrder name={stock.name} onClose={() => setShowPopup(false)} />}
    </>
  );
};

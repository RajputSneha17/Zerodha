import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [active, setActive] = useState("");
  return(
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <p><Link to="/" onClick={() => setActive("/")} className={active === "/" ? "active" : ""} >Dashboard</Link></p>
          </li>
          <li>
            <p><Link to="/orders" onClick={() => setActive("/orders")} className={active === "/orders" ? "active" : ""} >Orders</Link></p>
          </li>
          <li>
            <p><Link to="/holdings" onClick={() => setActive("/holdings")} className={active === "/holdings" ? "active" : ""} >Holdings</Link></p>
          </li>
          <li>
            <p><Link to="/positions" onClick={() => setActive("/positions")} className={active === "/positions" ? "active" : ""} >Positions</Link></p>
          </li>
          <li>
            <p><Link to="/funds" onClick={() => setActive("/funds")} className={active === "/funds" ? "active" : ""} >Funds</Link></p>
          </li>
          <li>
            <p><Link to="/apps" onClick={() => setActive("/apps")} className={active === "/apps" ? "active" : ""} >Apps</Link></p>
          </li>
        </ul>
        <hr />
        <div className="profile" >
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
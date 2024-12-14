import React, { useState } from "react";
import { items } from "./Data";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = ({ setdata, cart }) => {
  const [searchi, setsearchi] = useState("");
  const navigate = useNavigate();

const handleform = (e) => {
  e.preventDefault();
  navigate(`/search/${searchi}`);
};

const filterbycat = (category) => {
  const element = items.filter((product) => product.category == category);
  setdata(element);
};

const filterbyprice = (price) => {
  const ele = items.filter((product) => product.price >= price);
  setdata(ele);
};
return (
  <>
    <div className="nav-bar">
      <div>
        <Link to={"/"}>
          <div>E-Cart</div>
        </Link>
      </div>

      <div className="searchbar">
        <form onSubmit={handleform}>
          <input
            type="text"
            placeholder="search here"
            onChange={(e) => setsearchi(e.target.value)}/>
        </form>
      </div>

      <div>
        <Link to={"/cartinfo"}>
          <button type="button" className="btn btn-primary position-relative">
            ADD CART
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
              <span className="visually-hidden">Add to cart</span>
            </span>
          </button>
        </Link>
      </div>
    </div>

    <div className="navbar-wrap">
      <div className="child1" onClick={() => filterbycat("mobiles")}>
        Mobile
      </div>
      <div className="child1" onClick={() => filterbycat("laptops")}>
        Laptops
      </div>
      <div className="child1" onClick={() => filterbycat("tablets")}>
        Tablet
      </div>
      <div className="child1" onClick={() => filterbyprice("29999")}>
        {">="}29999
      </div>
      <div className="child1" onClick={() => filterbyprice("49999")}>
        {">="}49999
      </div>
      <div className="child1" onClick={() => filterbyprice("69999")}>
        {">="}69999
      </div>
      <div className="child1" onClick={() => filterbyprice("19999")}>
        {">="}19999
      </div>
    </div>
  </>
);
}

export default Navbar

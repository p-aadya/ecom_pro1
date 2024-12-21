import React from "react";
import { Link } from "react-router-dom";
import { items } from "./Data";

const Product = ({ items, cart, setcart }) => {
  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setcart([...cart, obj]);
  };

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          {items.map((product) => {
            return (
              <div key={product.id} className="col-4">
                <div
                  className="card"
                  style={{ width: "19rem", height: "34rem", margin: "16px" }}
                >
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.imgSrc}
                      className="card-img-top"
                      alt="..."
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <button className="btn btn-primary m-2">
                      {product.price}
                    </button>
                    <button
                      onClick={() =>
                        addToCart(
                          product.id,
                          product.price,
                          product.title,
                          product.description,
                          product.imgSrc
                        )
                      }
                      className="btn btn-warning"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;

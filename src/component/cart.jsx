import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="row">
      {cart.map((product) => {
        return (
          <>
            <div className="col-md-6">
              <div className="card mb-3" style={{ maxWidth: "560px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={product.imgSrc}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text"> {product.description}</p>
                      <button className="btn btn-primary">
                        {product.price}
                      </button>

                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6"></div>
          </>
        );
      })}
    </div>
  );
};

export default Cart;

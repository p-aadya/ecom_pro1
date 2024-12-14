import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import { items } from "./Data";

const Productdata = () => {
  const { id } = useParams();
  const [data, setdata] = useState({});
  const [relproduct, setrelproduct] = useState([]);
  useEffect(() => {
    const fi = items.filter((product) => product.id == id);
    setdata(fi[0]);
    const rp = items.filter((suman) => suman.category == data.category);
    setrelproduct(rp);
  }, [id, data.category]);

  return (
    <>

          <div className="card" style={{ width: "18rem", textAlign: "center" }}>
            <img src={data.imgSrc} style={{ width: "350px", height:"350px" }} />
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">{data.description}</p>
              <button className="btn btn-primary mx-3">{data.price}</button>
              <a href="#" className="btn btn-primary">
                Addto-cart
              </a>
            </div>
          </div>
      

      <h3 style={{ textAlign: "center" }}>Relavant Products</h3>
      <Product items={relproduct} />
    </>
  );
};

export default Productdata;

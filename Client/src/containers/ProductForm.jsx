import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PostProduct from "../axiosAPI/PostProduct";
import { setCategory } from "./redux/actions/product";

export default function ProductForm() {
  const { id } = useParams();
  const dispatcher = useDispatch();
  useEffect(() => {
    dispatcher(setCategory(null));
  }, [dispatcher]);

  const [inputs, setInputs] = useState({
    categoryId: parseInt(id),
    discontinued: false,
  });
  const handleSubmit = ($event) => {
    $event.preventDefault();
    if (inputs.productName && id)
      PostProduct(id, inputs).then(() =>
        toast.success("Product is created !!!")
      );
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.type === "number"
        ? parseFloat(event.target.value)
        : event.target.value;

    setInputs((values) => ({
      ...values,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-1" style={{ width: "100px" }}>
          <Link to={`/product/${id}`}>
            <img
              className="ui fluid image img-fluid"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Back_Arrow.svg/768px-Back_Arrow.svg.png"
              alt="back-arrow"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <form className="col-11 ui wide form container" onSubmit={handleSubmit}>
          <h4 className="ui dividing header">Product Posting</h4>
          <div className="field">
            <label>Product Information</label>
            <div className="two fields">
              <div className="sixteen wide field">
                <input
                  type="text"
                  name="productName"
                  placeholder="Product Name"
                  value={inputs.productName || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <input
                  type="number"
                  name="unitPrice"
                  placeholder="Product Price"
                  value={inputs.productPrice}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="field">
            <label>Image & Quantity</label>
            <div className="fields">
              <div className="twelve wide field">
                <input
                  type="text"
                  name="picture"
                  placeholder="picture"
                  value={inputs.picture || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="four wide field">
                <input
                  type="number"
                  name="quantityPerUnit"
                  placeholder="quantity"
                  value={inputs.quantity}
                  onChange={handleChange}
                />
              </div>
              <div className="four wide field">
                <input
                  type="number"
                  name="unitsInStock"
                  placeholder="units in stock"
                  value={inputs.unitsInStock}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="field">
            <div className="ui toggle checkbox">
              <input
                type="checkbox"
                name="discontinued"
                value={inputs.discontinued}
                checked={inputs.discontinued}
                onChange={handleChange}
              />
              <label>Discontinued</label>
            </div>
          </div>
          <button type="submit" className="ui submit button">
            Submit
          </button>
        </form>
        <ToastContainer position="top-center" />
      </div>
    </div>
  );
}

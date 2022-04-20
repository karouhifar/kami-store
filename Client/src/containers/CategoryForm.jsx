import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PostCategory from "../axiosAPI/PostCategory";
import { setCategory } from "./redux/actions/product";

export default function CategoryForm() {
  const [inputs, setInputs] = useState({});
  const handleSubmit = ($event) => {
    $event.preventDefault();
    if (inputs.categoryName)
      PostCategory(inputs).then(() => toast.success("Category is created !!!"));
  };

  const dispatcher = useDispatch();
  useEffect(() => {
    dispatcher(setCategory(null));
  }, [dispatcher]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({
      ...values,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-1" style={{ width: "100px" }}>
          <Link to={`/`}>
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
          <h4 className="ui dividing header">Category Posting</h4>
          <div className="field">
            <label>Category Information</label>
            <div className="two fields">
              <div className="sixteen wide field">
                <input
                  type="text"
                  name="categoryName"
                  placeholder="Category Name"
                  value={inputs.categoryName || ""}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="field">
            <label>Image</label>
            <div className="one field">
              <div className="field">
                <input
                  type="text"
                  name="picture"
                  placeholder="picture"
                  value={inputs.picture || ""}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="field">
            <label>Description</label>
            <textarea
              rows={2}
              name="description"
              placeholder="Category Description"
              value={inputs.description || ""}
              onChange={handleChange}
            />
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

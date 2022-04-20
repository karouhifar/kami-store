import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PutProduct from "../axiosAPI/PutCategory";
import { setCategory } from "./redux/actions/product";

export default function CategoryUpdate() {
  const categoryID = useSelector((state) => state.categoryID);
  const { id } = useParams();
  const dispatcher = useDispatch();
  useEffect(() => {
    dispatcher(setCategory(null));
  }, [dispatcher]);

  const [inputs, setInputs] = useState({
    categoryId: parseInt(id),
    Description: categoryID.description,
    Picture: categoryID.picture,
    CategoryName: categoryID.categoryName,
  });
  const handleSubmit = ($event) => {
    $event.preventDefault();
    if (inputs.CategoryName && id)
      PutProduct(id, inputs).then(() => toast.warn("Product is updated !!!"));
  };
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
          <h4 className="ui dividing header">Category Update</h4>
          <div className="field">
            <label>Category Information</label>
            <div className="fields">
              <div className="sixteen wide field">
                <input
                  type="text"
                  name="CategoryName"
                  placeholder="Category Name"
                  value={inputs.CategoryName}
                  onChange={handleChange}
                />
              </div>
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

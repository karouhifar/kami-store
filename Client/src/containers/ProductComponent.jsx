import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import DeleteCategory from "../axiosAPI/DeleteCAtegory";
import { getCategoryID, setProducts } from "./redux/actions/product";

export default function ProductComponent() {
  const dispatcher = useDispatch();
  const [DeleteCategoryID, setDeleteCategoryID] = useState(null);

  let products = useSelector((state) => state.allProducts.products);

  useEffect(() => {
    if (DeleteCategoryID) {
      DeleteCategory(DeleteCategoryID).then((data) => {
        toast.error(`${data.categoryName} category is deleted !!!`);
        setDeleteCategoryID(null);
        let filter = products.filter(
          (value) => value.categoryId !== data.categoryId
        );
        dispatcher(setProducts(filter));
      });
    }
  }, [DeleteCategoryID, dispatcher, products]);

  return (
    <React.Fragment>
      {products.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="row">
          {products.map((product) => (
            <div
              key={product.categoryId}
              className="col-12 col-sm-4 col-lg-3 mb-3"
            >
              <div className="ui link cards h-100">
                <div className="card h-100 justify-content-between">
                  <Link
                    className="text-decoration-none"
                    to={`/product/${product.categoryId}`}
                  >
                    <div className="image">
                      <img src={product.picture} alt={product.categoryName} />
                    </div>
                    <div className="card-body">
                      <div className="content d-flex flex-column h-100 justify-content-evenly">
                        <div className="header card-title">
                          {product.categoryName}
                        </div>
                        <div className="meta card-subtitle">
                          {product.description}
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <div
                      onClick={() => {
                        setDeleteCategoryID(product.categoryId);
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        color="black"
                        size="2x"
                        border
                        fixedWidth
                      />
                    </div>
                    <Link to={`/category/${product.categoryId}/CategoryUpdate`}>
                      <div
                        onClick={() => {
                          dispatcher(getCategoryID(product));
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faEdit}
                          color="black"
                          size="2x"
                          border
                          fixedWidth
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <ToastContainer position="top-center" />
        </div>
      )}
    </React.Fragment>
  );
}

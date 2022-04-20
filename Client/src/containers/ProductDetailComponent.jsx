import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import GetProduct from "../axiosAPI/GetProduct";
import {
  selectedProducts,
  removeSelectedProducts,
  getCategoryID,
} from "./redux/actions/product";

export default function ProductDetailComponent() {
  const product = useSelector((state) => state.OneProduct);
  const { OneProduct } = product;
  const dispatcher = useDispatch();
  const id = useParams();
  useEffect(() => {
    const controller = new AbortController();
    if (id) {
      GetProduct(id).then((value) => dispatcher(selectedProducts(value)));
      dispatcher(getCategoryID(id));
    }
    return () => {
      dispatcher(getCategoryID(null));
      dispatcher(removeSelectedProducts());
      controller.abort();
    };
  }, [dispatcher, id]);

  return (
    <>
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="ui grid container">
          <div className="doubling two column row">
            {OneProduct.map((product) => (
              <div key={product.productID} className="column mt-3">
                <div className="ui segment column">
                  <div className="ui two column stackable center aligned grid">
                    <div className="column lp">
                      <img
                        className="ui fluid image img-fluid"
                        src={product.picture}
                        alt={product.productName}
                        height={100}
                        width={100}
                      />
                    </div>
                    <div className="ui vertical divider"></div>
                    <div className="column rp">
                      <h1>{product.productName}</h1>
                      <h2>
                        <p className="ui teal tag label">
                          ${product.unitPrice}
                        </p>
                      </h2>
                      <h3 className="ui brown block header">
                        In stock: {product.unitsInStock} items
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

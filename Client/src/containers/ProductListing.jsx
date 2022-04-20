import React, { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import GetAllCategories from "../axiosAPI/GetAllProducts";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedProducts,
  setProducts,
  setCategory,
} from "./redux/actions/product";

export default function ProductListing() {
  const dispatcher = useDispatch();
  const { filterProduct } = useSelector((state) => state.filterProduct);

  useEffect(() => {
    GetAllCategories().then((value) => {
      dispatcher(setProducts(value));
      dispatcher(setCategory(value));
      if (filterProduct) {
        dispatcher(removeSelectedProducts());
        let data;
        data = value.filter(
          (x) => x.categoryName.toLowerCase() === filterProduct.toLowerCase()
        );
        dispatcher(setProducts(data));
      }
    });
  }, [dispatcher, filterProduct]);

  return (
    <div className="container">
      <ProductComponent />
    </div>
  );
}

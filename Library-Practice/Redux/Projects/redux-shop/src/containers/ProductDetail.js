import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.selectedProduct);
  console.log(product);
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.error(err));

    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    fetchProductDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => {
      dispatch(removeSelectedProduct())
    }
  }, []);

  return (
    <div className="selected-product">
      <div className="image">
        <img src={product.image} alt={product} />
      </div>
      <div className='details'>
        <p className="category">{product.category}</p>
        <p className="title">{product.title}</p>
        <p className="price">{product.price}</p>
        <p className="description">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;

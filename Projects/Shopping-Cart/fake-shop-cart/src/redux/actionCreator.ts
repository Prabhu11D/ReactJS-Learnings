import {
  ADD_PRODUCT,
  IS_CART_OPEN,
  REMOVE_PRODUCT,
  SET_PRODUCTS,
  SET_TOTAL_PRICE,
} from './actions';
import { AddProduct, product, SetProduct } from './reducer';

export const setProducts = (data: product[]): SetProduct => {
  return {
    type: SET_PRODUCTS,
    payload: data,
  };
};

export const addToCart = (item: product): AddProduct => {
  return {
    type: ADD_PRODUCT,
    payload: item,
  };
};

export const removeFromCart = (item: product) => {
  return {
    type: REMOVE_PRODUCT,
    payload: item,
  };
};

export const setCartOpen = (value: boolean) => {
  return {
    type: IS_CART_OPEN,
    payload: value,
  };
};

export const setTotalPrice = (price: number) => {
  return{
    type: SET_TOTAL_PRICE,
    payload: price
  }
}

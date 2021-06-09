import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import cartIcon from '../img/cart.png';
import { setCartOpen } from '../redux/actionCreator';

function CartIcon({ totalItems, setCartOpen }: Props) {
  return (
    <div className="cartIcon" onClick={() => setCartOpen(true)}>
      <img src={cartIcon} alt="Icon" />
      <span>{totalItems}</span>
    </div>
  );
}

interface Props {
  totalItems: number;
  setCartOpen: (value: boolean) => void;
}

const mapDispatch = (dispatch: Dispatch) => {
  return {
    setCartOpen: (value: boolean) => dispatch(setCartOpen(value)),
  };
};

export default connect(null, mapDispatch)(CartIcon);

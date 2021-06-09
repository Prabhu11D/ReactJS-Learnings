import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addToCart, removeFromCart } from '../redux/actionCreator';
import { product } from '../redux/reducer';

class CartItem extends Component<Props> {
  render() {
    const { item, addToCart, removeFromCart } = this.props;
    return (
      <div className="cart-item-solo">
        <h3>{item.title}</h3>
        <div>
          <div>
            <div className='top'>
              <p>Price : {item.price}</p>
              <p>Total : {(item.amount * item.price).toFixed(2)}</p>
            </div>
            <div className='bottom'>
              <button
              onClick={() => removeFromCart(item)}
              > - </button>
              <p>{item.amount}</p>
              <button
              onClick={() => addToCart(item)}
              > + </button>
            </div>
          </div>
          <img src={item.image} alt={item.title} />
        </div>
      </div>
    );
  }
}

interface Props {
  item: product;
  addToCart: (item: product) => void;
  removeFromCart: (item: product) => void;
}

const mapDispatch = (dispatch: Dispatch) => {
  return{
    addToCart: (item: product) => dispatch(addToCart(item)),
    removeFromCart: (item: product) => dispatch(removeFromCart(item))
  }
}

export default connect(null, mapDispatch)(CartItem);

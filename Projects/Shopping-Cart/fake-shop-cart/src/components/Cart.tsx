import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setCartOpen, setTotalPrice } from '../redux/actionCreator';
import { product } from '../redux/reducer';
import { rootState } from '../redux/store';
import '../styles/Cart.css';
import CartItem from './CartItem';

class Cart extends Component<Props> {
  cartRef = React.createRef<HTMLDivElement>();

  closeCart = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === this.cartRef.current) {
      this.props.setCartOpen(false);
    }
  };

  totalPrice = () => {
    return this.props.cartItems
      .reduce((sum, item) => {
        return item.amount * item.price + sum;
      }, 0)
      .toFixed(2);
  };

  componentDidMount() {
    this.props.setTotalPrice(+this.totalPrice());
  }

  componentDidUpdate() {
    this.props.setTotalPrice(+this.totalPrice());
  }

  render() {
    const { cartItems, totalPrice } = this.props;
    return ReactDOM.createPortal(
      <div
        onClick={this.closeCart}
        className="cart-container"
        ref={this.cartRef}
      >
        <div className="cart-control">
          <h1>Cart Items</h1>

          {cartItems[0] !== undefined ? (
            <>
              <div>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
              <h2>Total Price : {totalPrice}</h2>
            </>
          ) : (
            <p>No Items Selected</p>
          )}
        </div>
      </div>,
      document.getElementById('cart') as HTMLElement
    );
  }
}

interface Props {
  cartItems: product[];
  totalPrice: number;
  setCartOpen: (value: boolean) => void;
  setTotalPrice: (price: number) => void;
}

const mapState = (state: rootState) => {
  return {
    cartItems: state.reducer.cartItems,
    totalPrice: state.reducer.totalPrice,
  };
};

const mapDispatch = (dispatch: Dispatch) => {
  return {
    setCartOpen: (value: boolean) => dispatch(setCartOpen(value)),
    setTotalPrice: (price: number) => dispatch(setTotalPrice(price)),
  };
};

export default connect(mapState, mapDispatch)(Cart);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Items from './components/Items';
import { setProducts } from './redux/actionCreator';
import { product } from './redux/reducer';
import { rootState } from './redux/store';
import './styles/App.css';
import CartIcon from './components/CartIcon';
import Cart from './components/Cart';

class App extends Component<Props> {
  componentDidMount() {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = (await res.json()).map((item: any) => {
        return {
          ...item,
          amount: 0,
        };
      });

      this.props.setProducts(data);
    };

    fetchProducts();
  }
  render() {
    const { products, totalItems, isCartOpen } = this.props;

    if (!products) {
      return <h1>Redux Shopping Cart</h1>;
    }
    return (
      <div>
        <h1> Redux Shopping Cart</h1>
        <CartIcon totalItems={totalItems} />
        <div className="items">
          {products.map((product, index) => (
            <Items key={index} item={product} />
          ))}
        </div>
        {isCartOpen ? <Cart /> : null}
      </div>
    );
  }
}

interface Props {
  setProducts: (data: product[]) => void;
  products: product[];
  totalItems: number;
  isCartOpen: boolean;
}

const mapState = (state: rootState) => {
  return {
    products: state.reducer.productData,
    totalItems: state.reducer.totalItems,
    isCartOpen: state.reducer.isCartOpen,
  };
};

const mapDispatch = (dispatch: any) => {
  return {
    setProducts: (data: product[]) => dispatch(setProducts(data)),
  };
};

export default connect(mapState, mapDispatch)(App);

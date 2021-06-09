import {
  ADD_PRODUCT,
  IS_CART_OPEN,
  REMOVE_PRODUCT,
  SET_PRODUCTS,
  SET_TOTAL_PRICE,
} from './actions';

export interface product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  amount: number;
}

export interface shop {
  productData: product[];
  cartItems: product[];
  totalItems: number;
  isCartOpen: boolean;
  totalPrice: number;
}

const initialState: shop = {
  productData: [],
  cartItems: [],
  totalItems: 0,
  isCartOpen: false,
  totalPrice: 0,
};

export interface SetProduct {
  type: 'SET_PRODUCTS';
  payload: product[];
}

export interface SetTotalPrice {
  type: 'SET_TOTAL_PRICE';
  payload: number;
}

export interface AddProduct {
  type: 'ADD_PRODUCT';
  payload: product;
}

export interface removeProduct {
  type: 'REMOVE_PRODUCT';
  payload: product;
}

export interface ToggleCart {
  type: 'IS_CART_OPEN';
  payload: boolean;
}

export type Action = SetProduct | SetTotalPrice  | AddProduct | removeProduct | ToggleCart;

const reducer = (state: shop = initialState, action: Action): shop => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        productData: action.payload,
      };

    case IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: action.payload,
      };

    case SET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload,
      };

    case ADD_PRODUCT:
      const isAlreadyExist = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (isAlreadyExist) {
        const amountIncreased = state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              amount: item.amount + 1,
            };
          }
          return item;
        });

        return {
          ...state,
          cartItems: [...amountIncreased],
          totalItems: state.totalItems + 1,
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, amount: 1 }],
        totalItems: state.totalItems + 1,
      };

    case REMOVE_PRODUCT:
      if (action.payload.amount === 1) {
        const newItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          totalItems: state.totalItems - 1,
          cartItems: [...newItems],
        };
      }

      const newItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
      return {
        ...state,
        totalItems: state.totalItems - 1,
        cartItems: [...newItems],
      };
    default:
      return state;
  }
};

export default reducer;

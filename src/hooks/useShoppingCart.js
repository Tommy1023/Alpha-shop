import React from 'react';
import { type Action } from './actions';
import { State, Transport } from '../components/types';
import data from '../components/data.json';

const initialState: State = {
  lineItems: data,
  totalAmount: 0,
  transport: {
    id: '',
    trans: '',
    price: '',
    workDay: '',
  },
};

const calcTotalAmount = (
  lineItems: LineItems[],
  transport: Transport,
): State => {
  const result = lineItems.reduce((total, currentItem) => {
    return total + currentItem.price * currentItem.quantity;
  }, 0);
  if (transport.price === '') {
    return result;
  }
  return result + transport.price;
};

initialState.totalAmount = calcTotalAmount(
  initialState.lineItems,
  initialState.transport,
);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'UPDATE_QUANTITY': {
      const { id, num } = action.payload;
      const { lineItems, transport } = state;
      const newlineItems = lineItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + num,
          };
        }
        return item;
      });
      return {
        ...state,
        lineItems: newlineItems,
        totalAmount: calcTotalAmount(newlineItems, transport),
      };
    }
    case 'REMOVE_ITEM': {
      const { payload } = action;
      const { lineItems, transport } = state;
      const newLineItems = lineItems.filter((item) => item.id !== payload);
      return {
        ...state,
        lineItems: newLineItems,
        totalAmount: calcTotalAmount(newLineItems, transport),
      };
    }
    case 'CHANGE_TRANS': {
      const selectTrans = action.payload;
      return {
        ...state,
        transport: selectTrans,
        totalAmount: calcTotalAmount(state.lineItems, selectTrans),
      };
    }
    default:
      return state;
  }
};

export default function useShoppingCart() {
  return React.useReducer(reducer, initialState);
}

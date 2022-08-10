import React from 'react';

export const CartContext = React.createContext(null);

type CartContextType = {
  state: State,
  dispatch: (type: String) => void,
};

export default function useCartContext(): CartContextType {
  const cartContext = React.useContext(CartContext);
  if (cartContext === null) {
    throw new Error('useCartContext must be used inside a ContextProvider.');
  }
  return cartContext;
}

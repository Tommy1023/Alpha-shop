export type Action =
  | { type: 'UPDATE_QUANTITY', payload: { id: Number, num: number } }
  | { type: 'REMOVE_ITEM', payload: Number }
  | { type: 'CHANGE_TRANS', payload: object };

export const actionUpdateQuantity = (id: Number, num: Number) => {
  return {
    type: 'UPDATE_QUANTITY',
    payload: { id, num },
  };
};

export const actionRemoveCartItem = (id: Number) => {
  return {
    type: 'REMOVE_ITEM',
    payload: id,
  };
};

export const actionChangTransport = (selectTrans: Object) => {
  return {
    type: 'CHANGE_TRANS',
    payload: selectTrans,
  };
};

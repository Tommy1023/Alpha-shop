import { memo, useCallback } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { IoTrashOutline } from 'react-icons/io5';
import cx from 'classname';
import style from './cartStyle.module.scss';
import useCartContext from '../../context/CartContext';
import type { Product } from '../types';
import {
  actionUpdateQuantity,
  actionRemoveCartItem,
} from '../../hooks/actions';

type CartItemProps = Product;

const CartItem: React.FC<CartItemProps> = (props) => {
  const { id, img, name, quantity, price } = props;
  const { dispatch } = useCartContext();

  const atUpdateQuantity = useCallback(
    (ItemId: String, num: Number) => {
      dispatch(actionUpdateQuantity(ItemId, num));
    },
    [dispatch],
  );
  const atRemoveCartItem = useCallback(
    (removeId: Number) => {
      dispatch(actionRemoveCartItem(removeId));
    },
    [dispatch],
  );

  return (
    <div className={cx(style.product, 'row', 'mt-2')}>
      {/* product img */}
      <div className="col-4 p-0">
        <img src={img} alt={name} />
      </div>
      {/* card body */}
      <div className="col-8 p-0 d-flex flex-column">
        <div className="d-flex justify-content-between p-2">
          {/* product name */}
          <h4 className="pt-2">{name}</h4>
          {/* price & subtotal */}
          <div className="p-2">
            <div className="mb-2">單價:$ {price}</div>
            <div>小計:$ {price * quantity}</div>
          </div>
        </div>
        <div className="d-flex justify-content-between my-auto px-2">
          {/* amount btn */}
          <div className="d-flex align-items-center">
            <button
              disabled={quantity === 1}
              className={cx(style.productBtn)}
              onClick={() => {
                atUpdateQuantity(id, -1);
              }}
            >
              <AiOutlineMinus />
            </button>
            <span
              className={cx(
                style.amount,
                'd-flex',
                'justify-content-center',
                'mx-xl-3',
              )}
            >
              {quantity}
            </span>
            <button
              className={cx(style.productBtn)}
              onClick={() => {
                atUpdateQuantity(id, 1);
              }}
            >
              <AiOutlinePlus />
            </button>
          </div>
          {/* remove btn */}
          <button
            className={cx(style.productBtn)}
            onClick={() => {
              atRemoveCartItem(id);
            }}
          >
            <IoTrashOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(CartItem);

import { memo } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { IoTrashOutline } from 'react-icons/io5';
import cx from 'classname';
import style from './style.module.scss';

type CartProps = {
  lineItems: Array,
  setLineItems: (Object) => void,
};

const Cart: React.FC<CartProps> = (props) => {
  const { lineItems, setLineItems } = props; //eslint-disable-line
  return (
    <div>
      {/* tittle */}
      <h4 className="cart-tittle mb-4">購物籃</h4>
      {/* product cards */}
      <div className="cart-body container mb-auto pb-3">
        {/* TODO for loop render */}
        {lineItems.map((item) => {
          return (
            <div className={cx(style.product, 'row', 'mt-2')} key={item.id}>
              <div className="col-4 p-0">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="col-6 d-flex flex-column">
                {/* product name */}
                <h4 className="pt-2">{item.name}</h4>
                {/* amount item */}
                <div
                  className={cx('my-auto', 'd-flex', 'justify-content-between')}
                >
                  <div className="d-flex align-items-center">
                    <button className={cx(style.productBtn)}>
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
                      {item.quantity}
                    </span>
                    <button className={cx(style.productBtn)}>
                      <AiOutlinePlus />
                    </button>
                  </div>
                  <button className={cx(style.productBtn)}>
                    <IoTrashOutline />
                  </button>
                </div>
              </div>
              <div className="col-2 d-flex justify-content-end pt-3 pe-3">
                $ {item.price}
              </div>
            </div>
          );
        })}
      </div>
      <hr />
      {/* delivery fee content */}
      <div className="d-flex justify-content-between">
        <span>運費</span>
        <span>免費</span>
      </div>
      <hr />
      {/* subtotal */}
      <div className="d-flex justify-content-between mb-3">
        <span>小計</span>
        <span>$5,298</span>
      </div>
    </div>
  );
};
export default memo(Cart);

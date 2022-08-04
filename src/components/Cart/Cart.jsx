import { memo } from 'react';
import useCartContext from '../CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { step, lineItems, totalAmount, transport } = useCartContext();
  const transportMethod = (price: Number) => {
    console.log('price:', price);
    if (price === undefined) {
      return <span>尚未選擇運送方式</span>;
    }
    if (price === 0) {
      return <span>免費</span>;
    }
    return <span>{price}</span>;
  };
  return (
    <div>
      {/* tittle */}
      <div className="d-flex align-items-end justify-content-between mb-3 mx-3">
        <h4 className="m-0 me-2">購物籃</h4>
        <h6 className="m-0">
          步驟：{step === 1 && '寄送地址'}
          {step === 2 && '運送方式'}
          {step === 3 && '付款資訊'}
        </h6>
      </div>
      {/* product cards */}
      <div className="cart-body container mb-auto pb-3">
        {lineItems.map((item) => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
            />
          );
        })}
      </div>
      <hr />
      {/* delivery fee content */}
      <div className="d-flex justify-content-between">
        <span>運費</span>
        {transportMethod(transport.price)}
      </div>
      <hr />
      {/* subtotal */}
      <div className="d-flex justify-content-between mb-3">
        <span>商品總額</span>
        <span>
          {totalAmount === 0 ? '尚未選購任何商品' : `$${totalAmount}`}
        </span>
      </div>
    </div>
  );
};
export default memo(Cart);

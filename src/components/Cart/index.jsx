import './cart.css';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { IoTrashOutline } from 'react-icons/io5';

const Cart = () => {
  return (
    <>
      {/* tittle */}
      <h4 className="cart-tittle mb-4">購物籃</h4>
      {/* product cards */}
      <div className="cart-body container mb-auto pb-3">
        {/* TODO for loop render */}
        <div className="product row mt-2">
          <div className="product-img col-4 p-0">
            <img
              src="https://loremflickr.com/240/240/dog?lock=1"
              alt="product1"
            />
          </div>
          <div className="product-info col-6 d-flex flex-column">
            {/* product name */}
            <h4 className="product-name p-0">Product1</h4>
            {/* amount item */}
            <div className="product-amount my-auto d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <button className="minus">
                  <AiOutlineMinus />
                </button>
                <span className="amount d-flex justify-content-center mx-xl-3 ">
                  1
                </span>
                <button className="plus">
                  <AiOutlinePlus />
                </button>
              </div>
              <button className="remove">
                <IoTrashOutline />
              </button>
            </div>
          </div>
          <div className="product-price col-2 d-flex justify-content-end">
            $3,999
          </div>
        </div>
        <div className="product row mt-2">
          <div className="product-img col-4 p-0">
            <img
              src="https://loremflickr.com/240/240?random=2"
              alt="product2"
            />
          </div>
          <div className="product-info col-6 d-flex flex-column">
            {/* product name */}
            <h4 className="product-name p-0">Product2</h4>
            {/* amount item */}
            <div className="product-amount my-auto d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <button className="minus">
                  <AiOutlineMinus />
                </button>
                <span className="amount d-flex justify-content-center mx-xl-3 ">
                  1
                </span>
                <button className="plus">
                  <AiOutlinePlus />
                </button>
              </div>
              <button className="remove">
                <IoTrashOutline />
              </button>
            </div>
          </div>
          <div className="product-price col-2 d-flex justify-content-end">
            $2,999
          </div>
        </div>
      </div>
      <hr />
      {/* delivery fee content */}
      <div className="delivery-fee d-flex justify-content-between">
        <span>運費</span>
        <span>免費</span>
      </div>
      <hr />
      {/* subtotal */}
      <div className="subtotal d-flex justify-content-between mb-3">
        <span>小計</span>
        <span>$5,298</span>
      </div>
    </>
  );
};
export default Cart;

import './cart.css';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { IoTrashOutline } from 'react-icons/io5';

const Cart = () => {
  return (
    <div className="cart my-3 p-5">
      <h4 className="cart-tittle mb-5">購物籃</h4>
      <div className="cart-body">
        <div className="product row mb-5">
          <div className="product-img col-4">
            <img
              src="https://loremflickr.com/240/240/dog?lock=1"
              alt="product1"
            />
          </div>
          <div className="product-info col-6">
            <h4 className="product-name">Product1</h4>
            <div className="product-amount mt-5 d-flex  align-items-center">
              <button className="minus me-4">
                <AiOutlineMinus />
              </button>
              <span className="amount d-flex justify-content-center">1</span>
              <button className="plus ms-4">
                <AiOutlinePlus />
              </button>
              <button className="remove ms-5">
                <IoTrashOutline />
              </button>
            </div>
          </div>
          <div className="product-price col-2">$3,999</div>
        </div>
        <div className="product row mb-5">
          <div className="product-img col-4">
            <img
              src="https://loremflickr.com/240/240?random=2"
              alt="product1"
            />
          </div>
          <div className="product-info col-6">
            <h4 className="product-name">Product1</h4>
            <div className="product-amount mt-5 d-flex  align-items-center">
              <button className="minus me-4">
                <AiOutlineMinus />
              </button>
              <span className="amount d-flex justify-content-center">1</span>
              <button className="plus ms-4">
                <AiOutlinePlus />
              </button>
              <button className="remove ms-5">
                <IoTrashOutline />
              </button>
            </div>
          </div>
          <div className="product-price col-2">$3,999</div>
        </div>
      </div>
      <hr />
      <div className="delivery-fee d-flex justify-content-between">
        <span>運費</span>
        <span>免費</span>
      </div>
      <hr />
      <div className="count d-flex justify-content-between">
        <span>小計</span>
        <span>$5,298</span>
      </div>
    </div>
  );
};
export default Cart;

import 'bootstrap/dist/css/bootstrap.min.css';
import { useCallback, useState, useMemo, useEffect } from 'react';
import style from './app.module.scss';
import Header from './Header/Header';
import StepProgress from './StepProgress/StepProgress';
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';
import Step3 from './Step3/Step3';
import Cart from './Cart/Cart';
import ProgressControl from './ProgressControl/ProgressControl';
import Footer from './Footer/Footer';

import data from './data.json';
import { CartContext } from './CartContext';

const App = () => {
  const [step, setStep] = useState(1);
  /**
   * @type {[LineItems[], Function]}
   */
  const [lineItems, setLineItems] = useState(data);
  const [totalAmount, setTotalAmount] = useState(0);
  const [transport, setTransport] = useState('');

  useEffect(() => {
    const calcTotalAmount = lineItems.reduce((total, currentItem) => {
      return total + currentItem.price * currentItem.quantity;
    }, 0);
    if (transport === '') {
      setTotalAmount(calcTotalAmount);
    } else {
      setTotalAmount(calcTotalAmount + transport.price);
    }
  }, [lineItems, transport]);

  const atStepChange = useCallback((count: Number) => {
    setStep((prev) => prev + count);
  }, []);

  const atUpdateQuantity = useCallback((id: String, add: Number) => {
    setLineItems((prev) => {
      return prev.map((item: Product) => {
        if (item.id === id) {
          return {
            id: item.id,
            name: item.name,
            img: item.img,
            price: item.price,
            quantity: item.quantity + add,
          };
        }
        return item;
      });
    });
  }, []);

  const atRemoveCartItem = useCallback((id: Number) => {
    setLineItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const atSelectTransport = useCallback((selectTransport) => {
    setTransport(selectTransport);
  }, []);

  const providerValue = useMemo(() => {
    return {
      step,
      lineItems,
      setLineItems,
      atUpdateQuantity,
      atRemoveCartItem,
      totalAmount,
      transport,
      atSelectTransport,
    };
  }, [
    step,
    lineItems,
    setLineItems,
    atUpdateQuantity,
    atRemoveCartItem,
    totalAmount,
    transport,
    atSelectTransport,
  ]);

  return (
    <CartContext.Provider value={providerValue}>
      <div>
        {/* Header */}
        <header>
          <div className="container my-2">
            <div className="row d-flex align-items-center p-2">
              <Header />
            </div>
          </div>
        </header>

        {/* StepProgress */}
        <section className="my-3">
          <div className="container">
            <div className="row pb-2">
              <StepProgress step={step} />
            </div>
          </div>
        </section>

        {/* main */}
        <div className="container mb-3">
          <div className="row">
            <div className="col-7 d-flex align-items-end flex-column">
              {/* step content */}
              <section className="container mb-2 p-2">
                {step === 1 && <Step1 />}
                {step === 2 && <Step2 />}
                {step === 3 && <Step3 />}
              </section>
              {/* ProgressControl */}
              <section className="container mt-auto">
                <ProgressControl step={step} onClickStepBtn={atStepChange} />
              </section>
            </div>
            {/* Cart */}
            <div className="container col-5 d-flex flex-column">
              <Cart />
            </div>
          </div>
        </div>

        {/* footer */}
        <footer className={style.footer}>
          <div className="container">
            <Footer />
          </div>
        </footer>
      </div>
    </CartContext.Provider>
  );
};

export default App;

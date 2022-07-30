import 'bootstrap/dist/css/bootstrap.min.css';
import { useCallback, useState } from 'react';
import style from './app.module.scss';
import Header from './Header';
import StepProgress from './StepProgress';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Cart from './Cart';
import ProgressControl from './ProgressControl';
import Footer from './Footer';

import data from '../static/data.json';

const App = () => {
  const [step, setStep] = useState(1);
  const [lineItems, setLineItems] = useState(data);
  let showStep;
  let nextBtn = '下一步';
  let prevBtn = false;

  switch (step) {
    case 1:
      showStep = <Step1 />;
      prevBtn = true;
      break;
    case 2:
      showStep = <Step2 />;
      break;
    case 3:
      showStep = <Step3 />;
      nextBtn = '確認下單';
      break;
    default:
      console.log(`Out of ${step}`);
  }

  type atStepChangeProp = {
    count: number,
  };

  const atStepChange: React.FC<atStepChangeProp> = useCallback(
    (count) => {
      if (step < 2 && count === -1) return;
      if (step > 2 && count === 1) return;
      setStep((prev) => prev + count);
    },
    [step],
  );

  return (
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
            <section className="container mb-2 p-2">{showStep}</section>
            {/* ProgressControl */}
            <section className="container mt-auto">
              <ProgressControl
                prevBtn={prevBtn}
                nextBtn={nextBtn}
                onClickStepBtn={atStepChange}
              />
            </section>
          </div>
          {/* Cart */}
          <div className="container col-5 d-flex flex-column">
            <Cart lineItems={lineItems} onChangeItem={setLineItems} />
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
  );
};

export default App;

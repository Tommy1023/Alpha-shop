import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import './ProgressControl/style.css';
import { useState } from 'react';
import Header from './Header';
import StepProgress from './StepProgress';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Cart from './Cart';
import ProgressControl from './ProgressControl';
import Footer from './Footer';

const App = () => {
  const [step, setStep] = useState(1);
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

  type stepChangeProp = {
    count: number,
  };

  const stepChange: React.FC<stepChangeProp> = (count) => {
    if (step < 2 && count === -1) return;
    if (step > 2 && count === 1) return;
    setStep((prev) => prev + count);
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container my-2">
          <div className="row d-flex align-items-center p-2">
            <Header />
          </div>
        </div>
      </header>

      {/* StepProgress */}
      <section className="step-progress my-3">
        <div className="container">
          <div className="row pb-2">
            <StepProgress step={step} />
          </div>
        </div>
      </section>

      {/* main */}
      <div className="main container mb-3">
        <div className="row">
          <div className="col-7 d-flex align-items-end flex-column">
            {/* step content */}
            <section id="step-content" className="container mb-2 p-2">
              {showStep}
            </section>
            {/* ProgressControl */}
            <section id="progress-control" className="container mt-auto">
              <ProgressControl
                prevBtn={prevBtn}
                nextBtn={nextBtn}
                onClickStepBtn={stepChange}
              />
            </section>
          </div>
          {/* Cart */}
          <div id="cart" className="container col-5 d-flex flex-column">
            <Cart />
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="footer">
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default App;

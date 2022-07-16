import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import Header from './Header';
import StepProgress from './StepProgress';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Cart from './Cart';
import ProgressControl from './ProgressControl';
import Footer from './Footer';

const App = () => (
  <div className="App">
    <header className="header">
      <div className="container my-2">
        <div className="row d-flex align-items-center p-2">
          <Header />
        </div>
      </div>
    </header>
    <section className="step-progress">
      <div className="container mb-2">
        <div className="row">
          <StepProgress />
        </div>
      </div>
    </section>
    <div className="main mb-3">
      <section id="step-progress" className="container mb-2 p-2">
        <Step1 />
        <Step2 />
        <Step3 />
      </section>
      <section id="cart" className="container">
        <Cart />
      </section>
      <section id="progress-control" className="container">
        <ProgressControl />
      </section>
    </div>
    <footer className="footer">
      <div className="container">
        <Footer />
      </div>
    </footer>
  </div>
);

export default App;

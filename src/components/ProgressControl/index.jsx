import './style.css';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

const ProgressControl = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <a
            className="btn left d-flex justify-content-center align-items-center"
            href="./previous"
          >
            <BsArrowLeft />
            <span className="ms-2">上一步</span>
          </a>
        </div>
        <div className="col-4 offset-4 d-flex flex-row-reverse">
          <a
            className="btn right d-flex justify-content-center align-items-center"
            href="./next"
          >
            <span className="me-2">下一步</span>
            <BsArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProgressControl;

import './style.css';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

const ProgressControl = () => {
  return (
    <div className="row">
      <button className="btn prev col-2">
        <BsArrowLeft />
        <span className="ms-2">上一步</span>
      </button>
      <button className="btn next col-2 offset-8">
        <span className="me-2">下一步</span>
        <BsArrowRight />
      </button>
    </div>
  );
};
export default ProgressControl;

import './style.css';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

type ProgressControlProp = {
  prevBtn: boolean,
  nextBtn: string,
  clickStep: Function,
};

const ProgressControl: React.FC<ProgressControlProp> = (props) => {
  const { prevBtn, nextBtn, clickStep } = props;
  return (
    <div className="row">
      <button
        className="btn prev col-xl-3 col-md-4"
        data-btnOff={prevBtn}
        onClick={() => {
          clickStep(-1);
        }}
      >
        <BsArrowLeft />
        <span className="ms-2">上一步</span>
      </button>
      <button
        className="btn next col-xl-3 offset-xl-6  col-md-4 offset-md-4"
        onClick={() => {
          clickStep(1);
        }}
      >
        <span className="me-2">{nextBtn}</span>
        <BsArrowRight />
      </button>
    </div>
  );
};
export default ProgressControl;

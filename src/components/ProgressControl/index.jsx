import './style.css';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

type ProgressControlProp = {
  prevBtn: boolean,
  nextBtn: string,
  onClickStepBtn: (value: Number) => viod, // 用箭頭函式來定義函式型別(viod:不回傳)
};

const ProgressControl: React.FC<ProgressControlProp> = (props) => {
  const { prevBtn, nextBtn, onClickStepBtn } = props;

  return (
    <div className="row">
      <button
        className="btn prev col-xl-3 col-md-4"
        data-btn-off={prevBtn}
        onClick={() => {
          onClickStepBtn(-1);
        }}
      >
        <BsArrowLeft />
        <span className="ms-2">上一步</span>
      </button>
      <button
        className="btn next col-xl-3 offset-xl-6  col-md-4 offset-md-4"
        onClick={() => {
          onClickStepBtn(1);
        }}
      >
        <span className="me-2">{nextBtn}</span>
        <BsArrowRight />
      </button>
    </div>
  );
};
export default ProgressControl;

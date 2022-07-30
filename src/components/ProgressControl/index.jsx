import { memo } from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import cx from 'classname';
import style from './style.module.scss';

type ProgressControlProp = {
  prevBtn: boolean,
  nextBtn: string,
  onClickStepBtn: (value: Number) => viod, // 用箭頭函式來定義函式型別(viod:不回傳)
};

const ProgressControl: React.FC<ProgressControlProp> = (props) => {
  const { prevBtn, nextBtn, onClickStepBtn } = props;

  return (
    <div className={cx(style.stepBtn, 'row')}>
      <button
        className={cx(style.prev, 'btn', 'col-xl-3', 'col-md-4', {
          'btn-off': prevBtn,
        })}
        onClick={() => {
          onClickStepBtn(-1);
        }}
      >
        <BsArrowLeft />
        <span className="ms-2">上一步</span>
      </button>
      <button
        className={cx(
          style.next,
          'btn',
          'col-xl-3',
          'offset-xl-6',
          'col-md-4',
          'offset-md-4',
        )}
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
export default memo(ProgressControl);

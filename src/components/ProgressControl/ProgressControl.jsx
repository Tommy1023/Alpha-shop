import { memo } from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import cx from 'classname';
import style from './progressControlStyle.module.scss';

type ProgressControlProp = {
  step: Number,
  onClickStepBtn: (value: Number) => void,
};

const ProgressControl: React.FC<ProgressControlProp> = (props) => {
  const { step, onClickStepBtn } = props;

  return (
    <div className={cx(style.stepBtn, 'row')}>
      <button
        className={cx(style.prev, 'btn', 'col-xl-3', 'col-md-4', {
          'btn-off': step === 1,
        })}
        onClick={() => {
          onClickStepBtn(-1);
        }}
      >
        <BsArrowLeft />
        <span className="ms-2">上一步</span>
      </button>
      {step === 3 ? (
        <button
          type="submit"
          className={cx(
            style.next,
            'btn',
            'col-xl-3',
            'offset-xl-6',
            'col-md-4',
            'offset-md-4',
          )}
        >
          <span className="me-2">確認下單</span>
          <BsArrowRight />
        </button>
      ) : (
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
          <span className="me-2">下一步</span>
          <BsArrowRight />
        </button>
      )}
    </div>
  );
};
export default memo(ProgressControl);

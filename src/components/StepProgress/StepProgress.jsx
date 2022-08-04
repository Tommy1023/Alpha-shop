import { memo } from 'react';
import { RiNumber1, RiNumber2, RiNumber3 } from 'react-icons/ri';
import { AiFillCheckCircle } from 'react-icons/ai';
import cx from 'classname';
import style from './StepProgressStyle.module.scss';

// flow.js 定義props型別
type StepProps = {
  step: Number,
};

const StepProgress: React.FC<StepProps> = (props) => {
  const { step } = props;
  return (
    <div>
      {/* tittle */}
      <h2 className="my-5">結帳</h2>
      {/* Wizard-bar */}
      <div className={cx(style.wizard, 'd-flex', 'justify-content-start')}>
        {/* step1 */}
        <div
          className={cx(style.step, 'd-flex', 'align-items-center', {
            active: step >= 1,
          })}
        >
          {step > 1 ? <AiFillCheckCircle /> : <RiNumber1 />}
          <span>寄送地址</span>
          <div className={style.connector} />
        </div>
        {/* step2 */}
        <div
          className={cx(style.step, 'd-flex', 'align-items-center', {
            active: step >= 2,
          })}
        >
          {step > 2 ? <AiFillCheckCircle /> : <RiNumber2 />}
          <span>運送方式</span>
          <div className={style.connector} />
        </div>
        {/* step3 */}
        <div
          className={cx(style.step, 'd-flex', 'align-items-center', {
            active: step >= 3,
          })}
        >
          <RiNumber3 />
          <span>付款資訊</span>
          <div className={style.connector} />
        </div>
      </div>
    </div>
  );
};

export default memo(StepProgress);

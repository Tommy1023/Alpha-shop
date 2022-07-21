import './style.css';
import React from 'react';
import { RiNumber1, RiNumber2, RiNumber3 } from 'react-icons/ri';
import { AiFillCheckCircle } from 'react-icons/ai';

// flow.js 定義props型別
type StepProps = {
  step: Number,
};

const StepProgress: React.FC<StepProps> = (props) => {
  const { step } = props;
  return (
    <>
      {/* tittle */}
      <h2 className="tittle my-5">結帳</h2>
      {/* Wizard-bar */}
      <div className="wizard d-flex justify-content-start">
        {/* step1 */}
        <div
          className="wizard-step d-flex align-items-center"
          data-active={step >= 1}
        >
          {step > 1 ? <AiFillCheckCircle /> : <RiNumber1 />}
          <span>寄送地址</span>
          <div className="wizard-connector" />
        </div>
        {/* step2 */}
        <div
          className="wizard-step d-flex align-items-center"
          data-active={step >= 2}
        >
          {step > 2 ? <AiFillCheckCircle /> : <RiNumber2 />}
          <span>運送方式</span>
          <div className="wizard-connector" />
        </div>
        {/* step3 */}
        <div
          className="wizard-step d-flex align-items-center"
          data-active={step === 3}
        >
          <RiNumber3 />
          <span>付款資訊</span>
          <div className="wizard-connector" />
        </div>
      </div>
    </>
  );
};

export default StepProgress;

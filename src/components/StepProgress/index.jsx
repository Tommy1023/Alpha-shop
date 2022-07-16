import './stepProgress.css';
import { RiNumber1, RiNumber2, RiNumber3 } from 'react-icons/ri';

const StepProgress = () => {
  return (
    <div className="row">
      <div className="mt-3">
        <h2 className="tittle my-5">結帳</h2>
        <div className="steps d-flex justify-content-start">
          <div className="step d-flex align-items-center active">
            <RiNumber1 />
            <span>寄送地址</span>
            <hr className="mx-2" />
          </div>
          <div className="step d-flex align-items-center">
            <RiNumber2 />
            <span>運送方式</span>
            <hr className="mx-2" />
          </div>
          <div className="step d-flex align-items-center">
            <RiNumber3 />
            <span>付款資訊</span>
            <hr className="mx-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepProgress;

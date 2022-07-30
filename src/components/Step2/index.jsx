import { memo } from 'react';
import cx from 'classname';
import style from './style.module.scss';

const Step2 = () => {
  return (
    <>
      <form action="" method="post">
        <div className="container">
          <div className="row">
            <h1 className="col-12 mt-5 pb-2">運送方式</h1>
            <div className="card ms-3 mb-3 col-6">
              <div className="card-body">
                <div className="form-check d-flex align-items-center">
                  <input
                    className="form-check-input me-3"
                    type="radio"
                    name="flexRadioDefault"
                    id="radios1"
                  />
                  <label
                    className={cx(style.radioLabel, 'row')}
                    htmlFor="radios1"
                  >
                    <div className="d-flex">
                      <span className="col-8 ">標準運送</span>
                      <span className="col-4 d-flex flex-row-reverse">
                        免費
                      </span>
                    </div>
                    <div className="col-12">約3~7個工作天</div>
                  </label>
                </div>
              </div>
            </div>
            <div className="card ms-3 mb-3 col-6">
              <div className="card-body">
                <div className="form-check d-flex align-items-center">
                  <input
                    className="form-check-input me-3"
                    type="radio"
                    name="flexRadioDefault"
                    id="radios2"
                  />
                  <label
                    className={cx(style.radioLabel, 'row')}
                    htmlFor="radios2"
                  >
                    <div className="d-flex">
                      <span className="col-8 ">DHL 貨運</span>
                      <span className="col-4 d-flex flex-row-reverse">
                        $500
                      </span>
                    </div>
                    <div className="col-12">48小時內送達</div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <hr className="mt-5" />
    </>
  );
};
export default memo(Step2);

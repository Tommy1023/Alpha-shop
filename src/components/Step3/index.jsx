import { memo } from 'react';

const Step3 = () => {
  return (
    <>
      <form action="" method="post">
        <div className="container">
          <div className="row">
            <h1 className="tittle col-12 mt-5 pb-2">付費資訊</h1>
            <div className="mb-3 col-8">
              <label htmlFor="pay-name" className="form-label">
                持卡人姓名
              </label>
              <input
                type="string"
                className="form-control"
                id="pay-name"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-3 col-8">
              <label htmlFor="credit-card" className="form-label">
                卡號
              </label>
              <input
                type="string"
                className="form-control"
                id="credit-card"
                placeholder="1111 2222 3333 4444"
              />
            </div>
            <div className="mb-3 col-6">
              <label htmlFor="valid-date" className="form-label">
                有效期限
              </label>
              <input
                type="string"
                className="form-control"
                id="valid-date"
                placeholder="MM/YY"
              />
            </div>
            <div className="mb-3 col-6">
              <label htmlFor="cvc" className="form-label">
                CVC/CCV
              </label>
              <input
                type="string"
                className="form-control"
                id="cvc"
                placeholder="123"
              />
            </div>
          </div>
        </div>
      </form>
      <hr className="mt-5" />
    </>
  );
};
export default memo(Step3);

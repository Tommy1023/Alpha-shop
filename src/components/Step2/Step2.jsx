import { memo } from 'react';
import cx from 'classname';
import style from './style.module.scss';
import useCartContext from '../CartContext';
import { TRANSPORTS } from './transport';

const Step2 = () => {
  const { atSelectTransport } = useCartContext();
  return (
    <>
      <form action="" method="post">
        <div className="container">
          <div className="row">
            <h1 className="col-12 mt-5 pb-2">運送方式</h1>
            {TRANSPORTS.map((transport) => {
              return (
                <div className="card ms-3 mb-3 col-6" key={transport.id}>
                  <div className="card-body">
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input me-3"
                        type="radio"
                        name="flexRadioDefault"
                        id={transport.id}
                        onClick={() => {
                          atSelectTransport({
                            trans: transport.trans,
                            price: transport.price,
                          });
                        }}
                      />
                      <label
                        className={cx(style.radioLabel, 'row')}
                        htmlFor={transport.id}
                      >
                        <div className="d-flex">
                          <span className="col-8 ">{transport.trans}</span>
                          <span className="col-4 d-flex flex-row-reverse">
                            {transport.price === 0 ? '免費' : transport.price}
                          </span>
                        </div>
                        <div className="col-12">{transport.workDay}</div>
                      </label>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </form>
      <hr className="mt-5" />
    </>
  );
};
export default memo(Step2);

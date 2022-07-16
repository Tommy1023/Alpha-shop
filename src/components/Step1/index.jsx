const cityLists = [
  '臺北市',
  '新北市',
  '桃園市',
  '臺中市',
  '臺南市',
  '高雄市',
  '新竹縣',
  '苗栗縣',
  '彰化縣',
  '南投縣',
  '雲林縣',
  '嘉義縣',
  '屏東縣',
  '宜蘭縣',
  '花蓮縣',
  '臺東縣',
  '澎湖縣',
  '金門縣',
  '連江縣',
  '基隆市',
  '新竹市',
  '嘉義市',
];

const Step1 = () => {
  return (
    <>
      <form action="" method="post">
        <div className="container">
          <div className="row">
            <h1 className="tittle col-12 mt-5 pb-2">寄送地址</h1>
            <div className="col-4">
              <label htmlFor="title" className="form-label">
                稱謂
              </label>
              <select
                id="title"
                className="form-select"
                aria-label="title select"
              >
                <option value="1" selected>
                  先生
                </option>
                <option value="2">女士</option>
              </select>
            </div>
            <div className="mb-3 col-8">
              <label htmlFor="name" className="form-label">
                姓名
              </label>
              <input type="string" className="form-control" id="name" />
            </div>
            <div className="mb-3 col-6">
              <label htmlFor="phone-number" className="form-label">
                電話
              </label>
              <input
                type="phone"
                className="form-control"
                id="phone-number"
                placeholder="請輸入行動電話"
              />
            </div>
            <div className="mb-3 col-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="phone"
                className="form-control"
                id="email"
                placeholder="請輸入電子郵件"
              />
            </div>
            <div className="col-4">
              <label htmlFor="city" className="form-label">
                縣市
              </label>
              <select
                id="city"
                className="form-select"
                aria-label="city select"
              >
                <option selected>請選譯縣市</option>
                {cityLists.map((city) => {
                  return <option value={city}>{city}</option>;
                })}
              </select>
            </div>
            <div className="mb-3 col-8">
              <label htmlFor="address" className="form-label">
                地址
              </label>
              <input
                type="string"
                className="form-control"
                id="address"
                placeholder="請輸入地址"
              />
            </div>
          </div>
        </div>
      </form>
      <hr className="mt-5" />
    </>
  );
};
export default Step1;

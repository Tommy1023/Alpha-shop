import { FaSearch } from 'react-icons/fa';
import { BsCart3, BsMoon } from 'react-icons/bs';

const Icon = () => {
  return (
    <div className="header-icon col-3 d-flex justify-content-end">
      <div className="icon my-auto mx-3 pb-1">
        <a href="/search" className="icon-link ">
          <FaSearch />
        </a>
      </div>
      <div className="icon my-auto mx-3 pb-1">
        <a href="/cart" className="icon-link">
          <BsCart3 />
        </a>
      </div>
      <div className="icon my-auto mx-3 pb-1">
        <a href="/dark" className="icon-link">
          <BsMoon />
        </a>
      </div>
    </div>
  );
};
export default Icon;

import { memo } from 'react';
import { FaSearch } from 'react-icons/fa';
import { BsCart3, BsMoon } from 'react-icons/bs';
import cx from 'classname';
import style from './headerStyle.module.css';
import navLists from './navBarItems.json';

const Heater = () => {
  return (
    <>
      {/* NavBar */}
      <nav className="nav col-5">
        {navLists.map((list) => (
          <li className="nav-item" key={`${list.item}`}>
            <a
              className={cx(style.navLinkColor, 'nav-link', 'p-2')}
              href={list.link}
            >
              {list.item}
            </a>
          </li>
        ))}
      </nav>
      {/* logo */}
      <div className="col-4">
        <h5 className="my-auto">React Shop</h5>
      </div>
      {/* icon */}
      <div
        className={cx(
          style.headerIcon,
          'col-3',
          'd-flex',
          'justify-content-end',
        )}
      >
        <div className="my-auto mx-3 pb-1">
          <a href="/search">
            <FaSearch />
          </a>
        </div>
        <div className="my-auto mx-3 pb-1">
          <a href="/cart">
            <BsCart3 />
          </a>
        </div>
        <div className="my-auto mx-3 pb-1">
          <a href="/dark">
            <BsMoon />
          </a>
        </div>
      </div>
    </>
  );
};

export default memo(Heater);

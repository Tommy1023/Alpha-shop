const navLists = [
  { item: '男款', link: './boy' },
  { item: '女款', link: './girl' },
  { item: '最新消息', link: './news' },
  { item: '客製商品', link: './customization' },
  { item: '聯絡我們', link: './contact' },
];

const NavBar = () => {
  return (
    <nav className="nav col-5">
      {navLists.map((list) => (
        <li className="nav-item" key={`${list.item}`}>
          <a className="nav-link p-2" href={list.link}>
            {list.item}
          </a>
        </li>
      ))}
    </nav>
  );
};

export default NavBar;

import Logo from '../../assets/images/logo.svg';

export default function SiteHeader() {
  return (
    <header className="header">
      <div className="header header__inner">
        <a className="header__logo" aria-label="Home" href="/">
          <img src={Logo} alt="Site logo" />
        </a>
        <nav className="header__Nav" aria-label="Primary">
          <ul>
            <li>
              <a href="#" className="nav__link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav__link">
                New
              </a>
            </li>
            <li>
              <a href="#" className="nav__link">
                Popular
              </a>
            </li>
            <li>
              <a href="#" className="nav__link">
                Trending
              </a>
            </li>
            <li>
              <a href="#" className="nav__link">
                Categories
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

import { useState, useEffect } from 'react';
import MenuIcon from '../../assets/icons/icon-menu.svg';
import CloseIcon from '../../assets/icons/icon-menu-close.svg';
import Logo from '../../assets/icons/logo.svg';
import { useWindowSize } from '../../hooks/useWindowSize';

export default function SiteHeader() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width >= 768) {
      setMenuOpen(false);
    }
  });

  return (
    <header className="header">
      <div className="header__inner">
        <a
          className="header__logo"
          aria-label="Home"
          href={import.meta.env.BASE_URL}
        >
          <img src={Logo} width={65} height={40} alt="Site logo" />
        </a>
        <button
          className="header__hamburger"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <img
            src={isMenuOpen ? CloseIcon : MenuIcon}
            alt=""
            width={isMenuOpen ? 30.41 : 40}
            height={isMenuOpen ? 30.41 : 17}
          />
        </button>
        {isMenuOpen && (
          <div className="menu-overlay" onClick={() => setMenuOpen(false)} />
        )}
        <nav
          className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}
          aria-label="Primary"
        >
          <ul className="header__nav-list text-preset-6">
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

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../utils/images/logo.jpg';

function Header() {
  const [isActive, toggle] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    toggle(!isActive);
  }

  const navItemsMap = (item, key) => (
    <li className="nav-item" key={key}>
      <Link className="nav-link" to={item.path}>
        {item.label}
      </Link>
    </li>
  );

  const buttonRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    const handleOutsideNavClick = (e) => {
      e.preventDefault();
      if (
        isActive &&
        navRef.current &&
        !navRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        toggle(false);
      }
    };

    document.addEventListener(
      'mousedown',
      handleOutsideNavClick
    );

    return () => {
      document.removeEventListener(
        'mousedown',
        handleOutsideNavClick
      );
    };
  }, [isActive]);

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="logo" className="nav-img" />
        </Link>
        <ul
          className={`nav-menu ${
            isActive ? 'active' : ''
          } `}
          ref={navRef}
        >
          {[
            { label: 'Home', path: '/' },
            { label: 'Scrie', path: '/write' },
            { label: 'Despre noi', path: '/about' },
            { label: 'Proiecte', path: '/projects' },
            { label: 'Contact', path: '/contact' },
            { label: 'Log out', path: '/' },
          ].map(navItemsMap)}
        </ul>

        <div
          className={`hamburger ${
            isActive ? 'active' : ''
          }`}
          onClick={handleClick}
          ref={buttonRef}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;

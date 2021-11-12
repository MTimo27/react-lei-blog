import React, { useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './header.css';

function Header() {
  const [isActive, toggle] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    toggle(!isActive);
  }

  function closeNav() {
    toggle(false);
  }

  const navItemsMap = (item, key) => (
    <li className="nav-item" key={key}>
      <Link
        className="nav-link"
        to={item.path}
        onClick={closeNav}
      >
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
    <>
      <div className="headerSpace"></div>
      <header className="header">
        <nav className="navbar">
          <Link to="/" className="nav-logo">
            {/* <img src={logo} alt="logo" className="nav-img" /> */}
            <h1>LEI</h1>
          </Link>
          <ul
            className={`nav-menu ${
              isActive ? 'active' : ''
            } `}
            ref={navRef}
          >
            {[
              { label: 'Acasa', path: '/' },
              // { label: 'Scrie', path: '/write' },
              { label: 'Despre noi', path: '/about' },
              { label: 'Proiecte', path: '/projects' },
              { label: 'Contact', path: '/contact' },
              // { label: 'Log out', path: '/' },
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
    </>
  );
}

export default Header;

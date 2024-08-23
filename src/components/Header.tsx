import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { scrollToSection } from '../utils';


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="email">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>tlumaczenia@tlumaczustnynawarsztaty.pl</span>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      {isOpen && (
        <nav className="navbar">
          <ul>
           <li><a href="#section1" onClick={(e) => { e.preventDefault(); scrollToSection('section1', setIsOpen); }}>1</a></li>
           <li><a href="#section2" onClick={(e) => { e.preventDefault(); scrollToSection('section2', setIsOpen); }}>2</a></li>
           <li><a href="#section3" onClick={(e) => { e.preventDefault(); scrollToSection('section3', setIsOpen); }}>3</a></li>
           <li><a href="#section4" onClick={(e) => { e.preventDefault(); scrollToSection('section4', setIsOpen); }}>4</a></li>
           <li><a href="#section5" onClick={(e) => { e.preventDefault(); scrollToSection('section5', setIsOpen); }}>5</a></li>
           <li><a href="#section6" onClick={(e) => { e.preventDefault(); scrollToSection('section6', setIsOpen); }}>6</a></li>
           </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

import './reset.css';
import './App.css';

import React, { useState, useEffect } from 'react';

import logo from './assets/logo.png';
import Bartek_interpreting from './assets/Bartek_interpreting.jpg';
import sections from './assets/data/sections';

import Header from './components/Header';
import Footer from './components/Footer';

import { scrollToSection } from './utils';

interface ParagraphProps {
  header: string;
  content: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ header, content }) => (
  <p>
    <span className="paragraph-header">{header}</span>{content}
  </p>
);

function App() {
const [isPopupOpen, setIsPopupOpen] = useState(false);
const [popupContent, setPopupContent] = useState<React.ReactNode>(null);

const handleImageClick = () => {
    setPopupContent(<PopupContent />);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupContent(null);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <img src={logo} alt="logo" className="bardo-logo" />
        {sections.map((section, index) => (
          <div key={index} id={section.id} className="section">
            <h1>{section.header}</h1>
            <img src={section.image} alt={`Section ${index + 1}`} />
            {Array.isArray(section.text) ? (
                          section.text.map((paragraph, i) => (
                          <div
                                key={`${section.id}-${i}`}
                                className={section.id === "section5" && (i === 0 || i === 1 || i === 5) ? 'darker-background' : ''}
                          >
                            <Paragraph key={i} header={paragraph.header} content={paragraph.content} />

                            {section.id === "section3" && i === 4 && <img src={Bartek_interpreting} alt="Bartek_interpreting" className="" />}

                          </div>
                          ))
                        ) : (
                          <p>{section.text}</p>
                        )}
          </div>
        ))}
      </div>
     <Footer />
     {isPopupOpen && ( <Popup popupContent={popupContent} onClose={closePopup} /> )}
    </div>
  );
}

export default App;

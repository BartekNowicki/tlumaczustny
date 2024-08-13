import './reset.css';
import './App.css';

import React, { useState } from 'react';

import bardo from './assets/bardo.jpg';
import Bartek_interpreting from './assets/Bartek_interpreting.jpg';
import KazimierzDolny from './assets/KazimierzDolny.jpg';
import sections from './assets/data/sections';

import Header from './components/Header';
import Footer from './components/Footer';
import Popup from './components/Popup';

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
      const content = (
        <div className="section">
          <h1>{`Language Immersion in Kazimierz Dolny - September 13th-15th, 2024`}</h1>
          <img src={KazimierzDolny} alt="Warsztaty językowe Kazimierz Dolny" className=""/>
        </div>
      );
      setPopupContent(content);
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
        <img src={bardo} alt="Bardo logo" className="bardo-logo" />
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
                            {section.id === "section5" && i === 5 && (
                                                <img
                                                  src={KazimierzDolny}
                                                  alt="Warsztaty językowe Kazimierz Dolny"
                                                  className=""
                                                  onClick={handleImageClick}
                                                  style={{ cursor: 'pointer' }}
                                                />
                                              )}
                          </div>
                          ))
                        ) : (
                          <p>{section.text}</p>
                        )}
          </div>
        ))}
      </div>
     <Footer />
     {isPopupOpen && ( <Popup sectionContent={popupContent} onClose={closePopup} /> )}
    </div>
  );
}

export default App;

// Dla Kogo Jest Moja Metoda
//                       Moja metoda nie jest dla każdego. Jest idealna dla tych, którzy:
//
//                       Rozumieją, na czym polega naturalne, poprawne wysławianie się
//                       Chcą od razu ćwiczyć właściwy sposób formułowania myśli
//                       Wolą naśladować native speakerów zamiast tworzyć własne konstrukcje językowe
//                       Są zaangażowani w naukę i lubią kontakt z żywym językiem`;
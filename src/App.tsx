import './reset.css';
import './App.css';

import bardo from './assets/bardo.jpg';
import sections from './assets/data/sections';

import Header from './components/Header';
import Footer from './components/Footer';

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
  return (
    <div>
      <Header />
      <div className="container">
        <img src={bardo} alt="Bardo logo" className="bardo-logo" />
        {sections.map((section, index) => (
          <div key={index} id={section.id} className="section">
            <h2>{section.header}</h2>
            <img src={section.image} alt={`Section ${index + 1}`} />
            {Array.isArray(section.text) ? (
                          section.text.map((paragraph, i) => (
                            <Paragraph key={i} header={paragraph.header} content={paragraph.content} />
                          ))
                        ) : (
                          <p>{section.text}</p>
                        )}
          </div>
        ))}
      </div>
     <Footer />
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
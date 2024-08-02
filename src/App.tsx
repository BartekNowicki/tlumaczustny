import './reset.css';
import './App.css';
import { paragraph1_1, paragraph1_2, paragraph1_3, paragraph1_4, paragraph1_5 } from './assets/data/section1';
import { paragraph2_1, paragraph2_2, paragraph2_3, paragraph2_4, paragraph2_5 } from './assets/data/section2';
import section3Text from './assets/data/section3';
import section4Text from './assets/data/section4';
import section5Text from './assets/data/section5';

const sections = [
  {
    header: "Problem z konwersacjami",
    text: [paragraph1_1, paragraph1_2, paragraph1_3, paragraph1_4, paragraph1_5],
    image: "https://via.placeholder.com/150"
  },
  {
    header: "Moja propozycja jako rozwiązanie problemu",
    text: [paragraph2_1, paragraph2_2, paragraph2_3, paragraph2_4, paragraph2_5],
    image: "https://via.placeholder.com/150"
  },
  {
    header: "Header 3",
    text: section3Text,
    image: "https://via.placeholder.com/150"
  },
  {
    header: "Header 4",
    text: section4Text,
    image: "https://via.placeholder.com/150"
  },
  {
    header: "Header 5",
    text: section5Text,
    image: "https://via.placeholder.com/150"
  }
];

function App() {
  return (
    <div className="container">
      <h1>Bardo Language Development</h1>
      {sections.map((section, index) => (
        <div key={index} className="section">
          <h2>{section.header}</h2>
          <img src={section.image} alt={`Section ${index + 1}`} />
          {Array.isArray(section.text) ? (
            section.text.map((paragraph, i) => <p key={i}>{paragraph}</p>)
          ) : (
            <p>{section.text}</p>
          )}
        </div>
      ))}
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
import './reset.css';
import './App.css';
import { paragraph1_1, paragraph1_2, paragraph1_3, paragraph1_4, paragraph1_5 } from './assets/data/section1';
import { paragraph2_1, paragraph2_2, paragraph2_3, paragraph2_4, paragraph2_5 } from './assets/data/section2';
import { paragraph3_1, paragraph3_2, paragraph3_3, paragraph3_4, paragraph3_5 } from './assets/data/section3';
import { paragraph4_1, paragraph4_2, paragraph4_3, paragraph4_4, paragraph4_5 } from './assets/data/section4';
import { paragraph5_1, paragraph5_2, paragraph5_3, paragraph5_4, paragraph5_5, paragraph5_6 } from './assets/data/section5';
import { paragraph6_1, paragraph6_2, paragraph6_3, paragraph6_4, paragraph6_5, paragraph6_6 } from './assets/data/section6';
import { paragraph7_1, paragraph7_2, paragraph7_3, paragraph7_4, paragraph7_5, paragraph7_6 } from './assets/data/section7';
import Header from './components/Header';
import reviews from './assets/reviews.jpg';
const sections = [
  {
    id: "section1",
    header: "Konwersacje - kiedy pomagają i jak znaleźć właściwe podejście?",
    text: [paragraph1_1, paragraph1_2, paragraph1_3, paragraph1_4, paragraph1_5],
    image: "https://via.placeholder.com/150"
  },
  {
    id: "section2",
    header: "Moja propozycja jako rozwiązanie powyższych problemów",
    text: [paragraph2_1, paragraph2_2, paragraph2_3, paragraph2_4, paragraph2_5],
    image: "https://via.placeholder.com/150"
  },
  {
    id: "section3",
    header: "Garść informacji o mnie",
    text: [paragraph3_1, paragraph3_2, paragraph3_3, paragraph3_4, paragraph3_5],
    image: "https://via.placeholder.com/150"
  },
  {
    id: "section4",
    header: "Metodologia podejścia leksykalnego",
    text: [paragraph4_1, paragraph4_2, paragraph4_3, paragraph4_4, paragraph4_5],
    image: "https://via.placeholder.com/150"
  },
  {
    id: "section5",
    header: "Zapisy",
    text: [paragraph5_1, paragraph5_2, paragraph5_3, paragraph5_4, paragraph5_5, paragraph5_6],
    image: "https://via.placeholder.com/150"
  },
  {
      id: "section6",
      header: "Cennik",
      text: [paragraph6_1, paragraph6_2, paragraph6_3, paragraph6_4, paragraph6_5, paragraph6_6],
      image: "https://via.placeholder.com/150"
  },
  {
      id: "section7",
      header: "Lokalizacja",
      text: [paragraph7_1, paragraph7_2, paragraph7_3, paragraph7_4, paragraph7_5, paragraph7_6],
      image: "https://via.placeholder.com/150"
    }
];

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
        <h1>Bardo Language Development</h1>
        <ul className="inline-list">
          <li>konwersacje indywidualne i grupowe</li>
          <li>warsztaty językowe</li>
        </ul>
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


      <div className="footer">
              <div>
              <p>BARDO Bartosz Nowicki</p>
                <p>NIP 1132152032</p>
                <p>REGON 016407315</p>
              </div>
              <img src={reviews} alt="google reviews" className="reviews" />
      </div>
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
import './reset.css';
import './App.css'
import section1Text from './assets/data/section1';
import section2Text from './assets/data/section2';
import section3Text from './assets/data/section3';
import section4Text from './assets/data/section4';
import section5Text from './assets/data/section5';

const sections = [
  {
    header: "Header 1",
    text: section1Text,
    image: "https://via.placeholder.com/150"
  },
  {
    header: "Header 2",
    text: section2Text,
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
          <p>{section.text}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
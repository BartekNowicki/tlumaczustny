import { paragraph1_1, paragraph1_2, paragraph1_3, paragraph1_4, paragraph1_5 } from './section1';
import { paragraph2_1, paragraph2_2, paragraph2_3, paragraph2_4, paragraph2_5 } from './section2';
import { paragraph3_1, paragraph3_2, paragraph3_3, paragraph3_4, paragraph3_5 } from './section3';
import { paragraph4_1, paragraph4_2, paragraph4_3, paragraph4_4, paragraph4_5 } from './section4';
import { paragraph5_1, paragraph5_2, paragraph5_3, paragraph5_4, paragraph5_5, paragraph5_6 } from './section5';
import { paragraph6_1, paragraph6_2, paragraph6_3, paragraph6_4, paragraph6_5, paragraph6_6 } from './section6';
import { paragraph7_1, paragraph7_2, paragraph7_3, paragraph7_4, paragraph7_5, paragraph7_6 } from './section7';

import konwersacje from '../konwersacje.jpg';
import rozwiazanie from '../rozwiazanie.jpg';
import bartek from '../Bartek.jpg';
import metodologia from '../metodologia.jpg';
import zapisy from '../zapisy.jpg';
import cennik from '../cennik.jpg';
import lokalizacja from '../lokalizacja.jpg';

const sections = [
  {
    id: "section1",
    header: "Konwersacje - kiedy pomagają i jak znaleźć właściwe podejście?",
    text: [paragraph1_1, paragraph1_2, paragraph1_3, paragraph1_4, paragraph1_5],
    image: konwersacje
  },
  {
    id: "section2",
    header: "Moja propozycja jako rozwiązanie powyższych problemów",
    text: [paragraph2_1, paragraph2_2, paragraph2_3, paragraph2_4, paragraph2_5],
    image: rozwiazanie
  },
  {
    id: "section3",
    header: "Garść informacji o mnie",
    text: [paragraph3_1, paragraph3_2, paragraph3_3, paragraph3_4, paragraph3_5],
    image: bartek
  },
  {
    id: "section4",
    header: "Metodologia podejścia leksykalnego",
    text: [paragraph4_1, paragraph4_2, paragraph4_3, paragraph4_4, paragraph4_5],
    image: metodologia
  },
  {
    id: "section5",
    header: "Zapisy",
    text: [paragraph5_1, paragraph5_2, paragraph5_3, paragraph5_4, paragraph5_5, paragraph5_6],
    image: zapisy
  },
  {
      id: "section6",
      header: "Cennik",
      text: [paragraph6_1, paragraph6_2, paragraph6_3, paragraph6_4, paragraph6_5, paragraph6_6],
      image: cennik
  },
  {
      id: "section7",
      header: "Lokalizacja",
      text: [paragraph7_1, paragraph7_2, paragraph7_3, paragraph7_4, paragraph7_5, paragraph7_6],
      image: lokalizacja
    }
];

export default sections;
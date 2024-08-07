import { paragraph1_1, paragraph1_2, paragraph1_3, paragraph1_4, paragraph1_5, paragraph1_6 } from './section1';
import { paragraph2a_1, paragraph2a_2, paragraph2a_3, paragraph2a_4, paragraph2a_5 } from './section2a';
import { paragraph2b_1, paragraph2b_2, paragraph2b_3, paragraph2b_4, paragraph2b_5 } from './section2b';
import { paragraph3_1, paragraph3_2, paragraph3_3, paragraph3_4, paragraph3_5, paragraph3_6, paragraph3_7} from './section3';
import { paragraph4_1, paragraph4_2, paragraph4_3, paragraph4_4, paragraph4_5 } from './section4';
import { paragraph5_1, paragraph5_2, paragraph5_3, paragraph5_4, paragraph5_5, paragraph5_6, paragraph5_7, paragraph5_8, paragraph5_9, paragraph5_10 } from './section5';
import { paragraph6_1, paragraph6_2, paragraph6_3, paragraph6_4, paragraph6_5, paragraph6_6 } from './section6';
import { paragraph7_1, paragraph7_2, paragraph7_3, paragraph7_4, paragraph7_5, paragraph7_6 } from './section7';

import konwersacje from '../konwersacje.jpg';
import rozwiazanie from '../rozwiazanie.jpg';
import warsztaty from '../warsztaty_angielski.jpg';
import bartek from '../Bartek.jpg';
import metodologia from '../metodologia.jpg';
import zapisy from '../zapisy.jpg';
import cennik from '../cennik.jpg';
import lokalizacja from '../lokalizacja.jpg';

const sections = [
  {
    id: "section1",
    header: "Konwersacje - na co zwrócić uwagę?",
    text: [paragraph1_1, paragraph1_2, paragraph1_3, paragraph1_4, paragraph1_5, paragraph1_6],
    image: konwersacje
  },
  {
    id: "section2a",
    header: "Lekcje konwersacyjne",
    text: [paragraph2a_1, paragraph2a_2, paragraph2a_3, paragraph2a_4, paragraph2a_5],
    image: rozwiazanie
  },
  {
    id: "section2b",
    header: "Warsztaty",
    text: [paragraph2b_1, paragraph2b_2, paragraph2b_3, paragraph2b_4, paragraph2b_5],
    image: warsztaty
  },
  {
    id: "section3",
    header: "Garść informacji o mnie",
    text: [paragraph3_1, paragraph3_2, paragraph3_3, paragraph3_4, paragraph3_5, paragraph3_6, paragraph3_7],
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
    text: [paragraph5_1, paragraph5_2, paragraph5_3, paragraph5_4, paragraph5_5, paragraph5_6, paragraph5_7, paragraph5_8, paragraph5_9, paragraph5_10],
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
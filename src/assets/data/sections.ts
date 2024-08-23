import { paragraph1_1, paragraph1_2, paragraph1_3, paragraph1_4, paragraph1_5, paragraph1_6, paragraph1_7 } from './section1';
import { paragraph2_1, paragraph2_2, paragraph2_3, paragraph2_4, paragraph2_5 } from './section2';
import { paragraph3_1, paragraph3_2, paragraph3_3, paragraph3_4, paragraph3_5, paragraph3_6, paragraph3_7, paragraph3_8, paragraph3_9} from './section3';
import { paragraph4_1, paragraph4_2, paragraph4_3, paragraph4_4, paragraph4_5 } from './section4';
import { paragraph5_1, paragraph5_2, paragraph5_3, paragraph5_4, paragraph5_5, paragraph5_6, paragraph5_7, paragraph5_8, paragraph5_9, paragraph5_10 } from './section5';
import { paragraph6_1, paragraph6_2, paragraph6_3, paragraph6_4, paragraph6_5, paragraph6_6 } from './section6';

import tlumaczustny1 from '../tlumaczustny1.jpg';
import tlumaczustny2 from '../tlumaczustny2.jpg';
import Bartek_interpreting from '../Bartek_interpreting.jpg';


const sections = [
  {
    id: "section1",
    header: "Tłumaczenie warsztatów - na co zwrócić uwagę?",
    text: [paragraph1_1, paragraph1_2, paragraph1_3, paragraph1_4, paragraph1_5, paragraph1_6, paragraph1_7],
    image: tlumaczustny1
  },
  {
    id: "section2",
    header: "Tłumacz na warsztaty2",
    text: [paragraph2_1, paragraph2_2, paragraph2_3, paragraph2_4, paragraph2_5],
    image: tlumaczustny2
  },
  {
    id: "section3",
    header: "Tłumacz na warsztaty3",
    text: [paragraph3_1, paragraph3_2, paragraph3_3, paragraph3_4, paragraph3_5, paragraph3_6, paragraph3_7, paragraph3_8, paragraph3_9],
    image: Bartek_interpreting
  },
  {
    id: "section4",
    header: "Tłumacz na warsztaty4",
    text: [paragraph4_1, paragraph4_2, paragraph4_3, paragraph4_4, paragraph4_5],
    image:''
  },
  {
    id: "section5",
    header: "Tłumacz na warsztaty5",
    text: [paragraph5_1, paragraph5_2, paragraph5_3, paragraph5_4, paragraph5_5, paragraph5_6, paragraph5_7, paragraph5_8, paragraph5_9, paragraph5_10],
    image:''
  },
  {
      id: "section6",
      header: "Tłumacz na warsztaty6",
      text: [paragraph6_1, paragraph6_2, paragraph6_3, paragraph6_4, paragraph6_5, paragraph6_6],
      image:''
  },
];

export default sections;
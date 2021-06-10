import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Covid Tracker',
    desc:
      'An application to track the covid data across the world. It has been made using API call (javascript)',
    img: UTrackerImg,
    git_link:"https://github.com/pandeyavi200/CovidTracker.github.io/commit/7467b53c7a6ffab83a30caf9b91606f62d096210",
    visit:"https://pandeyavi200.github.io/CovidTracker.github.io/",
  },
  {
    id: uuidv4(),
    name: 'Across The Globe',
    desc:
      'This page front-end was developed by me for the company. In this css javascript and jQuery was used.',
    img: GreenCtgImg,
    git_link:"https://www.atg.world/profile ",
    visit:"https://www.atg.world/profile",
  },
  {
    id: uuidv4(),
    name: 'Banao',
    desc:
      'This was one of the side project of the company i was working in. I have developed many front-end part of the website',
    img: CoinTrackerImg,
    git_link:"https://banao.tech/ ",
    visit:"https://banao.tech/",
  },
  {
    id: uuidv4(),
    name: "Cavin's Portfolio",
    desc:
      'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: CavinImg,
    git_link:"https://www.youtube.com/watch?v=jOviw8Ou_Yk ",
    visit:"https://unsplash.com/photos/7ZWVnVSaafY",
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: ProjectImg,
    git_link:"https://www.youtube.com/watch?v=jOviw8Ou_Yk ",
    visit:"https://unsplash.com/photos/7ZWVnVSaafY",
  },
];

export default projects;
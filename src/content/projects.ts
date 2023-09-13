import journeyGenie from "../assets/journey_genie.png";
import portfolioV1 from "../assets/portfolio_v1.png";
import quixy from "../assets/quixy.png";
import wheelGame from "../assets/wheel_game.png";

const data = [
  {
    id: 1,
    name: "Journey Genie",
    github: "https://github.com/ShrideepP/journey_genie",
    live: "https://journeygenie.vercel.app/",
    tech: "Next JS 13 - Node JS - Tailwind CSS - TypeScript",
    about: "Journey Genie is a travel destination discovery platform that empowers users to explore the world based on their preferences.",
    imageURL: journeyGenie,
  },
  {
    id: 2,
    name: "Portfolio V1",
    github: "https://github.com/ShrideepP/shrideep_v1",
    live: "https://shrideeppakhare.vercel.app/",
    tech: "Next JS - Tailwind CSS - Nodemailer",
    about: "Explore my web journey's beginnings, showcasing early projects and my path to professional growth and innovation.",
    imageURL: portfolioV1,
  },
  {
    id: 3,
    name: "Quiz Application",
    github: "https://github.com/ShrideepP/quiz_application",
    live: "https://github.com/ShrideepP/quiz_application",
    tech: "React Native - Expo",
    about: "This app allows users to create, edit, and take quizzes with ease. It integrates with Supabase for database functionality.",
    imageURL: quixy,
  },
  {
    id: 4,
    name: "Wheel Game",
    github: "https://github.com/ShrideepP/wheel-game",
    live: "https://wheel-game-eight.vercel.app/",
    tech: "React JS - Tailwind CSS - React Confetti",
    about: "Experience the excitement of our Wheel-Game, an engaging and interactive lucky draw game. Spin the wheel and win exciting prizes.",
    imageURL: wheelGame,
  },
];

export default data;

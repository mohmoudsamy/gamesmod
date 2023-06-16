// Import Imgs
import {
  valheimImg,
  bioshockImg,
  unravelImg,
  ticktockImg,
  hitmanImg,
  codImg,
  fallguysImg,
  hulkImg,
  forzaImg,
} from "./ImgSources";

const saleData = () => {
  return {
    gameOne: {
      gameImg: valheimImg,
      gameName: "Valheim",
      gameCategory: "Action Games",
      gamePrice: "$8.15",
      hasDiscount: false,
    },
    gameTwo: {
      gameImg: bioshockImg,
      gameName: "BIOSHOCK: THE COLLEC...",
      gameCategory: "Action, RPG",
      gamePrice: "$50",
      hasDiscount: true,
      gameDiscount: "-80%",
    },
    gameThree: {
      gameImg: unravelImg,
      gameName: "Unravel Two",
      gameCategory: "Adventure Games",
      gamePrice: "$20.38",
      hasDiscount: false,
    },
    gameFour: {
      gameImg: ticktockImg,
      gameName: "Tick Tock: A Tale for Two",
      gameCategory: "Indie Games",
      gamePrice: "$3.47",
      hasDiscount: true,
      gameDiscount: "-60%",
    },
    gameFive: {
      gameImg: hitmanImg,
      gameName: "Hitman 3",
      gameCategory: "Action Games",
      gamePrice: "$23.99",
      hasDiscount: false,
    },
    gameSix: {
      gameImg: codImg,
      gameName: "Call of Duty®: Black Ops",
      gameCategory: "Action Games",
      gamePrice: "$38.81",
      hasDiscount: true,
      gameDiscount: "-30%",
    },
    gameSeven: {
      gameImg: fallguysImg,
      gameName: "Fall Guys",
      gameCategory: "Interesting Games",
      gamePrice: "$00.00",
      hasDiscount: true,
      gameDiscount: "-100%",
    },
    gameEight: {
      gameImg: hulkImg,
      gameName: "The Immortal Hulk",
      gameCategory: "Stealth Games",
      gamePrice: "$5.63",
      hasDiscount: false,
    },
    gameNine: {
      gameImg: forzaImg,
      gameName: "Forza Horizon 5",
      gameCategory: "Racing Games",
      gamePrice: "$35.19",
      hasDiscount: true,
      gameDiscount: "-14%",
    },
  };
};
export default saleData;

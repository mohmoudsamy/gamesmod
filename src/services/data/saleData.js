// Import Imgs
import {
  valheimImg,
  bioshockImg,
  unravelImg,
  ticktockImg,
  hitmanImg,
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
  };
};
export default saleData;

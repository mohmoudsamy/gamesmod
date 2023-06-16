// Import Imgs
import {
  spiderIcon,
  spiderImg,
  brotherhoodImg,
  brotherhoodIcon,
  minecraftImg,
  minecraftIcon,
  watchdogsImg,
  watchdogsIcon,
  farcryImg,
  farcryIcon,
} from "./ImgSources";

// Slider Games Data
const sliderData = () => {
  return {
    gameOne: {
      gameName: "Spider Man",
      gameText:
        "“Writing memoirs? Don’t forget the hyphen between Spider and Man.”",
      gameState: "New Release",
      gameImg: spiderImg,
      gameIcon: spiderIcon,
    },
    gameTwo: {
      gameName: "Assasin's Creed Brotherhood",
      gameText: "Nothing is true; everything is permitted",
      gameState: "Update",
      gameImg: brotherhoodImg,
      gameIcon: brotherhoodIcon,
    },
    gameThree: {
      gameName: "Minecraft",
      gameText: "The hunt is on in Fortnite Chapter 2 - Season 5: Zero Point.",
      gameState: "Free Now",
      gameImg: minecraftImg,
      gameIcon: minecraftIcon,
    },
    gameFour: {
      gameName: "Watch Dogs",
      gameText:
        "I never wanted to be a hero... but I'm willing to do the heroic thing.",
      gameState: "Update",
      gameImg: watchdogsImg,
      gameIcon: watchdogsIcon,
    },
    gameFive: {
      gameName: "Far Cry 3",
      gameText:
        "Did I ever tell you what the definition of insanity is? Insanity is doing the exact... same fucking thing...",
      gameState: "Coming Soon",
      gameImg: farcryImg,
      gameIcon: farcryIcon,
    },
  };
};

export default sliderData;

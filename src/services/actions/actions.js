const GAME_SELECT = "GAME_SELECT";

export const selectGameAction = (game) => {
  return {
    type: GAME_SELECT,
    payload: game,
  };
};

import React, { useRef } from "react";
// Font Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { selectGameAction } from "../services/actions/actions";
// Images

const playArrow = <FontAwesomeIcon icon={faArrowRight} />;

const GamesSlider = ({
  sliderGamesData,
  sliderGamesDataSelected,
  selectGameAction,
}) => {
  // App Preview Reference for Changing Background From SCSS File
  const ref = useRef(null);

  // Render The Selected Game
  const showGameOnSelect = () => {
    return Object.values(sliderGamesDataSelected).map((theSelectedGame, i) => {
      let { gameName, gameState, gameText, gameImg } = theSelectedGame;

      return (
        <div
          className="app__games_slider-current_slide w-9/12 flex flex-col justify-between bg-cover relative"
          ref={ref}
          key={i}
        >
          <img
            className="absolute w-full bg-no-repeat h-full rounded-tl-lg rounded-bl-lg"
            src={gameImg}
            alt={gameName}
          />
          <h1 className="app__games_slider-current_slide-game_name pl-7 pt-5">
            {gameName}
          </h1>
          <div className="app__games_slider-current_slide-details pl-7 pb-8">
            <p className="app__games_slider-current_slide-details_state">
              {gameState}
            </p>
            <h2 className="app__games_slider-current_slide-details_text w-96 mb-10">
              {gameText}
            </h2>
            <button type="submit">
              Play For Free <span className="ml-2">{playArrow}</span>
            </button>
          </div>
        </div>
      );
    });
  };

  // Render The Games List
  const renderGamesList = () => {
    return Object.values(sliderGamesData).map((game, i) => {
      let { gameName, gameIcon } = game;
      return (
        <li
          className="app__games_slider-slide_list-item p-3 flex items-center cursor-pointer transition ease-in-out duration-500"
          key={i}
          onClick={() => selectGameAction(game)}
          onLoad={() => selectGameAction(Object.values(sliderGamesData)[0])}
        >
          <img
            className="app__games_slider-slide_list-item_img w-12"
            src={gameIcon}
            alt="Game"
          />
          <p className="app__games_slider-slide_list-item_name pl-5">
            {gameName}
          </p>
        </li>
      );
    });
  };
  return (
    <div className="app__games_slider flex pl-6">
      {showGameOnSelect()}

      <ul className="app__games_slider-slide_list w-3/12 ml-2 rounded-tr-lg rounded-br-lg">
        {renderGamesList()}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sliderGamesData: state.sliderData,
    sliderGamesDataSelected: state.sliderGamesDataReducer,
  };
};

export default connect(mapStateToProps, { selectGameAction })(GamesSlider);

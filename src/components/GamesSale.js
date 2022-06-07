import React from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
const rightArrow = <FontAwesomeIcon icon={faAngleDoubleRight} />;
const leftArrow = <FontAwesomeIcon icon={faAngleDoubleLeft} />;

const GamesSale = ({ GamesSaleData }) => {
  const gameStructure = () => {
    return Object.values(GamesSaleData).map((game, i) => {
      let {
        gameImg,
        gameName,
        gameCategory,
        gamePrice,
        hasDiscount,
        gameDiscount,
      } = game;

      const checkHasDiscount = (conditionToBeExecuted) => {
        return hasDiscount ? conditionToBeExecuted : null;
      };
      return (
        <li className="app__games_sale-games_list-game" key={i}>
          <div className="app__games_sale-games_list-game_img">
            <img
              src={gameImg}
              alt="Game"
              className="rounded-lg cursor-pointer"
            />
          </div>
          <div className="app__games_sale-games_list-game_info flex flex-col">
            <span className="app__games_sale-games_list-game_info-name pt-4 cursor-pointer">
              {gameName}
            </span>
            <span className="app__games_sale-games_list-game_info-category p-2 px-0">
              {gameCategory}
            </span>
            <span className="app__games_sale-games_list-game_info-price">
              <span className={checkHasDiscount("game__discount px-2")}>
                {checkHasDiscount(gameDiscount)}
              </span>
              <span className={checkHasDiscount("game__price_before px-4")}>
                {checkHasDiscount(gamePrice)}
              </span>
              <span className="game__price_after">
                {hasDiscount
                  ? "$" +
                    (
                      +gamePrice.slice(1) -
                      (+gameDiscount.slice(1, 3) / 100) * +gamePrice.slice(1)
                    ).toFixed(2)
                  : gamePrice}
              </span>
            </span>
          </div>
        </li>
      );
    });
  };

  return (
    <div className="app__games_sale pl-6 p-12 px-0">
      <div className="app__games_sale-upper_bar flex justify-between">
        <h1>Games On Sale</h1>
        <div className="app__games_sale-upper_bar-controllers">
          <span className="text-2xl rounded-full cursor-pointer pr-5 ease-in-out duration-500">
            {leftArrow}
          </span>
          <span className="text-2xl rounded-full cursor-pointer pl-5 ease-in-out duration-500">
            {rightArrow}
          </span>
        </div>
      </div>
      <ul className="app__games_sale-games_list pt-8 flex justify-between">
        {gameStructure()}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    GamesSaleData: state.saleData,
  };
};
export default connect(mapStateToProps, null)(GamesSale);

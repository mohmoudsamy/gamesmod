import React from "react";
import { connect } from "react-redux";

// import required modules for swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const GamesSale = ({ GamesSaleData }) => {
  // Implement Slider Structure
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
        <>
          <SwiperSlide>
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
                          (+gameDiscount.slice(1, 3) / 100) *
                            +gamePrice.slice(1)
                        ).toFixed(2)
                      : gamePrice}
                  </span>
                </span>
              </div>
            </li>
          </SwiperSlide>
        </>
      );
    });
  };

  return (
    <div className="app__games_sale pl-6 p-2 px-0">
      <div className="app__games_sale-upper_bar flex justify-between">
        <h1 className="text-xl relative top-8">Games On Sale</h1>
      </div>
      <ul className="app__games_sale-games_list flex justify-between">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          slidesPerGroup={5}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {gameStructure()}
        </Swiper>
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

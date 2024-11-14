import React, { useContext } from "react";
import "../Project/Project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { themeContext } from "../../Context";
import { portfolio } from "../../imgObjects/portfolioImg";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        {portfolio.map((pd, i) => (
          <SwiperSlide key={i}>
            <img src={pd.img} alt="" />
            <div className="card__body">
              <h1 className="card__title">Project</h1>
              <button className="card__btn"><ion-icon name="play-sharp"></ion-icon></button>
            </div>
           </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Portfolio;

import React, { useContext } from "react";
import "../Testimonal/Testimonal.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { TbBrandFiverr } from "react-icons/tb";
import { themeContext } from "../../Context";

function Testimonal() {
  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="t-wrapper" id="testimonal">
      <div className="t-heading">
        <span style={{ color: darkMode ? "white" : "" }}>Clients always get </span>
        <span>Exceptional Work </span>
        <span style={{ color: darkMode ? "white" : "" }}>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--blue)" }}>shazil</div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}> hussain</div>

      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: -100,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="team__box team__box1">
            <div className="team__name">
              <center>
                <div className="team__content">
                  <h2>name</h2>
                  <p>web developer</p>
                  <ion-icon className= 'logo-facebook'></ion-icon>
                  <ion-icon className="logo-instagram"></ion-icon>
                  <TbBrandFiverr className="logo-fiverr"/>
                  <ion-icon className="logo-github"></ion-icon>
                </div>
              </center>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="team__box team__box1">
            <div className="team__name">
              <center>
                <div className="team__content">
                  <h2>name</h2>
                  <p>web developer</p>
                  <ion-icon name="logo-facebook"></ion-icon>
                  <ion-icon name="logo-instagram"></ion-icon>
                  <TbBrandFiverr className="logo-fiverr"/>
                  <ion-icon name="logo-github"></ion-icon>
                </div>
              </center>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="team__box team__box1">
            <div className="team__name">
              <center>
                <div className="team__content">
                  <h2>name</h2>
                  <p>web developer</p>
                  <ion-icon name="logo-facebook"></ion-icon>
                  <ion-icon name="logo-instagram"></ion-icon>
                  <TbBrandFiverr className="logo-fiverr"/>
                  <ion-icon name="logo-github"></ion-icon>
                </div>
              </center>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="team__box team__box1">
            <div className="team__name">
              <center>
                <div className="team__content">
                  <h2>name</h2>
                  <p>web developer</p>
                  <ion-icon name="logo-facebook"></ion-icon>
                  <ion-icon name="logo-instagram"></ion-icon>
                  <TbBrandFiverr className="logo-fiverr"/>
                  <ion-icon name="logo-github"></ion-icon>
                </div>
              </center>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="team__box team__box1">
            <div className="team__name">
              <center>
                <div className="team__content">
                  <h2>name</h2>
                  <p>web developer</p>
                  <ion-icon name="logo-facebook"></ion-icon>
                  <ion-icon name="logo-instagram"></ion-icon>
                  <TbBrandFiverr className="logo-fiverr"/>
                  <ion-icon name="logo-github"></ion-icon>
                </div>
              </center>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="team__box team__box1">
            <div className="team__name">
              <center>
                <div className="team__content">
                  <h2>name</h2>
                  <p>web developer</p>
                  <ion-icon name="logo-facebook"></ion-icon>
                  <ion-icon name="logo-instagram"></ion-icon>
                  <TbBrandFiverr className="logo-fiverr"/>
                  <ion-icon name="logo-github"></ion-icon>
                </div>
              </center>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="team__box team__box1">
            <div className="team__name">
              <center>
                <div className="team__content">
                  <h2>name</h2>
                  <p>web developer</p>
                  <ion-icon name="logo-facebook"></ion-icon>
                  <ion-icon name="logo-instagram"></ion-icon>
                  <TbBrandFiverr className="logo-fiverr"/>
                  <ion-icon name="logo-github"></ion-icon>
                </div>
              </center>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="team__box team__box1">
            <div className="team__name">
              <center>
                <div className="team__content">
                  <h2>name</h2>
                  <p>web developer</p>
                  <ion-icon name="logo-facebook"></ion-icon>
                  <ion-icon name="logo-instagram"></ion-icon>
                  <TbBrandFiverr className="logo-fiverr"/>
                  <ion-icon name="logo-github"></ion-icon>
                </div>
              </center>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="team__box team__box1">
            <div className="team__name">
              <center>
                <div className="team__content">
                  <h2>name</h2>
                  <p>web developer</p>
                  <ion-icon name="logo-facebook"></ion-icon>
                  <ion-icon name="logo-instagram"></ion-icon>
                  <TbBrandFiverr className="logo-fiverr"/>
                  <ion-icon name="logo-github"></ion-icon>
                </div>
              </center>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Testimonal;

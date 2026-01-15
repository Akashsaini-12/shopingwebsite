import React from "react";

const HeaderSection = ({ children }) => (
    <div
      id="shopify-section-sections--15265868120169__annoucement"
      className="shopify-section shopify-section-group-header-group"
    >
      <section
        id="m-announcement--sections--15265868120169__annoucement"
        data-section-id="sections--15265868120169__annoucement"
        data-section-type="announcement"
        className="m-announcement-bar m-gradient m-color-badge-sale"
      >
        <m-announcement-bar
          data-enable-slider="true"
          data-enable-autoplay="true"
          data-autoplay-speed="3"
        >
          <div className="m-announcement-bar__container container">
            <div className="m-announcement-bar__wrapper swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
              <div
                className="m-announcement-bar__inner swiper-wrapper"
                style={{
                  transitionDuration: "0ms",
                  transform: "translate3d(0px, 0px, 0px)",
                }}
              >
                <div
                  className="m-announcement-bar__item swiper-slide swiper-slide-duplicate swiper-slide-active"
                  data-swiper-slide-index="1"
                  style={{ width: "570px" }}
                >
                  <div className="m-announcement-bar__content">
                    Free shipping for all orders from $60+
                  </div>
                </div>
  
                <div
                  className="m-announcement-bar__item swiper-slide swiper-slide-next swiper-slide-duplicate-prev"
                  data-swiper-slide-index="0"
                  style={{ width: "570px" }}
                >
                  <div className="m-announcement-bar__content">
                    Free shipping for all orders from $60+
                  </div>
                </div>
  
                <div
                  className="m-announcement-bar__item swiper-slide swiper-slide-duplicate-active"
                  data-swiper-slide-index="1"
                  style={{ width: "570px" }}
                >
                  <div className="m-announcement-bar__content">
                    Free shipping for all orders from $60+
                  </div>
                </div>
  
                <div
                  className="m-announcement-bar__item swiper-slide swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next"
                  data-swiper-slide-index="0"
                  style={{ width: "570px" }}
                >
                  <div className="m-announcement-bar__content">
                    Free shipping for all orders from $60+
                  </div>
                </div>
              </div>
            </div>
  
            <div className="m-slider-controls m-slider-controls--bottom-center m-slider-controls--show-nav m-slider-controls--show-pagination m-slider-controls--pagination-bullets m-slider-controls--absolute">
              <div className="m-slider-controls__wrapper">
                <button
                  className="m-slider-controls__button m-slider-controls__button-prev swiper-button-prev "
                  aria-label="Previous"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5 15L7.5 10L12.5 5"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
  
                <div className="swiper-pagination m:w-full "></div>
  
                <button
                  className="m-slider-controls__button m-slider-controls__button-next swiper-button-next "
                  aria-label="Next"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </m-announcement-bar>
  
        <div className="m-announcement-bar__close m:flex m:items-center">
          <svg
            className="m-svg-icon--medium"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
      </section>
      {children}
    </div>
  );

export default HeaderSection;
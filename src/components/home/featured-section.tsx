import "swiper/css";

import { FeaturedBot } from "../bot/featured-bot";
import { Swiper, SwiperSlide } from "swiper/react";

export function FeaturedSection(): JSX.Element {
  return (
    <div className="relative flex items-center justify-center w-full mt-10">
      <div className="flex flex-col gap-3 group/featured">
        <h1
          className="xs:group-hover/featured:translate-x-10 transition-transform
                      duration-500 delay-400 text-3xl font-bold"
        >
          Featured
        </h1>

        <div className="hidden xs:flex flex-row gap-5">
          <FeaturedBot src="/assets/harley.png" name="Harley Quinn" />
          <FeaturedBot src="/assets/harley.png" name="Harley Quinn" />
          <FeaturedBot src="/assets/harley.png" name="Harley Quinn" />
        </div>

        <div className="xs:hidden w-96">
          <Swiper
            className=""
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <FeaturedBot src="/assets/harley.png" name="Harley Quinn" />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedBot src="/assets/harley.png" name="Harley Quinn" />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedBot src="/assets/harley.png" name="Harley Quinn" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

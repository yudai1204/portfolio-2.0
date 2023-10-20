import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IntroductionCard } from "./introductionCard";

import "swiper/css";

export const IntroductionSwiper = () => {
  return (
    <Box position="relative" h="100vh">
      <Box position="absolute" top="100px">
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </Box>
      <Box w="100%" h="100%" position="absolute" top="0" left="0">
        <IntroductionCard />
      </Box>
      <Box w="100%" h="100%" position="absolute" top="0" left="0">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};

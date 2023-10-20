import { Box, Image, Flex, Icon, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useMemo } from "react";
import { SlArrowDown } from "react-icons/sl";
import { Pagination, Navigation, Autoplay } from "swiper/modules"; //使いたい機能をインポート
import { Swiper, SwiperSlide } from "swiper/react";
import { IntroductionCard } from "./introductionCard";
import { useSvhSupport } from "@/utils/useSvhSupport";

import "swiper/css";

const scroll = keyframes`
  0%, 100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(0.8rem);
    opacity: 0.5;
  }
`;

const swiperImages: string[] = ["w2.jpg", "w1.jpg", "DSC01409.JPG", "nasa_won.jpg"];

export const IntroductionSwiper = () => {
  const swiperItems = useMemo(() => {
    return [
      ...swiperImages.map((url) => (
        <Box w="100%" h="100%" key={url} bg="white">
          <Image src={url} w="100%" h="100%" objectFit="cover" alt="PortfolioImage" opacity={0.5} />
        </Box>
      )),
    ];
  }, []);

  const svhSupport = useSvhSupport();

  return (
    <Box position="relative" h={svhSupport === false ? "90vh" : "100svh"} bg="#fff" boxShadow="0 0 10px #0006">
      <Flex
        zIndex={1}
        w="100%"
        h="100%"
        position="absolute"
        top="0"
        left="0"
        justify="center"
        align="center"
        backdropFilter="blur(3px)"
      >
        <IntroductionCard />
      </Flex>
      <Box w="100%" h="100%" position="absolute" top="0" left="0" zIndex={0}>
        <Swiper
          slidesPerView={1} //一度に表示するスライドの数
          pagination={{
            clickable: true,
          }} //　何枚目のスライドかを示すアイコン、スライドの下の方にある
          navigation={false}
          loop={true}
          modules={[Navigation, Autoplay, Pagination]}
          speed={1500}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          style={{ height: "100%" }}
        >
          {swiperItems.map((item, index) => (
            <SwiperSlide key={index}>{item}</SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Flex
        position="absolute"
        bottom="50px"
        left="0"
        w="100%"
        justify="center"
        align="center"
        zIndex={1}
        direction="column"
        animation={`${scroll} 3s ease-in-out infinite`}
        filter="drop-shadow(0 0 5px #0008)"
        gap={2}
      >
        <Text fontSize={{ base: "xl", sm: "2xl" }} color="white" fontWeight="300" letterSpacing={2.5}>
          SCROLL
        </Text>
        <Icon as={SlArrowDown} fontSize="2rem" color="white" />
      </Flex>
    </Box>
  );
};

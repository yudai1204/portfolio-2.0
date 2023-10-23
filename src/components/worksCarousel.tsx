import { Box, Image, Text, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Pagination, Autoplay, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { works } from "../data";
import { useIsSafari } from "../utils/useIsSafari";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";

export const WorksCarousel = () => {
  const router = useRouter();
  const isSafari = useIsSafari();
  return (
    <Box
      w="100%"
      onClick={() => {
        router.push("/works");
      }}
    >
      <Swiper
        slidesPerView={1}
        modules={[Autoplay, Pagination, EffectCards]}
        effect="cards"
        loop={true}
        pagination={{
          clickable: true,
        }}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={{
          width: isSafari ? "80%" : "100%",
        }}
      >
        {works.map((work) => (
          <>
            {work.imageUrls?.length && (
              <SwiperSlide
                key={work.title}
                style={{ borderRadius: isSafari ? ".5rem" : "1rem", boxShadow: "0 0 8px #6666" }}
              >
                <Box
                  w="100%"
                  bgImage={`url(${work.imageUrls[0]})`}
                  bgSize="cover"
                  bgPosition="center"
                  h="100%"
                  cursor="pointer"
                >
                  <Box backdropFilter="blur(10px)" w="100%" h="100%" bgColor="#fff5" position="relative">
                    <Image src={work.imageUrls[0]} alt={work.title} w="100%" aspectRatio="16/10" objectFit="contain" />
                    <Flex
                      pos="absolute"
                      bottom="0"
                      left="0"
                      bgColor="#0006"
                      boxShadow="0 0 8px #0007"
                      h="30%"
                      w="100%"
                      justify="center"
                      align="center"
                    >
                      <Text
                        color="white"
                        textAlign="center"
                        fontSize={{ base: "md", md: "xl" }}
                        fontWeight="600"
                        pb="1rem"
                      >
                        {work.title} / {work.year}
                      </Text>
                    </Flex>
                  </Box>
                </Box>
              </SwiperSlide>
            )}
          </>
        ))}
      </Swiper>
    </Box>
  );
};

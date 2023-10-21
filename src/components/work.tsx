import {
  Card,
  CardBody,
  CardFooter,
  Box,
  Text,
  Heading,
  Image,
  Button,
  Stack,
  Icon,
  Link,
  Badge,
  Flex,
} from "@chakra-ui/react";
import { useMemo } from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Work as WorkType } from "../types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type Props = {
  work: WorkType;
};
export const Work = (props: Props) => {
  const { work } = props;

  const imageNodes = useMemo(
    () => [
      ...(work?.imageUrls?.map((url) => (
        <Image key={url} src={`/${url}`} alt={work.title} w="100%" aspectRatio="16/9" objectFit="cover" />
      )) || []),
      ...(work?.videoUrls?.map((url) => (
        <iframe
          key={url}
          src={"https://www.youtube.com/embed/" + url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover" }}
        />
      )) || []),
    ],
    [work],
  );

  return (
    <Card direction="column" overflow="hidden" variant="outline" position="relative">
      <Box w="100%">
        <Swiper
          slidesPerView={1}
          modules={[Navigation, Autoplay, Pagination]}
          navigation={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          speed={1000}
          autoplay={{
            delay: 4000,
            // disableOnInteraction: false,
          }}
          style={{ width: "100%", boxShadow: "0 0 6px #6663" }}
        >
          {imageNodes.map((node, idx) => (
            <SwiperSlide key={idx}>{node}</SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Stack>
        <CardBody mb="3rem">
          <Heading size="md">{work.title}</Heading>
          <Text py="2">{work.year}</Text>
          <Text py="2">{work.shortDescription}</Text>
          <Flex gap={1} wrap="wrap" py="1rem">
            {work.tags &&
              work.tags.map((tag) => (
                <Badge key={tag} fontSize="sm" color="gray.600">
                  {tag}
                </Badge>
              ))}
          </Flex>
          <Box>
            {work.urls &&
              work.urls.map((item) => (
                <Link key={item.url} variant="outline" href={item.url} target="_blank" rel="noopener">
                  <Text textDecor="underline" fontSize="90%" color="gray.600">
                    {item.name}
                    <Icon as={FiExternalLink} ml="2px" />
                  </Text>
                </Link>
              ))}
          </Box>
        </CardBody>

        <CardFooter position="absolute" bottom="0" left="0" w="100%" gap={1}>
          {work.longDescription && (
            <Button variant="outline" colorScheme="teal">
              View More
            </Button>
          )}
          {work.githubUrl && (
            <Button
              variant="outline"
              onClick={() => {
                window.open(work.githubUrl, "_blank");
              }}
            >
              <Icon aria-label="Github" as={BsGithub} variant="solid" />
              <Text ml="2">Github</Text>
            </Button>
          )}
        </CardFooter>
      </Stack>
    </Card>
  );
};

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
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalOverlay,
  ModalCloseButton,
  useColorModeValue as useCM,
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

type ModalProps = {
  work: WorkType;
  onClose: () => void;
  isOpen: boolean;
  imageNodes: JSX.Element[];
};
export const WorkModal = (props: ModalProps) => {
  const { work, onClose, isOpen, imageNodes } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{ base: "full", md: "3xl", xl: "5xl" }}>
      <ModalOverlay />
      <ModalContent mt="32px" maxH="calc(100% - 64px)">
        <ModalHeader boxShadow="0 0 6px #6664">
          <Heading as="h2" size="lg">
            {work.title}
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <Box overflow="auto">
          <ModalBody>
            {work.tags && (
              <Flex gap={1} wrap="wrap" py="1rem">
                {work.tags.map((tag) => (
                  <Badge key={tag} fontSize="sm" color={useCM("gray.600", "gray.400")}>
                    {tag}
                  </Badge>
                ))}
              </Flex>
            )}
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
                delay: 7000,
                // disableOnInteraction: false,
              }}
              style={{ width: "100%", maxWidth: "640px", boxShadow: "0 0 6px #666a", borderRadius: ".5rem" }}
            >
              {imageNodes.map((node, idx) => (
                <SwiperSlide key={idx}>{node}</SwiperSlide>
              ))}
            </Swiper>
            <Box p="2rem">
              <Box py="1rem">{work.longDescription}</Box>
              <Box>
                {work.urls &&
                  work.urls.map((item) => (
                    <Link
                      key={item.url}
                      variant="outline"
                      href={item.url}
                      isExternal
                      w="fit-content"
                      display="block"
                      borderRadius="5px"
                      _hover={{ bgColor: useCM("gray.100", "gray.600") }}
                    >
                      <Text
                        textDecor="underline"
                        fontSize="90%"
                        color={useCM("gray.600", "gray.400")}
                        w="fit-content"
                        display="block"
                        py="3px"
                        px="5px"
                      >
                        {item.name}
                        <Icon as={FiExternalLink} ml="2px" />
                      </Text>
                    </Link>
                  ))}
              </Box>
            </Box>
            <Box w="100%" py="0.5rem">
              <Flex w="100%" align="center" gap={2}>
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
                <Text>制作: {work.year}年</Text>
              </Flex>
            </Box>
          </ModalBody>
        </Box>
      </ModalContent>
    </Modal>
  );
};

type Props = {
  work: WorkType;
};
export const Work = (props: Props) => {
  const { work } = props;
  const imageNodes = useMemo(
    () => [
      ...(work?.imageUrls?.map((url) => (
        <Image key={url} src={`/${url}`} alt={work.title} w="100%" aspectRatio="16/10" objectFit="cover" />
      )) || []),
      ...(work?.videoUrls?.map((url) => (
        <iframe
          key={url}
          src={"https://www.youtube.com/embed/" + url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover" }}
        />
      )) || []),
    ],
    [work],
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Card
      direction="column"
      overflow="hidden"
      variant="outline"
      position="relative"
      transition="0.3s"
      _hover={useCM(
        { bgColor: "#fafafa", boxShadow: "2px 2px 4px #6662" },
        { bgColor: "#303b5233", boxShadow: "2px 2px 4px #3342" },
      )}
      role="group"
    >
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
            <SwiperSlide key={idx} style={{ backgroundColor: "#000" }}>
              <Box
                transition="0.5s"
                _groupHover={{ transform: "scale(1.03)" }}
                onClick={onOpen}
                opacity={useCM(1, 0.7)}
              >
                {node}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Stack>
        <CardBody mb="3rem" onClick={onOpen} cursor="pointer">
          <Heading size="md">{work.title}</Heading>
          <Text py="2">{work.year}</Text>
          <Text py="2">{work.shortDescription}</Text>
          <Flex gap={1} wrap="wrap" py="1rem">
            {work.tags &&
              work.tags.map((tag) => (
                <Badge key={tag} fontSize="sm" color={useCM("gray.600", "gray.400")}>
                  {tag}
                </Badge>
              ))}
          </Flex>
          <Box
            pb=".5rem"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {work.urls &&
              work.urls.map((item) => (
                <Link
                  key={item.url}
                  variant="outline"
                  href={item.url}
                  isExternal
                  w="fit-content"
                  display="block"
                  _hover={{ bgColor: useCM("gray.100", "gray.600") }}
                  borderRadius="5px"
                >
                  <Text
                    textDecor="underline"
                    fontSize="90%"
                    color={useCM("gray.600", "gray.400")}
                    w="fit-content"
                    display="block"
                    px="5px"
                    py="3px"
                    my="1px"
                  >
                    {item.name}
                    <Icon as={FiExternalLink} ml="2px" />
                  </Text>
                </Link>
              ))}
          </Box>
        </CardBody>

        <CardFooter position="absolute" bottom="0" left="0" w="100%" gap={1}>
          {work.longDescription && (
            <Button variant="outline" colorScheme="teal" onClick={onOpen}>
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
      <WorkModal work={work} onClose={onClose} isOpen={isOpen} imageNodes={imageNodes} />
    </Card>
  );
};

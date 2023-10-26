import {
  useDisclosure,
  Box,
  Flex,
  Link,
  Text,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerFooter,
  VStack,
  Divider,
  DrawerBody,
  DrawerCloseButton,
  useColorModeValue as useCM,
} from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { GoHome, GoFileDirectory, GoPerson, GoBook } from "react-icons/go";
import { IconImg } from "./iconImg";
import { DarkModeSwitch } from "@/components/darkModeSwitch";
import { useWideHeader } from "@/utils/useWideHeader";

const links = [
  {
    title: "Home",
    href: "/",
    icon: GoHome,
  },
  {
    title: "Works",
    href: "/works",
    icon: GoFileDirectory,
  },
  {
    title: "About",
    href: "/about",
    icon: GoBook,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: GoPerson,
  },
];

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

type Props = {
  active: string;
};
const MenuWide = (props: Props) => {
  const { active } = props;
  return (
    <Box position="fixed" top={0} left={0} w="100%" h="60px" my="10px" zIndex={1000}>
      <Flex w="100%" maxW="880px" margin="0 auto" h="100%" justify="center" align="center" gap="1rem">
        <Link href="/" _hover={{ opacity: 0.9 }} w="10%" h="100%" title="yudai04">
          <Flex w="100%" h="100%" align="center">
            <IconImg size="64px" />
          </Flex>
        </Link>
        <Flex
          w="90%"
          maxW="640px"
          h="100%"
          bg={useCM("#f4f4f49f", "#0b0b1b9f")}
          boxShadow={`0 0 10px ${useCM("#8884", "#0006")}`}
          backdropFilter="blur(3px)"
          borderRadius="xl"
          justify="space-around"
          align="center"
        >
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              display="block"
              w={`${90 / links.length}%`}
              h="80%"
              _hover={{}}
              _focus={{ outline: "none" }}
            >
              <Flex
                w="100%"
                justify="center"
                borderRadius="md"
                align="center"
                h="100%"
                transition="0.3s"
                _hover={{ bgColor: useCM("#fff9", "#3339") }}
                gap={1.5}
              >
                <Icon as={link.icon} fontSize="lg" />
                <Text fontSize="md" fontWeight={active === link.title.toLowerCase() ? "600" : "300"}>
                  {link.title}
                </Text>
              </Flex>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

const MenuNarrow = (props: Props) => {
  const { active } = props;
  const { isOpen: isMenuOpen, onOpen: onMenuOpen, onClose: onMenuClose } = useDisclosure();
  const closeRef = useRef(null);
  return (
    <>
      <Flex
        position="fixed"
        top="0"
        left="0"
        p="8px"
        w="100%"
        justify="left"
        align="center"
        zIndex="1000"
        bg={useCM("#fffa", "#0b0b1b9f")}
        backdropFilter="blur(3px)"
        boxShadow={`0 0 10px ${useCM("#ddda", "#0006")}`}
        userSelect="none"
      >
        <Icon
          as={AiOutlineMenu}
          fontSize="2.4rem"
          color={useCM("gray.700", "gray.300")}
          opacity="0.8"
          cursor="pointer"
          onClick={onMenuOpen}
        />
        <Box w="100%" textAlign="center">
          <Text fontWeight={200} onClick={scrollToTop} cursor="pointer">
            yudai04 portfolio
          </Text>
        </Box>
      </Flex>
      <Drawer
        isOpen={isMenuOpen}
        placement="left"
        onClose={onMenuClose}
        size="xs"
        closeOnEsc={true}
        initialFocusRef={closeRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody w="100%" p={0}>
            <Box p="8px">
              <Icon
                as={AiOutlineClose}
                fontSize="2.4rem"
                color={useCM("gray.700", "gray.500")}
                cursor="pointer"
                onClick={onMenuClose}
              />
            </Box>
            <DrawerCloseButton opacity="0" ref={closeRef} position="absolute" top="0" left="0" />
            <VStack>
              <Box>
                <Link
                  href="/"
                  _hover={useCM({ opacity: 1 }, { opacity: 0.8 })}
                  transition=".3s"
                  role="group"
                  w="100%"
                  h="100%"
                >
                  <Flex
                    align="center"
                    justify="center"
                    mb="20px"
                    px="48px"
                    py="16px"
                    borderRadius="2xl"
                    gap={5}
                    boxShadow={`1px 1px 4px ${useCM("#9903", "#0009")}`}
                    w="fit-content"
                    transition=".3s"
                    bg={useCM("linear-gradient(70deg, #fffabc33, #e0ebaf33)", "#62697699")}
                    _groupHover={useCM(
                      { bg: "linear-gradient(70deg, #fffabc55, #e0ebaf55)", boxShadow: "1px 2px 4px #9904" },
                      {},
                    )}
                  >
                    <IconImg size="48px" />
                    <Box>
                      <Text>yudai04</Text>
                      <Text color="gray.400" fontSize="sm">
                        Engeneering Student
                      </Text>
                    </Box>
                  </Flex>
                </Link>
              </Box>
              <VStack spacing={2} px="15px">
                {links.map((link, idx) => (
                  <>
                    {idx === 0 && <Divider />}
                    <Link
                      key={link.title}
                      href={link.href}
                      display="block"
                      w="100%"
                      _hover={{}}
                      _focus={{ outline: "none" }}
                    >
                      <Flex
                        px="5rem"
                        borderRadius="md"
                        align="center"
                        h="45px"
                        transition="0.3s"
                        _hover={{ bgColor: useCM("#eee", "#44546e") }}
                        gap={5}
                      >
                        <Icon as={link.icon} fontSize="2xl" />
                        <Text fontSize="xl" fontWeight={active === link.title.toLowerCase() ? "500" : "300"}>
                          {link.title}
                        </Text>
                      </Flex>
                    </Link>
                    <Divider />
                  </>
                ))}
              </VStack>
              <Box mt="1rem">
                <DarkModeSwitch details />
              </Box>
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Text fontSize="sm" color="gray.500" textAlign="center" w="100%">
              © 2023 yudai04.dev
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export const Menu = (props: Props) => {
  const { active } = props;
  const wideHeader = useWideHeader();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {isLoaded &&
        (wideHeader ? (
          <>
            <Box
              position="fixed"
              bottom={0}
              right={0}
              m=".8rem"
              w="fit-content"
              h="fit-content"
              zIndex={10000000}
              display={{ base: "none", md: "block" }}
            >
              <DarkModeSwitch />
            </Box>
            <MenuWide active={active} />
          </>
        ) : (
          <MenuNarrow active={active} />
        ))}
    </>
  );
};

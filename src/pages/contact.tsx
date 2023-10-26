import { Box, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import { Footer } from "../components/footer";
import { Menu } from "../components/menu";
import { SNSBox } from "@/components/snsBox";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact | yudai04 portfolio</title>
      </Head>
      <Box bgColor="#ffe8b611" minH="100vh" position="relative">
        <Menu active="contact" />
        <Box maxW="780px" p="1rem" pt={{ base: "3rem", md: "5rem" }} mx="auto" pb="120px">
          <Heading as="h2" size="lg" textAlign="center" py="2rem">
            Contact
          </Heading>
          <Text>各種SNSからのDMや、メールにてご連絡ください。</Text>
          <SNSBox direction="column" gap="1rem" align="flex-start" inGap="1rem" displayDetail />
        </Box>
        <Box position="absolute" bottom="0" w="100%">
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Contact;

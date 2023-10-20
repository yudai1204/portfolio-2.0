import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { Footer } from "../components/footer";
import { Menu } from "../components/menu";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact | yudai04 portfolio</title>
      </Head>
      <Box bgColor="#ffe8b611" minH="100vh">
        <Menu active="contact" />

        <Footer />
      </Box>
    </>
  );
};

export default Contact;

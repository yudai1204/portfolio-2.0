import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { Footer } from "../components/footer";
import { Menu } from "../components/menu";
import { IntroductionCard } from "@/components/introductionCard";

const About = () => {
  return (
    <>
      <Head>
        <title>About | yudai04 portfolio</title>
      </Head>
      <Box bgColor="#ffe8b611" minH="100vh">
        <Menu active="about" />
        <Box zIndex={0} mb="2rem">
          <IntroductionCard />
        </Box>

        <Footer />
      </Box>
    </>
  );
};

export default About;

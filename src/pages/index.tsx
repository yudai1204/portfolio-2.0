import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { IntroductionCard } from "../components/introductionCard";
import { Menu } from "../components/menu";

const Home = () => {
  return (
    <>
      <Head>
        <title>yudai04 portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="yudai04's portfolio" />
        <meta property="og:title" content="yudai04's portfolio" />
        <meta property="og:site_name" content="yudai04's portfolio" />
        <meta property="og:description" content="yudai04's portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yudai04.dev/ogp.png" />
      </Head>
      <Box>
        <Menu active="home" />
        <Box p="1rem" pt={{ base: "4rem", md: "7rem" }}>
          <IntroductionCard />
        </Box>
      </Box>
    </>
  );
};

export default Home;

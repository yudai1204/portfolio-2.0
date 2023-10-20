import { Box, Text, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { Footer } from "../components/footer";
import { Menu } from "../components/menu";
import { works } from "../data";
import type { Work } from "../types";

type Props = {
  work: Work;
};
const Work = (props: Props) => {
  const { work } = props;
  return (
    <Box>
      <Heading as="h4" fontSize="1.2rem">
        {work.title}
      </Heading>
      <Text>{work.shortDescription}</Text>
    </Box>
  );
};

const Works = () => {
  return (
    <>
      <Head>
        <title>Works | yudai04 portfolio</title>
      </Head>
      <Box bgColor="#ffe8b611" minH="100vh">
        <Menu active="works" />
        {works.map((work) => (
          <Work key={work.title} work={work} />
        ))}
        <Footer />
      </Box>
    </>
  );
};

export default Works;

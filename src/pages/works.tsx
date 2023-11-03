import { Box, Container, Grid, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { Footer } from "../components/footer";
import { Menu } from "../components/menu";
import { Work } from "../components/work";
import { works } from "../data";

const Works = () => {
  return (
    <>
      <Head>
        <title>Works | yudai04 portfolio</title>
      </Head>
      <Box bgColor="#ffe8b611" minH="100vh" pt={{ base: "3rem", md: "5rem" }}>
        <Menu active="works" />
        <Heading as="h2" size="lg" textAlign="center" py="2rem">
          Works
        </Heading>
        <Container maxW="1600px" mx="auto">
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }}
            gap={6}
            px={{ base: "0.5rem", md: "5rem" }}
          >
            {works.map((work) => (
              <Work key={work.title} work={work} />
            ))}
          </Grid>
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default Works;

import { Box, Heading, Text, Image, Button, Spinner } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMemo, useEffect, useState } from "react";
import { Footer } from "../../components/footer";
import { Menu } from "../../components/menu";
import { works } from "../../data";
import { Link } from "@/components/Link";
import { WorkBody } from "@/components/work";

const Work = () => {
  const router = useRouter();
  const { id } = router.query;
  const work = works.find((work) => work.id === id);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

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

  if (!work) {
    if (isLoading) {
      return (
        <Box bgColor="#ffe8b611" minH="100vh" pt={{ base: "3rem", md: "5rem" }} textAlign="center">
          <Spinner size="xl" />
        </Box>
      );
    }
    return (
      <Box bgColor="#ffe8b611" minH="100vh" pt={{ base: "3rem", md: "5rem" }} textAlign="center">
        <Heading as="h2" size="lg" py="2rem">
          404 Not Found
        </Heading>
        <Text>指定されたページは存在しません。</Text>

        <Link href="/works" textDecor="underline">
          <Text>Works一覧へ</Text>
        </Link>
      </Box>
    );
  }

  return (
    <>
      <Head>
        <title>Works | yudai04 portfolio</title>
      </Head>
      <Box bgColor="#ffe8b611" minH="100vh">
        <Menu active="works" />
        <Box zIndex={0} pt={{ base: "3rem", md: "5rem" }}>
          <Box maxW="780px" mx="auto" pb="2rem" pos="relative" mt="1rem">
            <Box pt="1rem">
              <Heading as="h2" size="lg" textAlign="center" py="2rem">
                {work.title}
              </Heading>
              <WorkBody work={work} imageNodes={imageNodes} centering />
            </Box>
            <Box pos="absolute" top="0" left={{ base: ".5rem", md: "0" }}>
              <Link href="/works">
                <Button variant="outline">Works一覧へ</Button>
              </Link>
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Work;

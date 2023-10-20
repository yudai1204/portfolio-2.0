import { Box, Button, Center, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { IntroductionCard } from "../components/introductionCard";
import { Menu } from "../components/menu";
import { Paragraph } from "../components/paragraph";

const Home = () => {
  const router = useRouter();
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

        <Paragraph title="About Me">
          <Text>
            中学でロボコンに出場する部活動に入りロボットプログラミングや電子工作を学びました。
            また、同時期にBasic言語で簡易的なゲームやツール等を作成し、Windows上でのGUI開発を学びました。
          </Text>
          <Text>
            高校では文化祭でApacheを使用したWebサーバー運用の知識も携えました。
            現在は大学で情報系を専攻し、フロントエンドを中心にデジタルアートやゲーム開発、電子工作などを行っています。
          </Text>
          <Center w="100%">
            <Button
              onClick={() => {
                router.push("/about");
              }}
              mt=".5rem"
              colorScheme="teal"
              px="8rem"
            >
              About
            </Button>
          </Center>
        </Paragraph>

        <Paragraph title="Works">
          <Text>詳細はこちらのページをご覧ください。</Text>
          <Center w="100%">
            <Button
              onClick={() => {
                router.push("/about");
              }}
              mt=".5rem"
              colorScheme="teal"
              px="8rem"
            >
              Works
            </Button>
          </Center>
        </Paragraph>
      </Box>
    </>
  );
};

export default Home;

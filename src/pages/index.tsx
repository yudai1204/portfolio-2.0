import { Box, Center, Text, Divider, Link, Icon } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { FiExternalLink } from "react-icons/fi";
import { GoFileDirectory } from "react-icons/go";
import { LuWrench } from "react-icons/lu";
import { MdPersonOutline, MdSlideshow, MdOutlineGroups } from "react-icons/md";
import { RiAwardLine, RiChatHistoryLine } from "react-icons/ri";
import { CanvaSlide } from "../components/canvaSlide";
import { Footer } from "../components/footer";
import { IntroductionSwiper } from "../components/introductionSwiper";
import { Menu } from "../components/menu";
import { Paragraph } from "../components/paragraph";
import { affiliations, awards } from "../data";
import { CustomButton as Button } from "@/components/customButton";
import { History } from "@/components/history";
import { Skills } from "@/components/skills";
import { WorksCarousel } from "@/components/worksCarousel";

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
      <Box bgColor="#ffe8b611" minH="100vh">
        <Menu active="home" />
        <Box zIndex={0} mb="2rem">
          <IntroductionSwiper />
        </Box>
        <Box px={{ base: "1rem", md: "none" }}>
          <Paragraph title="About Me" icon={MdPersonOutline}>
            <Text>
              芝浦工業大学情報工学科に所属する大学3年生です。プログラミングやデザインを通した「ものづくり」に興味があり活動しています。
            </Text>
            <Text>
              中学でロボコンに出場する部活動に入りロボットプログラミングや電子工作を学びました。
              また、同時期にBasic言語で簡易的なゲームやツール等を作成し、Windows上でのアプリケーション開発を学びました。
            </Text>
            <Text>高校では文化祭でApacheを使用したWebサーバー運用の知識も携えました。</Text>
            <Text>
              現在は大学で情報系を専攻しながら、インターンシップ、サークル、趣味などでフロントエンドを中心にデジタルアートやゲーム開発、電子工作などを行っています。
            </Text>
            <Center w="100%">
              <Button
                onClick={() => {
                  router.push("/about");
                }}
                mt="1rem"
                colorScheme="teal"
                px="8rem"
              >
                About Me
              </Button>
            </Center>
          </Paragraph>

          <Divider maxW="820px" mx="auto" borderColor="#ccc" />

          <Paragraph title="Slide" icon={MdSlideshow}>
            <Text>自己紹介スライドです。</Text>
            <Box w="100%" py="1rem">
              <CanvaSlide />
            </Box>
            <Box>
              Link:{" "}
              <a
                href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFlMuGeCWA&#x2F;view?utm_content=DAFlMuGeCWA&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
                target="_blank"
                rel="noopener"
                style={{
                  textDecoration: "underline",
                }}
              >
                yudai04 | Self-Introduction
              </a>
            </Box>
          </Paragraph>

          <Divider maxW="820px" mx="auto" borderColor="#ccc" />

          <Paragraph title="Award" icon={RiAwardLine}>
            {awards.map((text) => (
              <Text key={text}>{text}</Text>
            ))}
          </Paragraph>

          <Divider maxW="820px" mx="auto" borderColor="#ccc" />

          <Paragraph title="Affiliation" icon={MdOutlineGroups}>
            {affiliations.map((aff) => (
              <>
                {!aff.link && <Text key={aff.name}>{aff.name}</Text>}
                {aff.link && (
                  <Link href={aff.link} isExternal>
                    <Text key={aff.name}>
                      {aff.name + " "}
                      <Icon as={FiExternalLink} />
                    </Text>
                  </Link>
                )}
              </>
            ))}
          </Paragraph>

          <Divider maxW="820px" mx="auto" borderColor="#ccc" />

          <Paragraph title="Works" icon={GoFileDirectory}>
            <Box w="100%" m="1rem" mx="auto" maxW="580px">
              <WorksCarousel />
            </Box>
            <Text textAlign="center">過去に制作した作品など、詳細はこちらのページをご覧ください。</Text>
            <Center w="100%">
              <Button
                onClick={() => {
                  router.push("/works");
                }}
                colorScheme="teal"
                px="8rem"
              >
                Works
              </Button>
            </Center>
          </Paragraph>

          <Divider maxW="820px" mx="auto" borderColor="#ccc" />

          <Paragraph title="History" icon={RiChatHistoryLine}>
            <History rightonly nodetail />
            <Text mt="1rem" textAlign="center" w="100%">
              過去の作品や所属のタイムラインの詳細はこちらのページをご覧ください。
            </Text>
            <Center w="100%">
              <Button
                onClick={() => {
                  router.push("/about#history");
                }}
                colorScheme="teal"
                px="8rem"
              >
                More Details
              </Button>
            </Center>
          </Paragraph>

          <Paragraph title="Skills" icon={LuWrench}>
            <Skills />
          </Paragraph>
        </Box>

        <Footer />
      </Box>
    </>
  );
};

export default Home;

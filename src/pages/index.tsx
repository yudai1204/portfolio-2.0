import { Box, Center, Text, Divider, Link, Icon } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { FiExternalLink } from "react-icons/fi";
import { CanvaSlide } from "../components/canvaSlide";
import { Footer } from "../components/footer";
import { IntroductionSwiper } from "../components/introductionSwiper";
import { Menu } from "../components/menu";
import { Paragraph } from "../components/paragraph";
import { SkillDetail } from "../components/skillDetail";
import { affiliations, awards, skills } from "../data";
import { CustomButton as Button } from "@/components/customButton";
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
          <Paragraph title="About Me">
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

          <Paragraph title="Slide">
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

          <Paragraph title="Award">
            {awards.map((text) => (
              <Text key={text}>{text}</Text>
            ))}
          </Paragraph>

          <Divider maxW="820px" mx="auto" borderColor="#ccc" />

          <Paragraph title="Affiliation">
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

          <Paragraph title="Works">
            <Box w="100%" m="1rem" mx="auto" maxW="580px">
              <WorksCarousel />
            </Box>
            <Text>過去に制作した作品など、詳細はこちらのページをご覧ください。</Text>
            <Center w="100%">
              <Button
                onClick={() => {
                  router.push("/works");
                }}
                mt="1rem"
                colorScheme="teal"
                px="8rem"
              >
                Works
              </Button>
            </Center>
          </Paragraph>

          <Divider maxW="820px" mx="auto" borderColor="#ccc" />

          <Paragraph title="Skills">
            <SkillDetail title="プログラミング言語">{skills.lang.join(" / ")}</SkillDetail>
            <SkillDetail title="フレームワーク">{skills.framework.join(" / ")}</SkillDetail>
            <SkillDetail title="インフラ環境">{skills.infra.join(" / ")}</SkillDetail>
            <SkillDetail title="ツール">{skills.tool.join(" / ")}</SkillDetail>
          </Paragraph>
        </Box>

        <Footer />
      </Box>
    </>
  );
};

export default Home;

import { Box, Center, Text, Divider, Link, Icon, CheckboxGroup, HStack, Checkbox } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
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
import { SkillDetail } from "../components/skillDetail";
import { affiliations, awards, skills } from "../data";
import { CustomButton as Button } from "@/components/customButton";
import { History } from "@/components/history";
import { WorksCarousel } from "@/components/worksCarousel";

const Home = () => {
  const router = useRouter();
  const [leftOnly, setLeftOnly] = useState(false);
  const [rightOnly, setRightOnly] = useState(false);

  const onChangeHistoryCheckbox = (values: string[]) => {
    if (values.length === 2) {
      setLeftOnly(true);
      setRightOnly(true);
    } else if (values.length === 0) {
      setLeftOnly(false);
      setRightOnly(false);
    } else if (values[0] === "left") {
      setLeftOnly(true);
      setRightOnly(false);
    } else {
      setLeftOnly(false);
      setRightOnly(true);
    }
  };
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

          <Paragraph title="History" icon={RiChatHistoryLine}>
            <CheckboxGroup
              defaultValue={["left", "right"]}
              colorScheme="teal"
              size="lg"
              onChange={onChangeHistoryCheckbox}
            >
              <HStack spacing="24px">
                <Checkbox value="left">制作物・受賞</Checkbox>
                <Checkbox value="right">所属</Checkbox>
              </HStack>
            </CheckboxGroup>
            <History rightonly={rightOnly} leftonly={leftOnly} />
            <Center w="100%">
              <Button
                onClick={() => {
                  router.push("/about");
                }}
                mt="1rem"
                colorScheme="teal"
                px="8rem"
              >
                More Details
              </Button>
            </Center>
          </Paragraph>

          <Paragraph title="Skills" icon={LuWrench}>
            <SkillDetail title="プログラミング言語">{skills.lang.map((x) => x.name).join(" / ")}</SkillDetail>
            <SkillDetail title="フレームワーク">{skills.framework.map((x) => x.name).join(" / ")}</SkillDetail>
            <SkillDetail title="インフラ環境">{skills.infra.map((x) => x.name).join(" / ")}</SkillDetail>
            <SkillDetail title="ツール">{skills.tool.map((x) => x.name).join(" / ")}</SkillDetail>
          </Paragraph>
        </Box>

        <Footer />
      </Box>
    </>
  );
};

export default Home;

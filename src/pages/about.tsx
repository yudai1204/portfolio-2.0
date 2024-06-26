import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMemo, useEffect, useRef } from "react";
import { IoTelescopeOutline } from "react-icons/io5";
import { LuWrench } from "react-icons/lu";
import { MdPersonOutline } from "react-icons/md";
import { RiChatHistoryLine } from "react-icons/ri";
import { Footer } from "../components/footer";
import { Menu } from "../components/menu";
import { History } from "@/components/history";
import { IntroductionCard } from "@/components/introductionCard";
import { Paragraph } from "@/components/paragraph";
import { Skills } from "@/components/skills";
import { SNSBox } from "@/components/snsBox";

const About = () => {
  const myOld = useMemo(() => {
    const birth = new Date(2001, 12 - 1, 4);
    const now = new Date();
    const diff = now.getTime() - birth.getTime();
    const diffDate = new Date(diff);
    const age = diffDate.getUTCFullYear() - 1970;
    // const month = diffDate.getUTCMonth();
    return age;
  }, []);

  const router = useRouter();
  const historyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (historyRef && router.asPath.endsWith("#history")) {
        const scrollHeight = historyRef.current?.offsetTop;
        if (scrollHeight) window.scrollTo({ top: scrollHeight - 50, behavior: "smooth" });
      }
    }, 500);
  }, [router.asPath, historyRef]);

  return (
    <>
      <Head>
        <title>About | yudai04 portfolio</title>
      </Head>
      <Box bgColor="#ffe8b611" minH="100vh">
        <Menu active="about" />
        <Box zIndex={0} pt={{ base: "3rem", md: "5rem" }}>
          <Heading as="h2" size="lg" textAlign="center" py="2rem">
            About
          </Heading>
          <Box py="2rem" w="100%">
            <IntroductionCard />
            <Flex mx="0" p="0" mt="2rem" justify="center" align="center" display={{ base: "none", md: "flex" }}>
              <SNSBox boxShadow="md" gap="1rem" />
            </Flex>
          </Box>
          <Box maxW="780px" mx="auto" pb="2rem">
            <Paragraph title="About Me" icon={MdPersonOutline}>
              <Text>檜山侑大 ({myOld})</Text>
              <Text>
                芝浦工業大学情報工学科に所属する大学4年生です。プログラミングやデザインを通した「ものづくり」に興味があり活動しています。
              </Text>
              <Text>
                中学でロボコンに出場する部活動に入りロボットプログラミングや電子工作を学びました。
                また、同時期にBasic言語で簡易的なゲームやツール等を作成し、Windows上でのアプリケーション開発を学びました。
              </Text>
              <Text>高校では文化祭でApacheを使用したWebサーバー運用の知識も携えました。</Text>
              <Text>
                現在は大学で情報系を専攻しながら、インターンシップ、サークル、趣味などでフロントエンドを中心にデジタルアートやゲーム開発、電子工作などを行っています。
              </Text>
              <Text>
                インターンシップでは、Reactやrailsなどを使ったWeb開発と、Unityを使ったアプリケーション開発を行っています。
              </Text>
            </Paragraph>

            <Paragraph title="Vision" icon={IoTelescopeOutline}>
              <Text>ユーザーにとってより良い製品を作れるエンジニアになりたいと考えています。</Text>
              <Text>具体的には、UI/UXなどを通じてプロダクトへの体験をより良いものにしたいと考えています。</Text>
              <Text>どんなに良い着眼点や機能がある製品であっても、UI/UXというユーザーが直接触れる部分が大切です。</Text>
              <Text>
                そのため、ユーザー目線に立ってどのような実装を行ったら100%の性能を引き出せるかを重視したエンジニアになりたいです。
              </Text>
            </Paragraph>

            <Paragraph title="Skills" icon={LuWrench}>
              <Skills />
            </Paragraph>
            <Box ref={historyRef} />
            <Paragraph title="History" icon={RiChatHistoryLine}>
              <History />
            </Paragraph>
          </Box>
        </Box>

        <Footer />
      </Box>
    </>
  );
};

export default About;

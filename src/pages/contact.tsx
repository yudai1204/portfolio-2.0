import { Box, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import { Footer } from "../components/footer";
import { Menu } from "../components/menu";

const contacts = [
  {
    genre: "Email",
    value: "yudai1204u(at_mark)gmail.com",
  },
  {
    genre: "GitHub",
    value: "@yudai1204",
    url: "https://github.com/yudai1204",
  },
  {
    genre: "Twitter",
    value: "@yudai1204",
    url: "https://twitter.com/yudai1204",
  },
  {
    genre: "Wantedly",
    value: "@yudai1204",
    url: "https://www.wantedly.com/id/yudai1204",
  },
  {
    genre: "crowdworks",
    value: "@yu0404",
    url: "https://crowdworks.jp/public/employees/4780926",
  },
];

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact | yudai04 portfolio</title>
      </Head>
      <Box bgColor="#ffe8b611" minH="100vh">
        <Menu active="contact" />
        <Box maxW="780px" p="1rem" pt={{ base: "3rem", md: "5rem" }} mx="auto">
          <Heading as="h2" size="lg" textAlign="center" py="2rem">
            Contact
          </Heading>
          <Text>
            botによる迷惑メール防止のため、メールアドレスは＠を(at_mark)に置換して記述しております。
            <br />
            メールでのご連絡時はお手数おかけいたしますが適宜読み替えてご送信ください。
          </Text>
          <Box mx="1rem" py="2rem">
            {contacts.map((contact, idx) => (
              <Box key={idx}>
                <Text fontWeight="600">{contact.genre}</Text>
                {contact.url && (
                  <a href={contact.url} target="_blank">
                    <Text textDecor="underline">{contact.value}</Text>
                  </a>
                )}
                {!contact.url && <Text>{contact.value}</Text>}
              </Box>
            ))}
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Contact;

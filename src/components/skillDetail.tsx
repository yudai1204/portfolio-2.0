import { Box, Heading, Image, Text, Grid, GridItem, Flex, Icon } from "@chakra-ui/react";
import { MdStar, MdStarBorder } from "react-icons/md";
import type { Skill } from "@/types";

type Props = {
  title: string;
  data: Skill[];
};
export const SkillDetail = (props: Props) => {
  const { title, data } = props;
  return (
    <Box w="100%" mb=".5rem">
      <Heading as="h4" fontSize="1.2rem" mb="1rem">
        {title}
      </Heading>
      <Box w="100%" maxW="880px">
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(5, 1fr)" }}
          rowGap="1rem"
          columnGap="2rem"
          w="fit-content"
          margin="0 auto"
        >
          {data.map((x, i) => (
            <GridItem key={i} w="100%">
              <Flex
                align="center"
                w="100%"
                h="3rem"
                gap=".5rem"
                title={x.description ?? null}
                transition="all .2s"
                _hover={{ opacity: 0.7 }}
              >
                <Image src={x.icon} alt={x.name} w="2.5rem" h="2.5rem" />
                <Box>
                  <Text fontSize="sm" ml=".3rem">
                    {x.name}
                  </Text>
                  <Flex gap="0">
                    {Array.from({ length: 5 }).map((_, i) =>
                      i < x.level ? (
                        <Icon key={i} as={MdStar} color="#f0800f" filter="drop-shadow(0 0 3px #f0ad0f66)" />
                      ) : (
                        <Icon key={i} as={MdStarBorder} color="#f0800f" filter="drop-shadow(0 0 3px #f0ad0f66)" />
                      ),
                    )}
                  </Flex>
                </Box>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

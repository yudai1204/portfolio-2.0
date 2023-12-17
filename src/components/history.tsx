import { Box, Text, Grid, GridItem, Flex, Icon, Heading, Circle, Button, VStack, Image } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { MdKeyboardDoubleArrowRight, MdOpenInNew } from "react-icons/md";
import { Link } from "@/components/Link";
import { works } from "@/data";
import { events } from "@/data/history";
import type { Event } from "@/types";
import { useWideHeader } from "@/utils/useWideHeader";

const bgGradient = css`
  background: rgb(255, 240, 54);
  background: linear-gradient(0deg, rgba(255, 240, 54, 1) 0%, rgba(240, 173, 15, 1) 60%, rgba(240, 98, 15, 1) 100%);
`;

type TimelineTitleProps = {
  title: string;
  href: string;
  icon: React.ReactNode;
  isExternal?: boolean;
};
const Title = (props: TimelineTitleProps) => {
  const { title, href, icon, isExternal } = props;
  return (
    <Link
      href={href}
      _hover={{ opacity: 0.6 }}
      w="fit-content"
      onClick={(e) => isExternal && window.open(href) && e.preventDefault()}
    >
      <Flex align="center" gap=".5rem" w="fit-content">
        {title}
        {/* @ts-ignore */}
        <Icon as={icon} ml=".1rem" fontSize="1.2rem" />
      </Flex>
    </Link>
  );
};

type TimelineEventProps = {
  event: Event;
};
const TimelineEvent = (props: TimelineEventProps) => {
  const router = useRouter();
  const { year, content, title, supplement, workId, href } = props.event;
  const work = workId ? works.find((work) => work.id === workId) : undefined;
  return (
    <Flex direction="column" h="100%" zIndex={1} gap=".2rem">
      <Box>
        <Text as="p" fontSize="sm">
          {year}
        </Text>
        <Heading as="h4" fontSize="1.1rem" py=".2rem" fontWeight={content || workId ? "bold" : "normal"}>
          {workId ? (
            <Title icon={MdKeyboardDoubleArrowRight} href={`/works/${workId}`} title={title} />
          ) : href ? (
            <Title icon={MdOpenInNew} href={href} title={title} isExternal />
          ) : (
            title
          )}
        </Heading>
        {supplement && (
          <Text color="gray.400" fontSize="sm">
            {supplement}
          </Text>
        )}
      </Box>
      <Box>{content && (typeof content === "string" ? <Text fontSize="sm">{content}</Text> : content)}</Box>
      {work && (
        <VStack w="100%" align="center">
          {/* {work.imageUrls?.length && (
            <Image
              src={work.imageUrls[0]}
              alt={work.title}
              w="60%"
              aspectRatio="16/10"
              objectFit="cover"
              boxShadow="md"
              borderRadius="md"
            />
          )} */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => router.push(`/works/${workId}`)}
            colorScheme="orange"
            w="100%"
            mt=".5rem"
          >
            View Details
          </Button>
        </VStack>
      )}
    </Flex>
  );
};

type TimelineIconProps = {
  icon?: string;
  color?: string;
};
const TimelineIcon = (props: TimelineIconProps) => {
  const { icon, color } = props;
  if (icon) {
    return (
      <Flex justify="center" w="100%">
        <Box w="60%" bg={color || "#f0aa0f"} boxShadow={`0 0 8px ${color || "#f0aa0f"}66`} p="0%" borderRadius="1000px">
          <Image src={icon} aspectRatio="1/1" objectFit="cover" alt="icon" w="100%" borderRadius="1000px" />
        </Box>
      </Flex>
    );
  }
  return (
    <Flex justify="center" h="100%" w="100%">
      <Circle size="1rem" bg={color || "#f0aa0f"} boxShadow={`0 0 8px ${color || "#f0aa0f"}66`} />
    </Flex>
  );
};

type TimelineProps = {
  filteredEvents: Event[];
};
const TimelineWide = (props: TimelineProps) => {
  const { filteredEvents } = props;
  return (
    <Grid templateColumns="repeat(9, 1fr)" rowGap="2rem" pos="relative" pt="45px" pb="6rem">
      <Box pos="absolute" top="50px" left="50%" transform="translateX(-50%)" w="4px" h="calc(100% - 50px)" zIndex={0}>
        <Box w="100%" h="calc(100% - 100px)" css={bgGradient} />
        <Box w="100%" h="100px" bg="linear-gradient(0deg, rgba(255, 240, 54, 0) 0%, rgba(255, 240, 54, 1) 100%);" />
      </Box>
      {filteredEvents.map((event) => (
        <>
          <GridItem colSpan={4}>{event.side === "left" && <TimelineEvent event={event} />}</GridItem>
          <GridItem colSpan={1} zIndex={1}>
            <TimelineIcon icon={event.icon} color={event.color} />
          </GridItem>
          <GridItem colSpan={4}>{event.side === "right" && <TimelineEvent event={event} />}</GridItem>
        </>
      ))}
    </Grid>
  );
};

const TimelineNarrow = (props: TimelineProps) => {
  const { filteredEvents } = props;
  return (
    <Grid templateColumns="repeat(20, 1fr)" rowGap="2rem" pos="relative" pb="1rem">
      <Box pos="absolute" top="5px" left="7.5%" transform="translateX(-50%)" w="4px" h="calc(100% - 5px)" zIndex={0}>
        <Box w="100%" h="95%" css={bgGradient} />
        <Box w="100%" h="5%" bg="linear-gradient(0deg, rgba(255, 240, 54, 0) 0%, rgba(255, 240, 54, 1) 100%);" />
      </Box>
      {filteredEvents.map((event) => (
        <>
          <GridItem colSpan={3} zIndex={1}>
            <TimelineIcon icon={event.icon} color={event.color} />
          </GridItem>
          <GridItem colSpan={16}>
            <TimelineEvent event={event} />
          </GridItem>
          <GridItem colSpan={1} />
        </>
      ))}
    </Grid>
  );
};

type Props = {
  rightonly?: boolean;
  leftonly?: boolean;
};
export const History = (props: Props) => {
  const { rightonly, leftonly } = props;
  const wideHeader = useWideHeader();

  const filteredEvents = useMemo(() => {
    if (rightonly) {
      if (leftonly) {
        return [];
      }
      return events.filter((event) => event.side === "right");
    } else if (leftonly) {
      return events.filter((event) => event.side === "left");
    }
    return events;
  }, [rightonly, leftonly]);

  return wideHeader && !rightonly && !leftonly ? (
    <TimelineWide filteredEvents={filteredEvents} />
  ) : (
    <TimelineNarrow filteredEvents={filteredEvents} />
  );
};

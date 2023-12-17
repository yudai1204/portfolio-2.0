import { VStack } from "@chakra-ui/react";
import { SkillDetail } from "./skillDetail";
import { skills } from "@/data";

export const Skills = () => {
  return (
    <VStack spacing="1rem" w="100%">
      <SkillDetail title="プログラミング言語" data={skills.lang} />
      <SkillDetail title="フレームワーク" data={skills.framework} />
      <SkillDetail title="インフラ環境" data={skills.infra} />
    </VStack>
  );
};

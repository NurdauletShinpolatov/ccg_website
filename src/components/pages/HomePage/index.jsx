import { Flex, Image, Box } from "@chakra-ui/react";
import Article from "components/Article";
import Header from "components/Header";
import MainStatus from "components/MainStatus";
import MainTitle from "components/MainTitle";

export default function HomePage() {
  return (
    <div className="HomePage">
      <Header />
      <MainStatus />

      <Flex flexDir="column" padding="50px 7%" gap="50px">
        <MainTitle>Kompaniya</MainTitle>

        <Flex
          justifyContent="space-between"
          alignItems="center"
          gap="40px"
          flexDir={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}
        >
          <Article
            txt="Shapefarm asas aa company company isis builtbuilt uponupon aa uniqueunique breadth breadth pertiseexpertise projthethe world.world."
            subtitle="We areare hiring!hiring! PleasePlease sendsend youryour applicationapplication withwith aa linklink"
            linkTo="/company"
          >
            Dreams <span>into</span> Games
          </Article>

          <Box flex="1" position="relative" zIndex="-1">
            <Image src="./assets/imgs/main/Article/article2.png" />
          </Box>
        </Flex>

        <Flex
          justifyContent="space-between"
          alignItems="center"
          mt="50px"
          gap="40px"
          flexDir={{
            base: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}
        >
          <Box flex="1">
            <Image src="./assets/imgs/main/Article/article.png" />
          </Box>

          <Article
            txt="Shapefarm asas aa company company isis builtbuilt uponupon aa uniqueunique breadth breadth pertiseexpertise projthethe world.world."
            subtitle="We areare hiring!hiring! PleasePlease sendsend youryour applicationapplication withwith aa linklink"
            linkTo="/company"
          >
            Dream <span>village</span> it is yor nimadir
          </Article>
        </Flex>
      </Flex>
    </div>
  );
}

import styles from "./AboutPage.module.scss";
import Title from "components/Title";
import Article from "components/Article";
import { Flex, Image, Box } from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <div className={styles.aboutpage}>
      <Title
        paragraph={`Bizning kompani palonchi inson tomonidan asos solingan bolib u 25 yil faoliyat korsatgan biz shun kunchaga 2000 mingdan ortiq xodimlar ish korsatgan.`}
      >
        Kompaniya happy brithday
      </Title>

      <Flex flexDir="column" padding="50px 7%" gap="50px">
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
          <Article
            txt="Shapefarm asas aa company company isis builtbuilt uponupon aa uniqueunique breadth breadth pertiseexpertise projthethe world.world."
            subtitle="We areare hiring!hiring! PleasePlease sendsend youryour applicationapplication withwith aa linklink"
            linkTo="/company"
          >
            Dream <span>village</span> it is yor nimadir
          </Article>

          <Box flex="1">
            <Image src="./assets/imgs/main/Article/article.png" />
          </Box>
        </Flex>

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
          <Box flex="1" position="relative" zIndex="-1">
            <Image src="./assets/imgs/main/Article/article2.png" />
          </Box>

          <Article
            txt="Shapefarm asas aa company company isis builtbuilt uponupon aa uniqueunique breadth breadth pertiseexpertise projthethe world.world."
            subtitle="We areare hiring!hiring! PleasePlease sendsend youryour applicationapplication withwith aa linklink"
            linkTo="/company"
          >
            Dreams <span>into</span> Games
          </Article>
        </Flex>
      </Flex>
    </div>
  );
}

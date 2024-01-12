import styles from "./AboutPage.module.scss";
import Title from "components/Title";
import Article from "components/Article";
import { Flex, Image, Box } from "@chakra-ui/react";
import ImageBox from "components/ImageBox";
import Gallery from "components/Gallery";

export default function AboutPage() {
  return (
    <div className={styles.aboutpage}>
      <Title
        paragraph={`Bizning kompani palonchi inson tomonidan asos solingan bolib u 25 yil faoliyat korsatgan biz shun kunchaga 2000 mingdan ortiq xodimlar ish korsatgan.`}
      >
        Kompaniya happy brithday
      </Title>

      <Flex flexDir="column" padding="50px 7%" gap="50px">
        <div className={styles.article}>
          <Article
            txt="Shapefarm asas aa company company isis builtbuilt uponupon aa uniqueunique breadth breadth pertiseexpertise projthethe world.world."
            subtitle="We areare hiring!hiring! PleasePlease sendsend youryour applicationapplication withwith aa linklink"
            linkTo="/company"
          >
            Dreams <span>into</span> Games
          </Article>

          <Box
            flex="1"
            position="relative"
            zIndex="-1"
            className={styles.imgbox}
          >
            <ImageBox img="src/assets/imgs/imgcomp/img4.png" />
          </Box>
        </div>

        <div className={styles.article}>
          <Box flex="1" position="relative" className={styles.imgbox}>
            <ImageBox img="src/assets/imgs/imgcomp/img5.png" />
          </Box>

          <Article
            txt="Shapefarm asas aa company company isis builtbuilt uponupon aa uniqueunique breadth breadth pertiseexpertise projthethe world.world."
            subtitle="We areare hiring!hiring! PleasePlease sendsend youryour applicationapplication withwith aa linklink"
            linkTo="/company"
          >
            Dream <span>village</span> it is yor nimadir
          </Article>
        </div>

        <div className={styles.article}>
          <Article
            txt="Shapefarm asas aa company company isis builtbuilt uponupon aa uniqueunique breadth breadth pertiseexpertise projthethe world.world."
            subtitle="We areare hiring!hiring! PleasePlease sendsend youryour applicationapplication withwith aa linklink"
            linkTo="/company"
          >
            Dream <span>village</span> it is yor nimadir
          </Article>

          <Box flex="1" className={styles.imgbox}>
            <ImageBox img="src/assets/imgs/imgcomp/img2.png" />
          </Box>
        </div>

        <div className={styles.article}>
          <Box
            flex="1"
            position="relative"
            zIndex="-1"
            className={styles.imgbox}
          >
            <ImageBox img="src/assets/imgs/imgcomp/img1.png" />
          </Box>

          <Article
            txt="Shapefarm asas aa company company isis builtbuilt uponupon aa uniqueunique breadth breadth pertiseexpertise projthethe world.world."
            subtitle="We areare hiring!hiring! PleasePlease sendsend youryour applicationapplication withwith aa linklink"
            linkTo="/company"
          >
            Dreams <span>into</span> Games
          </Article>
        </div>
      </Flex>

      <Gallery />
    </div>
  );
}

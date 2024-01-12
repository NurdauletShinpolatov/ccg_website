import { Flex, Image, Box } from "@chakra-ui/react";
import Article from "components/Article";
import ContactForm from "components/ContactForm";
import Header from "components/Header";
import MainServices from "components/MainServices";
import MainStatus from "components/MainStatus";
import MainTitle from "components/MainTitle";
import SubHeader from "components/SubHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import ImageBox from "components/ImageBox";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <div className={styles.homepage}>
      <Header />

      <MainStatus />

      <Flex
        flexDir="column"
        padding={{ base: "50px 4%", md: "50px 7%" }}
        gap="40px"
      >
        <MainTitle>Kompaniya</MainTitle>

        <div className={styles.section}>
          <Article
            txt="Shapefarm asas aa company company isis builtbuilt uponupon aa uniqueunique breadth breadth pertiseexpertise projthethe world.world."
            subtitle="We are are hiring! hiring! Please Please send send your your application application withwith aa linklink"
            linkTo="/company"
          >
            Dreams <span>into</span> Games
          </Article>

          <Flex
            flex="1"
            position="relative"
            zIndex="-1"
            justifyContent="flex-start"
            alignItems="center"
            className={styles.imgbox}
          >
            <ImageBox img="src/assets/imgs/imgcomp/img3.png" />
          </Flex>
        </div>

        <div className={styles.section}>
          <Flex
            flex="1"
            className={styles.imgbox}
            justifyContent="flex-start"
            alignItems="center"
          >
            <ImageBox img="src/assets/imgs/imgcomp/img1.png" />
          </Flex>

          <Article
            txt="Shapefarm asas aa company company isis builtbuilt uponupon aa uniqueunique breadth breadth pertiseexpertise projthethe world.world."
            subtitle="We areare hiring!hiring! PleasePlease sendsend youryour applicationapplication withwith aa linklink"
            linkTo="/company"
          >
            Dream <span>village</span> it is yor nimadir
          </Article>
        </div>
      </Flex>

      <MainServices />

      <SubHeader />

      <Flex padding={{ base: "20px 4%", md: "20px 7%" }} mt="50px">
        <MainTitle>Contact us</MainTitle>
      </Flex>
      <ContactForm />
    </div>
  );
}

import "swiper/css";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import GalleryImg from "components/GalleryImg";
import styles from "./Gallery.module.scss";
import { Tabs, Tab, TabList, TabIndicator } from "@chakra-ui/react";
import { useState } from "react";

const teamGallery = [
  { comment: "Jamoa bilan 3 kun", bg: "./assets/imgs/gallery/gallery1.png" },
  { comment: "Jamoa bilan 3 kun", bg: "./assets/imgs/gallery/gallery2.png" },
  { comment: "Jamoa bilan 3 kun", bg: "./assets/imgs/gallery/gallery3.png" },
];
const transportGallery = [
  { comment: "Jamoa bilan 3 kun", bg: "./assets/imgs/gallery/gallery3.png" },
  { comment: "Jamoa bilan 3 kun", bg: "./assets/imgs/gallery/gallery1.png" },
  { comment: "Jamoa bilan 3 kun", bg: "./assets/imgs/gallery/gallery2.png" },
];
const staffGallery = [
  { comment: "Jamoa bilan 3 kun", bg: "./assets/imgs/gallery/gallery2.png" },
  { comment: "Jamoa bilan 3 kun", bg: "./assets/imgs/gallery/gallery3.png" },
  { comment: "Jamoa bilan 3 kun", bg: "./assets/imgs/gallery/gallery1.png" },
];
const tabs = [
  { title: "Jamoa", section: "team" },
  { title: "Transportlar", section: "transport" },
  { title: "Xodimlar", section: "staff" },
];

export default function Gallery() {
  const [curSection, setCurSection] = useState("team");
  return (
    <div className={styles.gallery}>
      <div className={styles.header}>
        <h2>Bizning gallery</h2>

        <Tabs position="relative" variant="unstyled">
          <TabList gap={{ base: "5px", md: "40px" }}>
            {tabs.map((tab) => {
              return (
                <Tab
                  className={styles.tab}
                  onClick={() => setCurSection(tab.section)}
                  key={tab.section}
                >
                  {tab.title}
                </Tab>
              );
            })}
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="black"
            borderRadius="1px"
          />
        </Tabs>
      </div>

      <Swiper
        scrollbar={{
          hide: false,
        }}
        breakpoints={{
          320: {
            spaceBetween: 20,
            slidesPerView: 1.1,
          },
          768: {
            spaceBetween: 50,
            slidesPerView: 1.3,
          },
          1024: {
            spaceBetween: 70,
          },
        }}
        spaceBetween={50}
        slidesPerView={1.3}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        {curSection === "team" &&
          teamGallery.map((slide) => {
            return (
              <SwiperSlide key={slide.bg}>
                <GalleryImg bg={slide.bg}>{slide.comment}</GalleryImg>
              </SwiperSlide>
            );
          })}
        {curSection === "transport" &&
          transportGallery.map((slide) => {
            return (
              <SwiperSlide key={slide.bg}>
                <GalleryImg bg={slide.bg}>{slide.comment}</GalleryImg>
              </SwiperSlide>
            );
          })}
        {curSection === "staff" &&
          staffGallery.map((slide) => {
            return (
              <SwiperSlide key={slide.bg}>
                <GalleryImg bg={slide.bg}>{slide.comment}</GalleryImg>
              </SwiperSlide>
            );
          })}

        <div style={{ height: "30px" }}></div>
      </Swiper>
    </div>
  );
}

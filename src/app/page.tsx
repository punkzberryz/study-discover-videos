"use client";
import Image from "next/image";

import styles from "./styles/Home.module.css";
//components
import NavBar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import SectionCards from "./components/card/section-card";
//data
import { getPopularVideos, getVideos } from "../lib/videos";
import { magic } from "@/lib/magic-client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
// https://github.com/kulkarniankita/discover-videos/

export default async function Home() {
  const disneyVideos = await getVideos("disney trailer");
  const productivityVideos = await getVideos("productivity");
  const travelVideos = await getVideos("travel");
  const popularVideos = await getPopularVideos();

  return (
    <main className={styles.main}>
      <NavBar />
      <Banner
        title="Califford the red deg"
        subTitle="a very cute dog"
        imgUrl="/static/clifford.webp"
      />
      <div className={styles.sectionWrapper}>
        <SectionCards title="Disney" videos={disneyVideos} size="large" />
        <SectionCards
          title="Productivity"
          videos={productivityVideos}
          size="small"
        />
        <SectionCards title="Travel" videos={travelVideos} size="medium" />

        <SectionCards title="Popular" videos={popularVideos} size="small" />
      </div>
    </main>
  );
}

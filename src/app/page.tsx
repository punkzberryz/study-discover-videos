import Image from "next/image";

import styles from "./styles/Home.module.css";
//components
import NavBar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import SectionCards from "./components/card/section-card";
import Card from "./components/card/card";
// https://github.com/kulkarniankita/discover-videos/

const imgPath =
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80";

export default function Home() {
  const disneyVideos = [
    {
      imgUrl: imgPath,
    },
    {
      imgUrl: imgPath,
    },
    {
      imgUrl: imgPath,
    },
  ];

  return (
    <main className={styles.main}>
      <NavBar username="kangtlee" />
      <Banner
        title="Califford the red deg"
        subTitle="a very cute dog"
        imgUrl="/static/clifford.webp"
      />
      <div className={styles.sectionWrapper}>
        <SectionCards title="Disney" videos={disneyVideos} size="large" />
        <SectionCards title="Disney" videos={disneyVideos} size="medium" />
      </div>
    </main>
  );
}

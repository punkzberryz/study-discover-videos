import Image from "next/image";

import styles from "./styles/Home.module.css";
//components
import Banner from "./components/banner/banner";
import NavBar from "./components/navbar/navbar";
// https://github.com/kulkarniankita/discover-videos/
export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar username="kangtlee" />
      <Banner
        title="Califford the red deg"
        subTitle="a very cute dog"
        imgUrl="/static/clifford.webp"
      />
      {/* <Card/> */}
    </main>
  );
}

import Image from "next/image";

import styles from "./styles/Home.module.css";
//components
import Banner from "./components/banner/banner";
// https://github.com/kulkarniankita/discover-videos/
export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Netflix</h1>
      {/* <Navbar/> */}
      <Banner
        title="Califford the red deg"
        subTitle="a very cute dog"
        imgUrl="/static/clifford.webp"
      />
      {/* <Card/> */}
    </main>
  );
}

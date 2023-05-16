import Card from "./card";
import Link from "next/link";
import clsx from "classnames";
import styles from "./section-cards.module.css";
const imgPath =
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80";

interface SectionCardsProps {
  title: string;
  videos: { imgUrl: string; id: string; title: string }[];
  size: "small" | "medium" | "large";
}

const SectionCards = ({ title, videos = [], size }: SectionCardsProps) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, index) => {
          return (
            <Card
              key={video.id}
              index={index}
              title={video.title}
              imgUrl={video.imgUrl}
              size={size}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SectionCards;

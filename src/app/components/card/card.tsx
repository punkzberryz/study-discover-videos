"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import cls from "classnames";

import styles from "./card.module.css";
interface CardProps {
  id: number;
  imgUrl: string;
  size: "small" | "medium" | "large";
}
interface ClassMapProps {
  [key: string]: string;
}
const Card = ({ id, imgUrl, size }: CardProps) => {
  const classMap: ClassMapProps = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  const [imgSrc, setImgSrc] = useState(imgUrl);

  const handleOnImagePathError = () => {
    setImgSrc("/static/clifford.webp");
    console.log("hi error");
  };

  const scale = id === 0 ? { scaleY: 1.1 } : { scale: 1.1 };

  return (
    <div className={styles.container}>
      <motion.div
        className={cls(styles.imgMotionWrapper, classMap[size])}
        whileHover={{
          ...scale,
          transition: { duration: 0.1 },
        }}
      >
        <Image
          src={imgSrc}
          alt="image"
          fill={true}
          className={styles.cardImg}
          onError={handleOnImagePathError}
        />
      </motion.div>
    </div>
  );
};
export default Card;

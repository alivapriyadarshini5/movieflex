import React from "react";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";
const MovieCard = (item) => {
  const { id, type, title, synopsis } = item.jawSummary;
  console.log(item?.jawSummary?.backgroundImage?.url);
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image
            src={`${item?.jawSummary?.backgroundImage?.url}`}
            alt={title}
            width={300}
            height={200}
          />
        </div>
        <div className={styles.card_data}>
          <h2>{title.substr(0, 18)}</h2>
          <p>{`${synopsis.substr(0, 66)} ...`}</p>
          <Link href={`/movie/${id}`}>
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;

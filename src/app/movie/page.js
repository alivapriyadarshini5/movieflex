import Link from "next/link";
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css";
const Page = async () => {
  const url = process.env.customKey;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "efdc7ceafdmsh05c7ec7ba45f957p13bae5jsna8fb2b9dcbb5",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movies</h1>
          {data?.titles?.map((item) => {
            return <MovieCard key={item?.id} {...item} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Page;

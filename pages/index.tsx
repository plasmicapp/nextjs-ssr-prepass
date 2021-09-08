import ssrPrepass from "react-ssr-prepass";
import { Grabber } from "../components/Grabber";
import { fetcher } from "../src/Fetcher";
import styles from "../styles/Home.module.css";

export default function Home({ cache = {} }: { cache?: {} }) {
  fetcher.cache = cache;
  return (
    <div className={styles.container}>
      <Grabber />
    </div>
  );
}

export async function getStaticProps() {
  await ssrPrepass(<Home />);
  return {
    props: {
      cache: fetcher.cache,
    },
  };
}

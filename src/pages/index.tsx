import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get acess to all the publications <br />
            {/* <span>for {product.amount} month</span> */}
          </p>
          {/* <SubscribeButton /> */}
        </section>

        <Image
          src="/images/avatar.svg"
          alt="Girl coding"
          width="336"
          height="521"
        />
      </main>
    </>
  );
}

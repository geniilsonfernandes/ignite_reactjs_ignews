import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { GetStaticProps } from "next";

import styles from "./home.module.scss";
import { SubscribeButton } from "../components/SubscribeButton";

interface HomeProps {
  product: {
    priceId: string;
    amount: string;
  };
}

export default function Home({ product }: HomeProps) {
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
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton />
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

export const getStaticProps: GetStaticProps = async () => {
  // const price = await stripe.prices.retrieve("price_1Iqmo5FWbIUK0S7vGDt6CtJU");

  // const product = {
  //   priceId: price.id,
  //   amount: new Intl.NumberFormat("en-US", {
  //     style: "currency",
  //     currency: "USD",
  //   }).format(price.unit_amount / 100),
  // };

  return {
    props: {
      product: { amount: "100", priceId: "234254" },
    } as HomeProps,
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

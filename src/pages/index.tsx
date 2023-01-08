import styles from "./home.module.scss";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";
import formatPrice from "../utils/format-price";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
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
            <span>for {formatPrice(product.amount)} month</span>
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
  const price = await stripe.prices.retrieve("price_1MNzQlGIVYiT8HnsyAbdcmYB");

  const product = {
    priceId: price.id,
    amount: price.unit_amount! / 100,
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

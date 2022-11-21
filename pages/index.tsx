import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import style from "../styles/Home.module.css";
import Layout from "../components/layout";
import { getLatestItems } from "../services/itemService";
import Product from "../components/product";
import styleProduct from "../styles/product.module.css";

export default function Home({ items }: any) {
  return (
    <Layout>
      <div className={style.banner}>
        <div className={style.bannerBackground}>
          <div className={style.bannerInfo}>
            <h2>Shop the best Github Merch!</h2>
            <p>
              Level up your comfort this season with our new Winter Collection —
              all new joggers, beanies, drinkware, and for the first time ever,
              Octocookie cutters!
            </p>
          </div>
        </div>
      </div>

      <h3>Latest Products</h3>
      <div className={styleProduct.items}>
        {items &&
          items.map((item: any) => (
            <Product key={item.id} item={item} showAs="item" qty={undefined} />
          ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await getLatestItems();

  return {
    props: {
      items: res, //items -> nombre del prop
    },
  };
}

import Layout from "../../components/layout";
import Product from "../../components/product";
import { getItemData, getPathsFromIds } from "../../lib/utils";

export default function ProductPage({ productInfo }: any) {
  return (
    <Layout>
      <Product item={productInfo} showAs="Page" />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getPathsFromIds();

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const id = params.id;
  const product = await getItemData(id);

  return {
    props: {
      productInfo: product,
    },
  };
}

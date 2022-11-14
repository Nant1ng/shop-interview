import Head from "next/head";
import { getProductSlug, getRelatedProducts } from "../../../../../api";
import Product from "../../../../../components/Product";

const SingleProduct = ({ product, relatedProducts }) => {
  if (product && relatedProducts) {
    return (
      <>
        <Head>
          <title> Acrowd Shop {product.name}</title>
          <meta name="description" content={product.short_description} />
        </Head>
        <Product product={product} relatedProducts={relatedProducts} />
      </>
    );
  }
};

export async function getServerSideProps(context) {
  const { params } = context;
  const slug = params.productSlug;
  const product = await getProductSlug(slug);
  const relatedProducts = await getRelatedProducts(product.related_ids);
  if (!relatedProducts) {
    return {
      props: {
        product,
      },
    };
  } else {
    return {
      props: {
        product,
        relatedProducts,
      },
    };
  }
}

export default SingleProduct;

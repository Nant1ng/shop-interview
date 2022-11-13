import react, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  getAllCategories,
  getCategorySlug,
  getProductsCategory,
} from "../../../api";
import CategoryProducts from "../../../components/CategoryProducts";

function Category() {
  const router = useRouter();
  const categorySlug = router.query.category;
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const setProductsAndCategories = async () => {
      const parent = await getCategorySlug(categorySlug);
      const products = await getProductsCategory(parent[0].id);
      const categories = await getAllCategories(parent[0].id);
      setProducts(products);
      setCategories(categories);
    };

    if (categorySlug) {
      setProductsAndCategories();
    }
  }, [categorySlug]);
  if (categorySlug) {
    return (
      <>
        <Head>
          <title>Shop {categorySlug}</title>
          <meta name="description" content={`Products for ${categorySlug}`} />
        </Head>
        <CategoryProducts
          categoryName={categorySlug}
          products={products}
          categories={categories}
        />
      </>
    );
  }
}

export default Category;

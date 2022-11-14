import react, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  getAllCategories,
  getCategorySlug,
  getProductsCategory,
} from "../../../../api";
import ProductCategory from "../../../../components/ProductCategory";

const ProductsCategory = () => {
  const router = useRouter();
  const productCategory = router.query.productCategory?.toLowerCase();
  const category = router.query.category;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const setData = async () => {
      const mainParent = await getCategorySlug(category);
      const productCategories = await getAllCategories(mainParent[0].id);
      const categoryId = productCategories.find(
        (category) => category.name.toLowerCase() === productCategory
      ).id;

      const finalproducts = await getProductsCategory(categoryId);
      setProducts(finalproducts);
    };
    setData();
  }, [category, productCategory]);

  if (category && productCategory) {
    return (
      <>
        <Head>
          <title>Interview Shop - {productCategory}</title>
        </Head>
        <ProductCategory products={products} />
      </>
    );
  }
};

export default ProductsCategory;

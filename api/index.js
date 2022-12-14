let allProducts = [];

export const getAllProducts = async () => {
  const response = await fetch(`${process.env.PUBLIC_SITE_URL}/api/products`);
  const data = await response.json();

  allProducts = [...data];

  return data;
};

export const getAllCategories = async (parentId = null) => {
  let response;
  if (parentId || parentId === 0) {
    response = await fetch(
      `${process.env.PUBLIC_SITE_URL}/api/categories?parent=${parentId}`
    );
  } else {
    response = await fetch(`${process.env.PUBLIC_SITE_URL}/api/categories`);
  }
  const data = await response.json();

  return data;
};

export const getCategorySlug = async (slug) => {
  const response = await fetch(
    `${process.env.PUBLIC_SITE_URL}/api/categories?slug=${slug}`
  );
  const data = await response.json();
  return data;
};

export const getProductsCategory = async (categoryId) => {
  const response = await fetch(
    `${process.env.PUBLIC_SITE_URL}/api/products?category=${categoryId}`
  );

  const data = response.json();

  return data;
};

export const getProductSlug = async (slug) => {
  const allProducts = await getAllProducts();
  const productSlug = allProducts.find((product) => product.slug === slug);

  return productSlug;
};

export const getRelatedProducts = async (ids) => {
  const allProducts = await getAllProducts();
  const relatedProducts = ids.map((id) => {
    const products = allProducts.find((product) => product.id === id);

    return products;
  });

  return relatedProducts;
};

let allProducts = [];

export const getAllProducts = async () => {
  const response = await fetch(`http://localhost:3000/api/products`);
  const data = await response.json();

  allProducts = [...data];

  return data;
};

export const getAllCategories = async (parentId = null) => {
  let response;
  if (parentId || parentId === 0) {
    response = await fetch(
      `http://localhost:3000/api/categories?parent=${parentId}`
    );
  } else {
    response = await fetch(`http://localhost:3000/api/categories`);
  }
  const data = await response.json();

  return data;
};

export const getCategorySlug = async (slug) => {
  const response = await fetch(
    `http://localhost:3000/api/categories?slug=${slug}`
  );
  const data = await response.json();
  return data;
};

export const getProductsCategory = async (categoryId) => {
  const response = await fetch(
    `http://localhost:3000/api/products?category=${categoryId}`
  );

  const data = response.json();

  return data;
};

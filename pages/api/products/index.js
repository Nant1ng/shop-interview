const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
  url: process.env.WP_BASE_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
});

async function handler(req, res) {
  /* 
              Pagination
   const { perPage } = req?.query ?? {};
  */

  try {
    const response = await api.get("products", {
      per_page: 20,
      category: req.query.category ? req.query.category : "",
      slug: req.query.slug ? req.query.slug : "",
    });

    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json(err);
    console.log("Error, ", response.data);
  }
}

export default handler;

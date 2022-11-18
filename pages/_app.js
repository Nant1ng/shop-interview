import "../styles/globals.css";
import { Provider } from "react-redux";
import shop from "../shop";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={shop}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

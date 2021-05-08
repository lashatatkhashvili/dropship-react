import axios from "axios";
import SERVER_ADDRESS from "./variables";

const call = async (url) => await axios.get(SERVER_ADDRESS + url);
const productsReq = async (sort = null) =>
  await call(`products${sort ? `?sort=${sort}` : ""}`);

export default productsReq;

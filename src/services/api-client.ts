import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e9ee1558d4934ec7a9e528cc8e10461a",
  },
});

import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "32184a97d9484150919db32edd9d7bb0",
  },
});

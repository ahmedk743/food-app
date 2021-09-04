import axios from "axios";

export default axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses",
  headers: {
    accept: "application/json",
    "x-requested-with": "xmlhttprequest",
    "Access-Control-Allow-Origin": "*",
    Authorization:
      "Bearer N9GSeXsp0vxMfcGcT9ezbcXnuO1IxdUpHRzC22nSXoq9PZy8dgLqc9q26upVR5biDM8Z5upRQwvzzgUR2Ej8BAXGiRlYzb0ZufG5eHp_CLmt2Ll0NUEIVQw8lL4IYXYx",
  },
});

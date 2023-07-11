import axios from "axios";
const url = `http://localhost/manmohan/wp-json/geodir/v2`;
export const getPlaces = async () => {
  const response = await axios.get(`${url}/places`);
  return response.data;
};
export const getCategories = async () => {
  const response = await axios.get(`${url}/places/categories`);
  return response.data;
};

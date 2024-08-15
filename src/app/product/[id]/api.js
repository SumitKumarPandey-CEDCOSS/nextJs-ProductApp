import axios from 'axios';

export async function fetchProduct(id) {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching the product:", error);
    return null;
  }
}

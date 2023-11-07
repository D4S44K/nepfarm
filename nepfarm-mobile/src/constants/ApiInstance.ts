import axios from 'axios';

// const baseURL = 'https://fakestoreapi.com';
const baseURL = 'http://localhost:4000/api/v1';
// const baseURL = 'http://192.168.8.98:3000/api/v1';

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    // 'Content-Type': 'multipart/form-data',
  },
});

export const getProduct = async () => {
  const res = await axiosInstance.get('/products');

  console.log('response', res.data, typeof res.data);
  return res.data;
};

export default axiosInstance;

import axios from 'axios';

export const getAll = async (endpoint: string) => {
  const { data } = await axios.get(`https://ghibliapi.herokuapp.com/${endpoint}`);
  return data;
}

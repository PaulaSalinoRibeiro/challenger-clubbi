import axios from 'axios';

export const getAll = async (endpoint: string) => {
  const { data } = await axios.get(`https://ghibliapi.herokuapp.com/${endpoint}`);
  return data;
};

export const getById = async (endpoint: string, id: string) => {
  const { data } = await axios.get(`https://ghibliapi.herokuapp.com/${endpoint}/${id}`);
  return data;
};

import axios from 'axios';

export const getAll = async (endpoint: string) => {
  try{
    const { data } = await axios.get(`https://ghibliapi.herokuapp.com/${endpoint}`);
    return data;
  } catch(erro: any) {
    console.log('api erro message', erro.message)
  }
};

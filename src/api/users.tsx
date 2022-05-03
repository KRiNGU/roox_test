import axios from 'axios';
import { IUserInformation } from '../models/models';

const mainAxios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    'Content-type': 'application/json',
  },
});

export const getAllUsers = () => {
  return mainAxios.get<IUserInformation[]>('/users');
};

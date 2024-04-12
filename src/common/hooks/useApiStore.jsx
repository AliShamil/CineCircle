import axios from 'axios';
import {create} from 'zustand';

const useApiStore = create(set => ({
  api: axios.create({
    baseURL: 'https://cinecircleapi.azurewebsites.net/',
  }),
}));

export default useApiStore;
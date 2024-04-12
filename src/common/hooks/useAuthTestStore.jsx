import {create} from 'zustand';
import { storage } from '../../../storage';

const useAuthTestStore = create(set => ({
  token: storage.getString('token'),
  setToken: newValue => set({token: newValue}),
  profile: {},
  setProfile: newValue => set({profile: newValue}),
}));

export default useAuthTestStore;
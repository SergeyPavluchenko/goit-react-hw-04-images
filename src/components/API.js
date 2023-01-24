import axios from 'axios';
import { toast } from 'react-hot-toast';
axios.defaults.baseURL = `https://pixabay.com/api/`;
const KEY = '30720436-88ffd0ded62e0d7b7cde7caf4';

export const fetchPictureByHits = async (query, page) => {
  try {
    const response = await axios.get(
      `/?key=${KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data.hits;
  } catch (error) {
    toast.error('Please wait, we are repair problem');
    return [];
  }
};

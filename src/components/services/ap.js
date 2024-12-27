import axios from "axios";

const API_KEY = "-H2piHg-ZcnUkHlQWbmJ1mhkFOAt9jI4TxWPQGps6o8";
axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers = {
    Authorization: `Client-ID ${API_KEY}`,
    'Accept-Version': 'v1',
};

axios.defaults.params = {
    per_page: 15,
    orientation: 'landscape',
};

const fetchImages = async (query, page) => {
    try {
        const response = await axios.get('/search/photos', {
            params: {
                query,
                page,
            },
        });
    
        return response.data; 
        

    } catch (error) {
      console.error('Error fetching images:', error);
      throw error;
    }
  };

  export default fetchImages;
  
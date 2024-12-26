import axios from "axios";

const fetchImages = async (query) => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}`,
        {
          headers: {
            Authorization: 'Client-ID H2piHg-ZcnUkHlQWbmJ1mhkFOAt9jI4TxWPQGps6o8',
          },
        }
      );
      return response.data; 
    } catch (error) {
      console.error('Error fetching images:', error);
      throw error;
    }
  };

  export default fetchImages;
  
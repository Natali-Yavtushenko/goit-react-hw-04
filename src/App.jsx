 
import { useState, useEffect } from 'react';
import SearchBar from './components/searchBar/SearchBar';
import './App.css';
import fetchImages from './components/services/ap';
import ImageGallery from './components/imageGallery/ImageGallery';

function App() {
const [images, setImages] = useState([]);


useEffect(() => {
  const getimagesData = async () => {
    try {
      const data = await fetchImages('react'); 
      setImages(data.results); 
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };
  getimagesData();
}, []);

  return 
    <div>
      <h2>Gallery</h2>
      <SearchBar/>
      <ImageGallery images={images} />
    </div>  
}

export default App;


import s from '../imageGallery/ImageGallery.module.css';

const ImageCard = ({images}) => {
    return (
          <div className={s.container}>
            {images.length > 0 ? (
              images.map((image) => (
                <div key={image.id}>
                  <img className={s.image} src={image.urls.small} alt={image.alt_description} />
                </div>
              ))
            ) : (
              <p>No images found</p>
            )}
          </div>
      );
};  

export default ImageCard;

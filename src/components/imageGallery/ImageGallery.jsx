import ImageCard from '../imageCard/ImageCard';
import s from './ImageGallery.module.css'

const ImageGallery = ({ images }) => {
    return (
        <div className={s.container}>
        <ul className={s.list}>
            {images.length > 0 ? (
                images.map((image) => (
                    <li className={s.item} key={image.id}>
                        <div>
                            <img  className={s.image} src={image.urls.small} alt={image.alt_description} />
                        </div>
                    </li>
                ))
            ) : (
                <p>No images found</p>
            )}
        </ul>
        </div>
    );
};


export default ImageGallery;

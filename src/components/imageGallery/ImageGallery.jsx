import ImageCard from "../imageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ gallery, openModal, updateModalStateData }) => {
  return (
    <ul className={s.list}>
      {gallery.length > 0 ? (
        gallery.map(({ id, alt_description, urls, user, likes }) => {
          if (!urls || !urls.small) {
            console.error("Invalid image data:", { id, urls });
            return null; // Пропускаємо некоректні дані
          }

          return (
            <li
              className={s.item}
              key={id}
              onClick={() =>
                updateModalStateData(
                  urls.regular,
                  alt_description,
                  user.name,
                  likes
                )
              }
            >
              <img className={s.image} src={urls.small} alt={alt_description} />
            </li>
          );
        })
      ) : (
        <p>No images found</p>
      )}
    </ul>
  );
};

export default ImageGallery;

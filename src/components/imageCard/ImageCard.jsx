
import s from '../imageGallery/ImageGallery.module.css';


const ImageCard = ({ alt_description, urls, updateModalStateData }) => {
	return (
		<div
			className={s.container}
			onClick={() => updateModalStateData(urls.regular, alt_description)}
		>
			<img
				className={s.image}
				src={urls.small}
				alt={alt_description}
			/>
			<p className={s.cardDescription}>{alt_description}</p>
		</div>
	);
};

export default ImageCard;

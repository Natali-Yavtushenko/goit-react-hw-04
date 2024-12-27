import ImageCard from '../imageCard/ImageCard';
import s from './ImageGallery.module.css'

const ImageGallery = ({ gallery, openModal, updateModalStateData }) => {
	return (
		<ul className={s.list}>
			{gallery.map(({ id, alt_description, urls }) => (
				<li className={s.item} key={id} onClick={openModal}>
					<ImageCard
						urls={urls}
						alt_description={alt_description}
						updateModalStateData={updateModalStateData}
					/>
				</li>
			))}
		</ul>
	);
};

export default ImageGallery;

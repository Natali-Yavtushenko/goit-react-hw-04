 
import { useState, useEffect, useRef } from 'react';
import SearchBar from './components/searchBar/SearchBar';
import './App.css';
import fetchImages from './components/services/ap';
import ImageGallery from './components/imageGallery/ImageGallery';
import ErrorMessage from './components/errorMessage/ErrorMessage';
import LoadMoreBtn from './components/loadMoreBtn/LoadMoreBtn';
import ImageModal from './components/imageModal/ImageModal';
import Loader from './components/loader/Loader';
import { Toaster } from 'react-hot-toast';

function App() {
	const [page, setPage] = useState(1);
	const [queryValue, setQueryValue] = useState('');
	const [gallery, setGallery] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [totalPages, setTotalPages] = useState(0);

	const [modalIsOpen, setIsOpen] = useState(false);
	const [modalImage, setModalImage] = useState('');
	const [altDescription, setAltDescription] = useState('');

	const ref = useRef();

	useEffect(() => {
		if (queryValue === '') return;

		const handleSearch = async () => {
			try {
				setIsLoading(true);
				setIsError(false);
				const data = await fetchImages(queryValue, page);
				console.log('data: ', data);
				if (data.total === 0) return;
				setGallery((prevGallery) => {
					return [...prevGallery, ...data.results];
				});
				setTotalPages(data.total_pages);
			} catch (error) {
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		};
		handleSearch();
	}, [page, queryValue]);

	useEffect(() => {
		if (page === 1) return;

		ref.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
	}, [page, gallery]);

	const handleQuery = (newQuery) => {
		setQueryValue(newQuery);
		setGallery([]);
		setPage(1);
	};

	const handleLoadMore = () => {
		setPage(page + 1);
	};


  const isActive = page >= Math.ceil(totalPages / 15);

  const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const updateModalStateData = (src, alt) => {
		setModalImage(src);
		setAltDescription(alt);
	};

	return (
		<div ref={ref}>
			<SearchBar onSubmit={handleQuery} />
			{gallery.length > 0 && (
				<ImageGallery
					gallery={gallery}
					openModal={openModal}
					updateModalStateData={updateModalStateData}
				/>
			)}
			{isLoading && <Loader />}
			{isError && <ErrorMessage />}
			{gallery.length > 0 && !isLoading && !isError && (
				<LoadMoreBtn handleLoadMore={handleLoadMore} isActive={isActive} />
			)}
			<ImageModal
				modalIsOpen={modalIsOpen}
				closeModal={closeModal}
				src={modalImage}
				alt={altDescription}
			/>
			<Toaster position='top-right' reverseOrder={true} />
		</div>
	);
}

export default App;
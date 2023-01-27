import { useState, useEffect } from 'react';
import { FeedBack } from './App.styled';
import { ButtonLoad } from 'components/Button/Button.js';
import { SearchBar } from 'components/Searchbar/Searchbar.js';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Spinner } from 'components/Loader/Loader';
import { fetchPictureByHits } from 'components/API.js';

export function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      fetchPictureByHits(query, page)
        .then(images => {
          console.log(images);
          setImages(prevImages => [...prevImages, ...images]);
        })
        .finally(() => setIsLoading(false));
    }
  }, [query, page]);

  const handleFormSubmit = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  // const { isLoading, images } = this.state;
  return (
    <FeedBack>
      <SearchBar onSubmit={handleFormSubmit} />
      {isLoading && <Spinner />}
      {images.length > 0 && <ImageGallery images={images} />}
      {images.length >= 12 && <ButtonLoad onClick={handleLoadMore} />}
    </FeedBack>
  );
}

import { Component } from 'react';
import { FeedBack } from './App.styled';
import { ButtonLoad } from 'components/Button/Button.js';
import { SearchBar } from 'components/Searchbar/Searchbar.js';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Spinner } from 'components/Loader/Loader';
import { fetchPictureByHits } from 'components/API.js';

export class App extends Component {
  state = {
    images: [],
    query: '',
    isLoading: false,
    error: null,
    page: 1,
  };

  componentDidUpdate(_, prevState) {
    const { query: currentQuery, page: currentPage } = this.state;
    const { query: prevQuery, page: prevPage } = prevState;

    if (prevQuery !== currentQuery || prevPage !== currentPage) {
      this.setState({ isLoading: true });
      fetchPictureByHits(currentQuery, currentPage)
        .then(images => {
          console.log(images);
          this.setState(prevState => ({
            images: [...prevState.images, ...images],
          }));
        })
        .catch(error =>
          this.setState({ error: error.message, isLoading: false })
        )
        .finally(() => this.setState({ isLoading: false }));
    }
  }
  handleFormSubmit = query => {
    this.setState({
      query,
      images: [],
      page: 1,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { isLoading, images } = this.state;
    return (
      <FeedBack>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {isLoading && <Spinner />}
        {images.length > 0 && <ImageGallery images={images} />}
        {images.length >= 12 && <ButtonLoad onClick={this.handleLoadMore} />}
      </FeedBack>
    );
  }
}

import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import {
  SearchForm,
  SearchFormInput,
  SearchFormButton,
  SearchbarBlock,
  SearchFormButtonLabel,
} from './Searchbar.styled';

export class SearchBar extends Component {
  state = {
    imageName: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  handleImageNameChange = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.imageName.trim() === '') {
      toast(`Enter the name of the picture`);
      return;
    }

    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };
  render() {
    return (
      <SearchbarBlock>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <div>
              <BsSearch size={30} />
            </div>
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.imageName}
            onChange={this.handleImageNameChange}
          />
        </SearchForm>
        <Toaster position="top-right" />
      </SearchbarBlock>
    );
  }
}

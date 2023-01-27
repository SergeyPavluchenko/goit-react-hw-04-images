import { useState } from 'react';
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

export const SearchBar = ({ onSubmit }) => {
  const [imageName, setImageName] = useState('');

  // state = {
  //   imageName: '',
  // };

  const handleImageNameChange = event => {
    setImageName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (imageName.trim() === '') {
      toast(`Enter the name of the picture`);
      return;
    }

    onSubmit(imageName);
    setImageName('');
  };

  return (
    <SearchbarBlock>
      <SearchForm onSubmit={handleSubmit}>
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
          value={imageName}
          onChange={handleImageNameChange}
        />
      </SearchForm>
      <Toaster position="top-right" />
    </SearchbarBlock>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

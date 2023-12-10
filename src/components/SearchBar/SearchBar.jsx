import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import {
    SearchForm,
    SearchInput,
    SearchButton,
    SearchSpan,
} from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
    const [searchName, setSearchName] = useState('');
    const [inputValue, setInputValue] = useState('');
    const handleChange = event => setInputValue(event.target.value);
    const handleSubmit = event => {
        event.preventDefault();
        setSearchName(inputValue.trim());
        onSubmit(searchName);
        event.target.reset();
    };

    return (
        <header>
            <SearchForm onSubmit={handleSubmit}>
                <SearchButton>
                    <BsSearch />
                    <SearchSpan>Search</SearchSpan>
                </SearchButton>
                <SearchInput
                    name="searchName"
                    type="text"
                    id="search"
                    value={inputValue}
                    onChange={handleChange}
                />
            </SearchForm>
        </header>
    );
};

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
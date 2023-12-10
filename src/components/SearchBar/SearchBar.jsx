import React, { useState, useEffect, useCallback } from 'react';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import {
    SearchForm,
    SearchInput,
    SearchButton,
    SearchSpan,
} from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const searchQuery = inputValue.trim();

        if (searchQuery !== '') {
            onSubmit(searchQuery);
            setInputValue('');
        }
    };

    const handleKeyPress = useCallback(
        (event) => {
            if (event.key === 'Enter') {
                handleSubmit(event);
            }
        },
        [handleSubmit]
    );

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

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
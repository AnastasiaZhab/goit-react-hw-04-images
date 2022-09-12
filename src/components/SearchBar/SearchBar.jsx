import s from './SearchBar.module.css';
import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';
import PropTypes from 'prop-types'


export default function SearchBar({ onSubmit }) {
    const [imageName, setImageName] = useState('');

    const handleNameChange = (event) => {
         setImageName(event.currentTarget.value.toLowerCase().trim())
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (imageName === '') {
            return;
        }

        onSubmit(imageName);
        setImageName('');
    }


    return (
        <header className={s.SearchBar}>
                <form onSubmit={handleSubmit} className={s.SearchForm}>
                    <button type="submit" className={s.Button}>
                        {/* <span className={s.Label}> */}
                        <BiSearch size='2em' />
                        {/* </span> */}
                    </button>

                    <input
                        className={s.Input}
                        type="text"
                        autocomplete="off"
                        autofocus
                        value={imageName}
                        placeholder="Search images and photos"
                        onChange={handleNameChange}
                    />
                </form>
            </header>

        )
}



SearchBar.propTypes = {
    imageName: PropTypes.string.isRequired,
}
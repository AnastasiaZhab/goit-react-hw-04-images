import s from './SearchBar.module.css';
import { BiSearch } from 'react-icons/bi';
import { Component } from 'react';
import PropTypes from 'prop-types'

class SearchBar extends Component {
    state = {
            imageName: '',
    }
    
    handleNameChange = (event) => {
        this.setState({ imageName: event.currentTarget.value.toLowerCase().trim() });
    }

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.imageName === '') {
            return;
        }

        this.props.onSubmit(this.state.imageName);

        this.setState({ imageName: '' });
    }

    render() {
        return (
            <header className={s.SearchBar}>
                <form onSubmit={this.handleSubmit} className={s.SearchForm}>
                    <button type="submit" className={s.Button}>
                        {/* <span className={s.Label}> */}
                        <BiSearch size='2em' />
                        {/* </span> */}
                    </button>

                    <input
                        className={s.Input}
                        type="text"
                        // autocomplete="off"
                        // autofocus
                        value={this.state.imageName}
                        placeholder="Search images and photos"
                        onChange={this.handleNameChange}
                    />
                </form>
            </header>

        )
    }
}

export default SearchBar;

SearchBar.propTypes = {
    imageName: PropTypes.string.isRequired,
}
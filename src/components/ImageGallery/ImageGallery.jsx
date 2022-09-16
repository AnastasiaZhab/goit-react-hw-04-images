import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ image, onClick }) => {

    const arrayImages = image;

    return (
        <>
            <ul className={s.ImageGallery}>
                {arrayImages.map(({id, webformatURL, alt, largeImageURL}) => (
                    <ImageGalleryItem key={id} onClick={onClick} id={id} src={webformatURL} alt={alt} largeImageURL={largeImageURL} />
                )
                )}

            </ul>
        </>
    )
};

export default ImageGallery;

ImageGallery.propTypes = {
    image: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        largeImageURL: PropTypes.string,
        webformatURL: PropTypes.string,
        alt: PropTypes.string
    })),
    onClick: PropTypes.func,
}
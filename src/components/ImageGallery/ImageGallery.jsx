import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ image}) => {

    const arrayImages = image;

    return (
        <>
            <ul className={s.ImageGallery}>
                {arrayImages.map(({id, webformatURL, alt, largeImageURL}) => (
                    <ImageGalleryItem key={id} id={id} src={webformatURL} alt={alt} largeImageURL={largeImageURL} />
                )
                )}

            </ul>
        </>
    )
};

export default ImageGallery;

ImageGallery.propTypes = {
    image: PropTypes.array,
}
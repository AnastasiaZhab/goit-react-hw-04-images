import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ src, alt, onClick, id, largeImageURL}) => {

    return (<li className={s.ImageGalleryItem}>
        <img onClick={() => onClick(largeImageURL)} id={id} className={s.Image} src={src} alt={alt}/>
        </li>
        )
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    onClick: PropTypes.func, 
    id: PropTypes.number.isRequired, 
    largeImageURL: PropTypes.string.isRequired
}
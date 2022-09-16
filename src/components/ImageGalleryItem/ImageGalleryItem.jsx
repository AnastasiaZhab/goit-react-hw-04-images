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
    onClick: PropTypes.func, 
}
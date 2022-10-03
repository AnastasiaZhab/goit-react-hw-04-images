import s from './ImageGalleryItem.module.css';
import { useState  } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';

export default function ImageGalleryItem ({ src, alt, id, largeImageURL}) {
    const [showModal, setShowModal] = useState(false)

    return (
    <>
        <li className={s.ImageGalleryItem}>
           <img onClick={() => setShowModal(true)} id={id} className={s.Image} src={src} alt={alt}/>
        </li>
        {showModal && (<Modal onClose={() => setShowModal(false)}>
                         <img src={largeImageURL} alt={alt}/>
                       </Modal>)}
    </>
        )
};

ImageGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    largeImageURL: PropTypes.string,
    alt: PropTypes.string,
    src: PropTypes.string,
}
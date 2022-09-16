import s from './Modal.module.css';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({children, onClose}) {
    
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
    
        return window.removeEventListener('keydown', handleKeyDown)
    })

    const handleKeyDown = (e) => {
                    if (e.code === 'Escape') {
                    onClose();
            }
    }

    const handleBackdropClick = (e) => {
        if (e.currentTarget === e.target) {
           onClose();
        }
    }
    

    return createPortal(
            <div onClick={handleBackdropClick} className={s.Overlay}>
                <div className={s.Modal}>
                    {children}
                </div>
            </div>,
            modalRoot,
        )


}

// class Modal extends Component {
    
//     componentDidMount() {
        
//         window.addEventListener('keydown', this.handleKeyDown)
//     }

//     componentWillUnmount() {

//         window.removeEventListener('keydown', this.handleKeyDown)
//     }

//     handleKeyDown = (e) => {
//                     if (e.code === 'Escape') {
//                 this.props.onClose();
//             }
//     }

//     handleBackdropClick = (e) => {
//         if (e.currentTarget === e.target) {
//             this.props.onClose();
//         }
//     }
    
//     render() {

//         const { children } = this.props;
//         const backdropClick = this.handleBackdropClick;

//         return createPortal(
//             <div onClick={backdropClick} className={s.Overlay}>
//                 <div className={s.Modal}>
//                     {children}
//                 </div>
//             </div>,
//             modalRoot,
//         )
//     }
// };

// export default Modal;
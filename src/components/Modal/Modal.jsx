import s from './Modal.module.css';
import { createPortal } from 'react-dom';
import { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    
    componentDidMount() {
        
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {

        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = (e) => {
                    if (e.code === 'Escape') {
                this.props.onClose();
            }
    }

    handleBackdropClick = (e) => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }
    
    render() {

        const { children } = this.props;
        const backdropClick = this.handleBackdropClick;

        return createPortal(
            <div onClick={backdropClick} className={s.Overlay}>
                <div className={s.Modal}>
                    {children}
                </div>
            </div>,
            modalRoot,
        )
    }
};

export default Modal;
import s from './Button.module.css'

const Button = ({onClick}) => {
    return (
        <button onClick={onClick} type='button' className={s.Button}>Load more</button>
    )
};

export default Button;

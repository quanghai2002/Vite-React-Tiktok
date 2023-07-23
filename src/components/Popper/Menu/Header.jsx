import clsx from 'clsx';
import style from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function Header({ title, onBack }) {
    return (
        <header className={clsx(style.header)}>
            <button className={clsx(style.back_Btn)} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={clsx(style.header_Title)}>{title}</h4>
        </header>
    );
}

export default Header;

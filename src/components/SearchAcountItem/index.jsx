import clsx from 'clsx';
import style from './SearchAcountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
function SearchAcountItem() {
    return (
        <div className={clsx(style.wrapper)}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a686337bcb5b5c02c5e0de1092c9a04e~c5_300x300.webp?x-expires=1690077600&x-signature=wPilYyXahl7delCtoAziOlXlQwQ%3D"
                alt="Quang"
                className={clsx(style.avatar)}
            />
            <div className={clsx(style.info)}>
                <h4 className={clsx(style.name)}>
                    <span>Quang Linh Store</span>
                    <FontAwesomeIcon icon={faCircleCheck} className={clsx(style.check_Icon)} />
                </h4>
                <p className={clsx(style.userName)}>Quang Linh Store</p>
            </div>
        </div>
    );
}

export default SearchAcountItem;

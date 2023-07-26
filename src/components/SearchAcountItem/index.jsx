import clsx from 'clsx';
import style from './SearchAcountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Image from '../Image/Image.index.jsx';

function SearchAcountItem({ data, onClick }) {
    return (
        <Link to={`/profile/${data.nickname}`} className={clsx(style.wrapper)} onClick={onClick}>
            <Image src={data.avatar} alt={data.full_name} className={clsx(style.avatar)} />
            {/* <img src={data.avatar} alt={data.full_name} className={clsx(style.avatar)} /> */}
            <div className={clsx(style.info)}>
                <h4 className={clsx(style.name)}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon icon={faCircleCheck} className={clsx(style.check_Icon)} />}
                </h4>
                <p className={clsx(style.userName)}>{data.nickname}</p>
            </div>
        </Link>
    );
}

export default SearchAcountItem;

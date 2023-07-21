import clsx from 'clsx';
import style from './Menu.module.scss';
import Button from '../../Button';

function MenuItem({ data }) {
    return (
        <Button style={{ marginLeft: 0 }} className={clsx(style.menu_Item)} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;

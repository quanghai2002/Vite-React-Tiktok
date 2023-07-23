import clsx from 'clsx';
import style from './Menu.module.scss';
import Button from '../../Button';

function MenuItem({ data, onClick }) {
    const classes = clsx(style.menu_Item, {
        [style.separate]: data.separate,
    });
    return (
        <Button
            style={{ marginLeft: 0 }}
            className={classes}
            leftIcon={data.icon}
            to={data.to}
            rightIcon={data.switch}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;

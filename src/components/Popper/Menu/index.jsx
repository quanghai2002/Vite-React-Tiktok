import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';
import style from './Menu.module.scss';
import Wrapper from '../Wrapper';
import MenuItem from './MenuItem';

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item) => {
            return <MenuItem key={item.id} data={item} />;
        });
    };
    return (
        <Tippy
            interactive
            placement="bottom-end"
            delay={[0, 800]}
            render={(attrs) => (
                <div className={clsx(style.content)} tabIndex={-1} {...attrs}>
                    <Wrapper className={clsx(style.menu_Popper)}>{renderItems()}</Wrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;

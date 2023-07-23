import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';
import style from './Menu.module.scss';
import Wrapper from '../Wrapper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

function Menu({ children, items = [], onChange = defaultFn }) {
    function defaultFn() {}
    const [history, setHistory] = useState([
        {
            data: items,
        },
    ]);

    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item) => {
            const isParent = Boolean(item.children);

            return (
                <MenuItem
                    key={item.id}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => {
                                return [...prev, item.children];
                            });
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            offset={[10, 10]}
            interactive
            placement="bottom-end"
            delay={[0, 800]}
            render={(attrs) => (
                <div className={clsx(style.content)} tabIndex={-1} {...attrs}>
                    <Wrapper className={clsx(style.menu_Popper)}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) => {
                                        return prev.slice(0, prev.length - 1);
                                    });
                                }}
                            />
                        )}

                        {renderItems()}
                    </Wrapper>
                </div>
            )}
            onHide={() => {
                setHistory((prev) => {
                    return prev.slice(0, 1);
                });
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;

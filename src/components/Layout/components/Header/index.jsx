import clsx from 'clsx';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCircleXmark, faUser } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisVertical, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { useState, useContext, useMemo } from 'react';
import { ThemContext } from '../../../../App.jsx';

import style from './Header.module.scss';
import { Wrapper as PopperWrapper } from '../../../Popper';
import SearchAcountItem from '../../../SearchAcountItem';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';

import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import LogoTikTok_Light, {
    LogoTikTok_Dark,
    MessageIcon,
    InboxIcon,
    SearchIcon,
    GetCoinIcon,
    LiveStudioIcon,
    EnglishIcon,
    FeebackIcon,
    KeyboardIcon,
    DarkModeIcon,
    LogoutIcon,
} from '../../../Icons/index.jsx';
import Image from '../../../Image/Image.index.jsx';

function Header() {
    const [searchResult, setsearchResult] = useState([]);
    const [theme, setTheme] = useContext(ThemContext);

    const handleMenuChange = (menuItem) => {
        // handle logic
        console.log(menuItem);
        switch (menuItem) {
            case 'language':
                break;

            default:
        }
    };

    const IOSSwitch = useMemo(() => {
        return styled((props) => <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(
            ({ theme }) => ({
                width: 42,
                height: 26,
                padding: 0,
                '& .MuiSwitch-switchBase': {
                    padding: 0,
                    margin: 2,
                    transitionDuration: '300ms',
                    '&.Mui-checked': {
                        transform: 'translateX(16px)',
                        color: '#fff',
                        '& + .MuiSwitch-track': {
                            backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                            opacity: 1,
                            border: 0,
                        },
                        '&.Mui-disabled + .MuiSwitch-track': {
                            opacity: 0.5,
                        },
                    },
                    '&.Mui-focusVisible .MuiSwitch-thumb': {
                        color: '#33cf4d',
                        border: '6px solid #fff',
                    },
                    '&.Mui-disabled .MuiSwitch-thumb': {
                        color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
                    },
                    '&.Mui-disabled + .MuiSwitch-track': {
                        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
                    },
                },
                '& .MuiSwitch-thumb': {
                    boxSizing: 'border-box',
                    width: 22,
                    height: 22,
                },
                '& .MuiSwitch-track': {
                    borderRadius: 26 / 2,
                    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
                    opacity: 1,
                    transition: theme.transitions.create(['background-color'], {
                        duration: 500,
                    }),
                },
            }),
        );
    }, []);

    const MENU_ITEMS = useMemo(() => {
        return [
            {
                id: 1,
                icon: <EnglishIcon width={'2rem'} height={'2rem'} />,
                title: 'English',
                switch: null,
                children: {
                    title: 'Languages',
                    data: [
                        { id: 1, type: 'language', code: 'en', title: 'English' },
                        { id: 2, type: 'language', code: 'vi', title: 'Tiếng Việt' },
                        { id: 3, type: 'language', code: 'phi', title: 'Cebuano (Pilipinas)' },
                    ],
                },
            },
            {
                id: 2,
                icon: <FeebackIcon width={'2rem'} height={'2rem'} />,
                title: 'Feedback and help',
                to: '/feedback',
                switch: null,
            },
            {
                id: 3,
                icon: <KeyboardIcon width={'2rem'} height={'2rem'} />,
                title: 'Keyboard shortcuts',
                switch: null,
            },
            {
                id: 4,
                icon: <DarkModeIcon width={'2rem'} height={'2rem'} />,
                title: 'Dark mode',
                switch: (
                    <FormControlLabel
                        onChange={() => {
                            setTheme((prev) => {
                                return !prev;
                            });
                        }}
                        control={<IOSSwitch sx={{ m: 1 }} />}
                    />
                ),
            },
        ];
    }, [theme]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setsearchResult([]);
    //     }, 0);
    // }, []);
    const currentUser = true;
    const userMenu = [
        {
            id: 5,
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@quanghai',
            switch: null,
        },
        {
            id: 6,
            icon: <FontAwesomeIcon icon={faBookmark} />,
            title: 'Favorites',
            to: '/',
            switch: null,
        },
        {
            id: 7,
            icon: <GetCoinIcon width={'2rem'} height={'2rem'} />,
            title: 'Get Coins',
            switch: null,
            to: '/coin',
        },
        {
            id: 8,
            icon: <LiveStudioIcon width={'2rem'} height={'2rem'} />,
            title: 'LIVE Studio',
            switch: null,
            to: '/studio',
        },

        ...MENU_ITEMS,
        {
            id: 9,
            icon: <LogoutIcon width={'2rem'} height={'2rem'} />,
            title: 'Log out',
            switch: null,
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={(clsx(style.wrapper), theme ? style.darkWrapper : style.lightWrapper)}>
            <div className={clsx(style.inner)}>
                <div className={clsx(style.logo)}>
                    {theme ? <LogoTikTok_Light className={clsx(style.offsetLogoTikTok)} /> : <LogoTikTok_Dark />}
                </div>

                <HeadlessTippy
                    visible={searchResult.length > 0}
                    interactive
                    render={(attrs) => (
                        <div className={clsx(style.search_Result)} tabIndex={-1} {...attrs}>
                            <PopperWrapper>
                                <h4 className={clsx(style.search_Title)}>Accounts</h4>
                                <SearchAcountItem />
                                <SearchAcountItem />
                                <SearchAcountItem />
                                <SearchAcountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div
                        className={clsx(style.search, {
                            [style.dark_Search]: theme,
                        })}
                    >
                        <input placeholder="Search" className={clsx(style.search_Input)} spellCheck={false} />
                        <button className={clsx(style.clear)}>{<FontAwesomeIcon icon={faCircleXmark} />}</button>
                        <FontAwesomeIcon className={clsx(style.loading)} icon={faSpinner} />

                        <button className={clsx(style.search_Button)}>
                            {/* <FontAwesomeIcon className={clsx(style.search_Btn)} icon={faMagnifyingGlass} /> */}
                            <SearchIcon width="2.4rem" height="2.4rem" />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={clsx(style.action)}>
                    {currentUser ? (
                        <>
                            <Button dark={theme} textIcon text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>

                            <Tippy content="Message" placement="bottom">
                                <button className={clsx(style.action_Btn)}>
                                    <MessageIcon />
                                    <span className={clsx(style.action_Btn_message)}>1</span>
                                </button>
                            </Tippy>

                            <Tippy content="Inbox" placement="bottom">
                                <button className={clsx(style.action_Btn)}>
                                    <InboxIcon className={clsx(style.btn_2)} />
                                    <span className={clsx(style.action_Btn_message, style.action_Btn_message_big)}>
                                        84
                                    </span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button dark={theme} textIcon text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <div>
                                <Image
                                    src="hhttps://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8a9f4a40b576ec4cb494d962a77df306~c5_100x100.jpeg?x-expires=1690257600&x-signature=3%2BwAnUhWB8jZgStViZ4FkWcSw4U%3D"
                                    alt="Nguyen Van A"
                                    className={clsx(style.user_Avatar)}
                                />
                            </div>
                        ) : (
                            <button
                                className={clsx(style.moreBtn, {
                                    [style.dark]: theme,
                                })}
                            >
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

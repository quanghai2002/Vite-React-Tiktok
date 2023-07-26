import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import style from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useContext, useEffect, useCallback, useRef } from 'react';

import { useDebounce } from '../../../components/hooks';
import { Wrapper as PopperWrapper } from '../../../components/Popper';
import SearchAcountItem from '../../../components/SearchAcountItem';
import { SearchIcon } from '../../../components/Icons/index.jsx';
import { ThemContext } from '../../../App.jsx';
import * as searchService from '../../../Service/searchService';

function Search() {
    const [theme] = useContext(ThemContext);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setsearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debounceValue = useDebounce(searchValue, 500);
    let a = '';
    a.sta;
    useEffect(() => {
        if (!debounceValue.trim()) {
            setsearchResult([]);
            return;
        }
        setLoading(true);

        const fetApi = async () => {
            const result = await searchService.search(debounceValue);
            setsearchResult(result);
            setLoading(false);
        };
        fetApi();
    }, [debounceValue]);

    function handleSearchValue(data) {
        const searchValue = data;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    }

    const handleBtnClearSearch = useCallback(() => {
        setSearchValue('');
        inputRef.current.focus();
    }, []);

    const handleHideResult = useCallback(() => {
        setShowResult(false);
    }, []);

    const handleClickNickName = useCallback(() => {
        setsearchResult([]);
    }, []);
    return (
        //Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                placement="bottom"
                visible={showResult && searchResult.length > 0}
                interactive
                render={(attrs) => (
                    <div className={clsx(style.search_Result)} tabIndex={-1} {...attrs}>
                        <PopperWrapper>
                            <h4 className={clsx(style.search_Title)}>Accounts</h4>
                            {searchResult.map((result) => {
                                return <SearchAcountItem key={result.id} data={result} onClick={handleClickNickName} />;
                            })}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div
                    className={clsx(style.search, {
                        [style.dark_Search]: theme,
                    })}
                >
                    <input
                        ref={inputRef}
                        placeholder="Search"
                        className={clsx(style.search_Input)}
                        spellCheck={false}
                        value={searchValue}
                        onChange={(e) => {
                            handleSearchValue(e.target.value);
                        }}
                        onFocus={() => {
                            setShowResult(true);
                        }}
                    />

                    {loading && <FontAwesomeIcon className={clsx(style.loading)} icon={faSpinner} />}

                    {Boolean(searchValue) && loading === false && (
                        <button className={clsx(style.clear)} onClick={handleBtnClearSearch}>
                            {<FontAwesomeIcon icon={faCircleXmark} />}
                        </button>
                    )}

                    <button className={clsx(style.search_Button)}>
                        <SearchIcon width="2.4rem" height="2.4rem" />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;

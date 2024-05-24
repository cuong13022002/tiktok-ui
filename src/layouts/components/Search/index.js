import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';

import { 
    
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner, 
} from '@fortawesome/free-solid-svg-icons';

import * as searchServices from "~/services/searchService"
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountItem';
import styles from "./Search.module.scss"
import useDebounce from '~/hook/useDebounce';

const cx = classNames.bind(styles)

function Search() {

    const [searchValue,setSearchValue] = useState('')
    const [searchResult,setSearchResult] = useState([])
    const [showResult,setShowResult] = useState(true)
    const [loading,setLoading] = useState(false)

    const debounced = useDebounce(searchValue,500);

    const inputRef = useRef()

    useEffect(() =>{

        if(!debounced.trim()){
            setSearchResult([])
            return;
        }

        const fetchApi = async () =>{

            setLoading(true)

            const result = await searchServices.search(debounced)
            setSearchResult(result);

            setLoading(false)
        }
         
        fetchApi()
    },[debounced])

    const handleClear = () =>{
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus()
    }
    const handleHideResult = () =>{
        setShowResult(false)
    }
    const handleChange = (e) => {

        const searchValue = e.target.value;

        if(!searchValue.startsWith(' ')){

            setSearchValue(searchValue)
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return ( 
        // Using a wrapper <div> tag around the reference element solves
        // this by creating a new parentNode context
       <div>
            <HeadlessTippy 
            interactive
            visible={showResult && searchResult.length > 0}
            render={
                attrs => (
    
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result}/>
                            ))}
                            
                        </PopperWrapper>
                    </div>
                )
            }
            onClickOutside={handleHideResult}
    
        >
            <div className={cx('search')}>
                <input 
                    ref={inputRef}
                    value={searchValue}
                    placeholder='Search accounts and videos' 
                    spellCheck={false}
                    onChange={handleChange}
                    onFocus={()=> setShowResult(true)}
                />
                {!!searchValue && !loading && (
    
                    <button 
                        className={cx('clear')} 
                        onClick={handleClear}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* {loading} */}
                  {loading &&  <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />} 
    
                <button className={cx('search-btn')} onMouseDown={(e) =>e.preventDefault()}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
    
            </HeadlessTippy>
       </div>
     );
}

export default Search;
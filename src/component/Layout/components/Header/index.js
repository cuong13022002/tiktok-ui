import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { faCircle, faCircleXmark ,faMagnifyingGlass,faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';


import Button from '~/component/Button';
import styles from './Header.module.scss'
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountItem';


const cx = classNames.bind(styles)
function Header() {

    const [searchResult,setSearchResult] = useState([])

    useEffect(() =>{
        setTimeout (() =>{
            setSearchResult([])
        },0)
    },[])
    return <header  className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='TikTok' />
            </div>
                <Tippy 
                    interactive
                    visible={searchResult.length > 0}
                    render={
                        attrs => (

                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>
                                        Account
                                    </h4>
                                    <AccountItem/>
                                    <AccountItem/>
                                    <AccountItem/>
                                </PopperWrapper>
                            </div>
                        )
                    }

                >
                    <div className={cx('search')}>
                        <input placeholder='Search accounts and videos' spellCheck={false}/>
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        {/* {loading} */}
                        <div className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </div>

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>

                </Tippy>
            
            <div className={cx('actions')}>
                <Button text>
                   Upload
                </Button>
                <Button primary>
                    Login
                </Button>
            </div>
        </div>
    </header>
}

export default Header;
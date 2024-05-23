import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { faCircleQuestion,faCoins,faEarthAsia,faEllipsisVertical,faGear,faKeyboard,faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import Menu from '~/component/Popper/Menu';

import Button from '~/component/Button';
import styles from './Header.module.scss'
import images from '~/assets/images';
import Image from '~/component/Image';
import Search from '../Search';
import { UploadIcon ,MessagesIcon,NoteIcon } from '~/component/Icons';


const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}/>,
        title:'English',
        children:{
            title:'Language',
            data: [
                {
                    code:'en',
                    title:'English'
                },
                {
                    code:'vi',
                    title:'Tiếng Việt'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
        title:'Feedback and help',
        to:'/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}/>,
        title:'Keyboard Shortcuts'
    },
];


function Header() {

    
    const currentUser =true

    const handleMenuChange = (menuItem) =>{
        console.log(menuItem)
    }

   const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser}/>,
        title:'View profile',
        to:'/@cuong'
    },
    {
        icon: <FontAwesomeIcon icon={faCoins}/>,
        title:'Get coins',
        to:'/coin'
    },
    {
        icon: <FontAwesomeIcon icon={faGear}/>,
        title:'Setting',
        to:'/settings'
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut}/>,
        title:'Log out',
        to:'/logout',
        separate: true,
    },
   ]
    return <header  className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='TikTok' />
            </div>

           <Search />

            <div className={cx('actions')}>
            {currentUser ? (
                <>
                    <Tippy 
                        delay={[[0,200]]}             
                        content ='Upload video' 
                        placement='bottom-end'
                    >
                        <button className={cx('action-btn')}>
                            <UploadIcon />
                        </button>
                    </Tippy>
                    
                    <Tippy 
                        delay={[[0,200]]}             
                        content ='Messages' 
                        placement='bottom-end'
                    >
                        <button className={cx('action-btn')}>
                            <MessagesIcon />
                        </button>
                    </Tippy>
                   
                    <Tippy 
                        delay={[[0,200]]}             
                        content ='Notes' 
                        placement='bottom-end'
                    >
                        <button className={cx('action-btn')}>
                            <p className={ cx('icon-notice')}>
                                <p className={cx('top-number')}>
                                    16
                                </p>
                            </p>
                            <NoteIcon />
                        </button>
                    </Tippy>
                   
                </>
            
            ):(
                <>
                    <Button text>Upload</Button>
                    <Button primary >Login</Button>
                </>
                
            )}
                <Menu items = {currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                    {currentUser ? (
                        <Image
                            className={cx('user-avatar')} 
                            alt='Nguyen Van Cuong' 
                            src='https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/427894051_2343783816012488_5426931434325452535_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GjVqkvfyo8YQ7kNvgEMS8LU&_nc_ht=scontent.fhan14-2.fna&oh=00_AYC5YAiXo72m-vE6PcEMP7jBmE58REONumR5Gm3qLHRNoA&oe=665353A3'
                            // fallback = 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7162dea03d887150448a7d64420189bf~c5_100x100.jpeg?lk3s=a5d48078&nonce=44186&refresh_token=87d2689e8111994300dee69b2b50397a&x-expires=1716429600&x-signature=Go6TzB%2BLFwOfHzN3tBdQ3h4NWNo%3D&shp=a5d48078&shcp=b59d6b55'
                        />
                    ) : (

                        <button className={cx('more-btn')} >
                            <FontAwesomeIcon icon={faEllipsisVertical}/>
                        </button>
                        
                    )}
                </Menu>
            </div>
        </div>
    </header>
}

export default Header;
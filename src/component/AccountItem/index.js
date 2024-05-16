
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(styles)

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/094d5ab192269dc3c948fb337d0faa49.jpeg?lk3s=a5d48078&nonce=822&refresh_token=131020de15bda9773870275f0b186d10&x-expires=1716044400&x-signature=tAk%2FPC1HCDct%2FNw%2BbTKTC4mIqbA%3D&shp=a5d48078&shcp=81f88b70"  alt="Hoa"/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen VNa a</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Username</span>
            </div>
        </div>
     );
}

export default AccountItem;
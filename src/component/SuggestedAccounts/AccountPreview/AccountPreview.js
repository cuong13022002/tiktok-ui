import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss'
import Button from '~/component/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)
function AccountPreview({ data }) {

    
    return ( 
        
        <div className={cx('wrapper')}>
            
            <div> 
                <div className={cx('header')}>
                    <img 
                        className={cx('avatar')}
                        src={data.avatar}
                        alt={data.nickname}
                    />
                    <div>
                        <Button className={cx('follow-btn')} primary > Follow</Button>
                        
                    </div>
                
                </div>
                <div className={cx('body')}>
                
                    <p className={cx('nickname')}>
                        <strong>{data.nickname}</strong>
                        {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                    </p>
                    <p className={cx('name')}>{data.first_name} {''} {data.last_name}</p>
                    <p className={cx('analytics')}>
                        <strong className={cx('value')}>
                            {data.followers_count} {' '}
                        </strong>
                        <span className={cx('label')}>Follow</span>
                        <strong className={cx('value')}>
                            {data.likes_count} { ' '}
                        </strong>
                        <span className={cx('label')}>Like</span>
                    </p>
                
                </div>
            </div>
                                
        </div> 
    );
}

AccountPreview.propTypes = {
    data: PropTypes.array,
}

export default AccountPreview;
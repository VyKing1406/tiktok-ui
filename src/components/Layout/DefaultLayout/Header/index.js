import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('header-wrapper')}>
            <div className={cx('header-inner')}>
                <div className={cx('header-inner__logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                <div className={cx('header-inner-search')}>
                    <input
                        className={cx()}
                        placeholder={'Search accounts and videos'}
                        spellCheck={true}
                    ></input>
                    <button className={cx('inner-search__clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon
                        className={cx('inner-search__loading')}
                        icon={faSpinner}
                    />

                    <button className={cx('inner-search__btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('header-inner__actions')}></div>
            </div>
        </header>
    );
}

export default Header;

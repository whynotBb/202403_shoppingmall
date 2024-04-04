import {faWaze} from '@fortawesome/free-brands-svg-icons';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {faBars, faMagnifyingGlass, faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {logout} from '../redux/reducers/authenticateSlice';

const Navbar = () => {
    const isAuthenticated = useSelector((state) => state.auth.authenticate);
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const goToLogin = () => {
        // !authenticate && navigate('/login');
        isAuthenticated ? dispatch(logout()) : navigate('/');
    };
    const goToHome = () => {
        navigate('/');
    };
    const search = (e) => {
        if (e.key === 'Enter') {
            // 입력한 검색어를 읽어와서 url 을 바꿔준다.
            let keyword = e.target.value; // input 값 가져오기

            console.log(keyword);
            navigate(`/?q=${keyword}`);
        }
    };
    const [mobileMenu, setMobileMenu] = useState(false);
    const openMenu = () => {
        setMobileMenu((prev) => !prev);
    };
    return (
        <div className='nav-wrapper'>
            <div className='login-section'>
                <div onClick={goToLogin}>
                    <FontAwesomeIcon icon={faUser} />
                    {isAuthenticated ? '로그아웃' : '로그인'}
                </div>
            </div>
            <div className='logo-section'>
                <div className='logo' onClick={goToHome}>
                    <FontAwesomeIcon icon={faWaze} />
                    <FontAwesomeIcon icon={faWaze} />
                    <FontAwesomeIcon icon={faWaze} />
                </div>
            </div>
            <div className='nav-section'>
                <ul className={`menu-list ${mobileMenu ? 'open' : ''}`}>
                    {menuList.map((menu, index) => (
                        <li key={index}>{menu}</li>
                    ))}
                </ul>
                <div className='search-box'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type='text' onKeyPress={(e) => search(e)} />
                </div>
                <div className='mo_menu_btn' onClick={openMenu}>
                    {mobileMenu ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                </div>
            </div>
        </div>
    );
};

export default Navbar;

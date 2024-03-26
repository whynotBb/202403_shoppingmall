import { faWaze } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Navbar = () => {
    const menuList = [
        "여성",
        "Divided",
        "남성",
        "신생아/유아",
        "아동",
        "H&M Home",
        "Sale",
        "지속가능성",
    ];
    return (
        <div className="nav-wrapper">
            <div className="login-section">
                <div>
                    <FontAwesomeIcon icon={faUser} />
                    로그인
                </div>
            </div>
            <div className="logo-section">
                <div className="logo">
                    <FontAwesomeIcon icon={faWaze} />
                </div>
            </div>
            <div className="nav-section">
                <ul className="menu-list">
                    {menuList.map((menu) => (
                        <li>{menu}</li>
                    ))}
                </ul>
                <div className="search-box">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="text" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;

import { faWaze } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Navbar = () => {
    return (
        <div>
            <div>
                <div>
                    <FontAwesomeIcon icon={faUser} />
                    로그인
                </div>
            </div>
            <div>
                <div className="logo">
                    <FontAwesomeIcon icon={faWaze} />
                </div>
            </div>
            <div>
                <div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="text" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;

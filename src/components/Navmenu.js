import { React, useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

const Navemenu = ({ authenticate, setAuthentiCate }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  const isPc = useMediaQuery({
    query: "(min-width : 1024px) "
  });
  const isTablet = useMediaQuery({
    query: " (max-width:1023px)"
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)"
  });
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성"
  ];
  console.log(toggleMenu)
  const searchClick = (e) => {};
  const searchKey = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
      {isPc && (
        
        <div className="nav-wrapper">
          {authenticate === true ? (
            <div className="login-btn" onClick={() => setAuthentiCate(false)}>
              <FontAwesomeIcon icon={faUser} />
              <div>로그아웃</div>
            </div>
          ) : (
            <Link to="/login">
              <div className="login-btn">
                <FontAwesomeIcon icon={faUser} />
                <div>로그인</div>
              </div>
            </Link>
          )}

          <div className="nav-section">
            <Link to="/">
              <img
                alt="logo"
                src="https://www.starfield.co.kr/cdn/starfield_02/tnt/20170925/IM20170925075856221826.png"
              />
            </Link>
          </div>

          <div className="menu-area">
            <ul className="menu">
              {menuList.map((a, i) => {
                return <li key={i}>{a}</li>;
              })}
            </ul>

            <div className="search-area">
              <label className="search-bar">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input
                  type="text"
                  onKeyPress={(e) => searchKey(e)}
                  placeholder="검색어를 입력하세요"
                />
              </label>
            </div>
          </div>
        </div>
      )}
      {isTablet && (
        <div className="mobileNav-wrapper">
          <FontAwesomeIcon
            icon={faBars}
            className="mobileNav-icon"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
  <ul className={toggleMenu ? "toggleOn " : "toggleOff"}>
            {menuList.map((a) => (
              <li>{a}</li>
            ))}
            <span className="toggleClose" onClick={()=>setToggleMenu(!toggleMenu)}>X</span>
          </ul>
          <div className="MobileNav-section">
            <Link to="/">
              <img
                alt="logo"
                src="https://www.starfield.co.kr/cdn/starfield_02/tnt/20170925/IM20170925075856221826.png"
              />
            </Link>
          </div>
          <div className="search-area mobileSearch-area">
              <label className="search-bar">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input
                  type="text"
                  onKeyPress={(e) => searchKey(e)}
                  placeholder="검색어를 입력하세요"
                />
              </label>
            </div>
        </div>
      )}
    </div>
  );
};

export default Navemenu;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../Redux/Actions/UserActions";

const Header = () => {
  const [keyword, setKeyword] = useState()
  const dispatch = useDispatch()
  let history = useHistory()

  const cart = useSelector((state) => state.cart)
  const {cartItems} = cart
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const logoutHandler = () => {
    dispatch(logout())
  }
  const submitHandler = (e) => {
    e.preventDefault()
    if(keyword.trim()){
      history.push(`/search/${keyword}`)
    }
    else{
      history.push("/")
    }
  }
  return (

    <div>
      {/* Top Header */}
      <div className="Announcement ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none">
              <p>0859802360</p>
              <p>hotboy7102@gmail.com</p>
            </div>
            <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
              <Link to="">
                <i className="fab fa-facebook-f icon fb"></i>
              </Link>
              <Link to="">
                <i className="fab fa-instagram icon ig"></i>
              </Link>
              <Link to="">
                <i className="fab fa-linkedin-in icon lk"></i>
              </Link>
              <Link to="">
                <i className="fab fa-youtube icon yt"></i>
              </Link>
              <Link to="">
                <i className="fab fa-tiktok icon tt"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Header */}
      <div className="header">
        <div className="container">
          {/* MOBILE HEADER */}
          <div className="mobile-header">
            <div className="container ">
              <div className="row ">
                <div className="col-6 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <img alt="logo" src="/images/logo.png" />
                  </Link>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                  {
                    userInfo ? (
                      <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-user"></i>
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/profile">
                        Thông tin cá nhân
                      </Link>

                      <Link className="dropdown-item" to="#" onClick={logoutHandler}>
                        Đăng xuất
                      </Link>
                    </div>
                  </div>
                    )
                    : 
                    (
                      <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-user"></i>
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/login">
                        Đăng nhập
                      </Link>

                      <Link className="dropdown-item" to="/register">
                        Đăng ký
                      </Link>
                    </div>
                  </div>
                    )
                  }
                  
                  <Link to="/cart" className="cart-mobile-icon">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">{cartItems.length}</span>
                  </Link>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <form onSubmit={submitHandler} className="input-group">
                    <input
                      type="search"
                      className="form-control rounded search"
                      placeholder="Tìm kiếm"
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                      Tìm kiếm
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* PC HEADER */}
          <div className="pc-header">
            <div className="row">
              <div className="col-md-3 col-4 d-flex align-items-center">
                <Link className="navbar-brand" to="/">
                  <img alt="logo" src="/images/logo.png" />
                </Link>
              </div>
              <div className="col-md-6 col-8 d-flex align-items-center">
                <form onSubmit={submitHandler} className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Tìm kiếm"
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <button type="submit" className="search-button">
                    Tìm kiếm
                  </button>
                </form>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                {
                  userInfo ? (
                    <div className="btn-group">
                  <button
                    type="button"
                    className="name-button dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Xin chào, {userInfo.name}
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/profile">
                      Thông tin
                    </Link>

                    <Link className="dropdown-item" to="#" onClick={logoutHandler}>
                      Đăng xuất
                    </Link>
                  </div>
                </div>
                  )
                  : 
                  (
                    <>
                    <Link to="/register">
                      Đăng ký
                    </Link>
                    <Link to="/login">
                      Đăng nhập
                    </Link>
                    </>
                  )
                }
                

                <Link to="/cart">
                  <i className="fas fa-shopping-bag"></i>
                  <span className="badge">{cartItems.length}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

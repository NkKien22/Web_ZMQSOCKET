import { Dropdown, Modal, Input, Space, Menu, Badge } from "antd";
import {
  PhoneOutlined,
  UserOutlined,
  DownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "./styles.css";
import { useState } from "react";
import { FormLogin } from "./formLogin";
import { FormRegister } from "./formRegister";
import { REFRESH_TOKEN_KEY, TOKEN_KEY, URL_API } from "../../utils/common";
import Cookies from "js-cookie";
import axios from "axios";
// import "./../../assets/pages/css/components.css";
// import "./../../assets/pages/css/slider.css";
import "./../../assets/pages/css/style-shop.css";
import "./../../assets/plugins/font-awesome/css/font-awesome.min.css";
import "./../../assets/plugins/bootstrap/css/bootstrap.min.css";
import "./../../assets/pages/css/animate.css";
import "./../../assets/plugins/fancybox/source/jquery.fancybox.css";
// import "./../../assets/plugins/owl.carousel/assets/owl.carousel.css";
// import "./../../assets/pages/css/style.css";
import "./../../assets/corporate/css/style.css";
// import "./../../assets/pages/css/themes/red.css";
import "./../../assets/corporate/css/custom.css";
import Logo from "./../../assets/corporate/img/logos/logo-shop-red.png"
import { Link } from "react-router-dom";
const { Search } = Input;

export const Header = (props) => {
  const { loginInfo, isLogined, setDataSearch, countProduct } = props;
  const [isOpenFormLogin, setIsOpenFormLogin] = useState(false);
  const [isOpenFormRegister, setIsOpenFormRegister] = useState(false);
  const countProductLocal = localStorage.getItem("COUNT_PRODUCT");

  const onSearch = (value) => {
    axios
      .get(
        `${URL_API}/Product/get-product?pageNum=1&pageSize=12&keyworks=${value}`
      )
      .then((res) => {
        setDataSearch(res.data.item);
      });
  };

  const openFormLogin = () => {
    setIsOpenFormLogin(true);
  };

  const openFormRegister = () => {
    setIsOpenFormRegister(true);
  };

  const handleCancelLogin = () => {
    setIsOpenFormLogin(false);
  };

  const handleCancelRegister = () => {
    setIsOpenFormRegister(false);
  };
  const logoutUser = () => {
    Cookies.remove(TOKEN_KEY);
    Cookies.remove(REFRESH_TOKEN_KEY);
    window.location.reload();
  };
  const menu = (
    <Menu
      items={[
        {
          label: (
            <a target="_blank" rel="noopener noreferrer">
              Tài khoản của tôi
            </a>
          ),
          key: "0",
        },
        {
          label: (
            <a target="_blank" rel="noopener noreferrer">
              Đơn mua
            </a>
          ),
          key: "1",
        },
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" onClick={logoutUser}>
              Đăng xuất
            </a>
          ),
          key: "3",
        },
      ]}
    />
  );
  return (
    <div>
      <div className="pre-header">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 additional-nav ms-auto">
              <ul className="list-unstyled list-inline pull-right">
                {!isLogined ?
                  <>
                    <li><a onClick={openFormLogin}>Đăng nhập</a></li>
                    <li><a onClick={openFormRegister}>Đăng ký</a></li>
                  </> :
                  <li>
                    <Dropdown overlay={menu}>
                      <Space style={{ fontWeight: "bold", paddingTop: 2 }}>
                        {loginInfo?.username}
                        <DownOutlined />
                      </Space>
                    </Dropdown>
                  </li>
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <a className="site-logo" href="shop-index.html"><img src={Logo} alt="Metronic Shop UI" /></a>
          <a href="javascript:void(0);" className="mobi-toggler"><i className="fa fa-bars" /></a>
          {/* BEGIN CART */}
          <div className="top-cart-block">
            <div className="top-cart-info">
              <a href="javascript:void(0);" className="top-cart-info-count">3 items</a>
              <a href="javascript:void(0);" className="top-cart-info-value">$1260</a>
            </div>
            <i className="fa fa-shopping-cart" />
            <div className="top-cart-content-wrapper">
              <div className="top-cart-content">
                <ul className="scroller" style={{ height: '250px' }}>
                  <li>
                    <a href="shop-item.html"><img src="assets/pages/img/cart-img.jpg" alt="Rolex Classic Watch" width={37} height={34} /></a>
                    <span className="cart-content-count">x 1</span>
                    <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                    <em>$1230</em>
                    <a href="javascript:void(0);" className="del-goods">&nbsp;</a>
                  </li>
                  <li>
                    <a href="shop-item.html"><img src="assets/pages/img/cart-img.jpg" alt="Rolex Classic Watch" width={37} height={34} /></a>
                    <span className="cart-content-count">x 1</span>
                    <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                    <em>$1230</em>
                    <a href="javascript:void(0);" className="del-goods">&nbsp;</a>
                  </li>
                  <li>
                    <a href="shop-item.html"><img src="assets/pages/img/cart-img.jpg" alt="Rolex Classic Watch" width={37} height={34} /></a>
                    <span className="cart-content-count">x 1</span>
                    <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                    <em>$1230</em>
                    <a href="javascript:void(0);" className="del-goods">&nbsp;</a>
                  </li>
                  <li>
                    <a href="shop-item.html"><img src="assets/pages/img/cart-img.jpg" alt="Rolex Classic Watch" width={37} height={34} /></a>
                    <span className="cart-content-count">x 1</span>
                    <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                    <em>$1230</em>
                    <a href="javascript:void(0);" className="del-goods">&nbsp;</a>
                  </li>
                  <li>
                    <a href="shop-item.html"><img src="assets/pages/img/cart-img.jpg" alt="Rolex Classic Watch" width={37} height={34} /></a>
                    <span className="cart-content-count">x 1</span>
                    <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                    <em>$1230</em>
                    <a href="javascript:void(0);" className="del-goods">&nbsp;</a>
                  </li>
                  <li>
                    <a href="shop-item.html"><img src="assets/pages/img/cart-img.jpg" alt="Rolex Classic Watch" width={37} height={34} /></a>
                    <span className="cart-content-count">x 1</span>
                    <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                    <em>$1230</em>
                    <a href="javascript:void(0);" className="del-goods">&nbsp;</a>
                  </li>
                  <li>
                    <a href="shop-item.html"><img src="assets/pages/img/cart-img.jpg" alt="Rolex Classic Watch" width={37} height={34} /></a>
                    <span className="cart-content-count">x 1</span>
                    <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                    <em>$1230</em>
                    <a href="javascript:void(0);" className="del-goods">&nbsp;</a>
                  </li>
                  <li>
                    <a href="shop-item.html"><img src="assets/pages/img/cart-img.jpg" alt="Rolex Classic Watch" width={37} height={34} /></a>
                    <span className="cart-content-count">x 1</span>
                    <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                    <em>$1230</em>
                    <a href="javascript:void(0);" className="del-goods">&nbsp;</a>
                  </li>
                </ul>
                <div className="text-right">
                  <a href="shop-shopping-cart.html" className="btn btn-default">View Cart</a>
                  <a href="shop-checkout.html" className="btn btn-primary">Checkout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/cart" className="cart">
        <div className="login-logout">
          <Badge count={countProduct || countProductLocal}>
            <ShoppingCartOutlined className="login-logout-icon" />
          </Badge>
          <div class="about__box-content">Giỏ hàng</div>
        </div>
      </Link>
      <Modal
        title="Đăng nhập"
        open={isOpenFormLogin}
        onCancel={handleCancelLogin}
        footer={null}
      >
        <FormLogin setIsOpenFormLogin={setIsOpenFormLogin} />
      </Modal>
      <Modal
        title="Đăng ký"
        open={isOpenFormRegister}
        onCancel={handleCancelRegister}
        footer={null}
      >
        <FormRegister setIsOpenFormRegister={setIsOpenFormRegister} />
      </Modal>
    </div>
  )
};

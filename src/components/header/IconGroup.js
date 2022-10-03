import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MenuCart from "./sub-components/MenuCart";
import { deleteFromCart } from "../../redux/actions/cartActions";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const IconGroup = ({
  currency,
  cartData,
  wishlistData,
  compareData,
  deleteFromCart,
  iconWhiteClass,
  userData,
}) => {
  const handleClick = (e) => {
    if (userData?.email) {
      // eslint-disable-next-line no-unused-expressions
      e.currentTarget.nextSibling?.classList?.toggle("active");
    }
  };

  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add("active");
  };
  const history = useHistory();
  console.log(history.location.pathname);
  return (
    <div
      className={`header-right-wrap ${iconWhiteClass ? iconWhiteClass : ""}`}
    >
      <div className="same-style account-setting d-none d-lg-block">
        <div className={"same-style"} style={{ display: "flex" }}>
          {userData?.email ? (
            <button
              className="account-setting-active"
              onClick={(e) => handleClick(e)}
            >
              <h5
                style={{
                  width: "7rem",
                  lineHeight: "15px",
                }}
              >
                My Account {userData.email}
              </h5>
              {/* <i className="pe-7s-user" /> */}
            </button>
          ) : (
            <>
              <button
                // className="account-setting-active"
                onClick={(e) => handleClick(e)}
              >
                <h5>
                  <Link
                    to={process.env.PUBLIC_URL + "/login"}
                    style={
                      history.location.pathname === "/login"
                        ? { color: "#6610f2 " }
                        : {}
                    }
                  >
                    {" "}
                    Login
                  </Link>
                </h5>
                {/* <i className="pe-7s-user" /> */}
              </button>
              <button
                // className="account-setting-active"
                onClick={(e) => handleClick(e)}
              >
                <h5>
                  <Link
                    to={process.env.PUBLIC_URL + "/register"}
                    style={
                      history.location.pathname === "/register"
                        ? { color: "#6610f2 " }
                        : {}
                    }
                  >
                    {" "}
                    Register
                  </Link>
                </h5>
                {/* <i className="pe-7s-user" /> */}
              </button>
            </>
          )}
          {/*<Link to={process.env.PUBLIC_URL + "/login-register"}>Login</Link>*/}

          {/*<Link to={process.env.PUBLIC_URL + "/login-register"}>*/}
          {/*  Register*/}
          {/*</Link>*/}
          {/*</div>*/}
          <div className="account-dropdown">
            <ul>
              <li>
                <Link to={process.env.PUBLIC_URL + "/my-account"}>
                  my account
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/orders"}>Orders</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/profile"}>Profile</Link>
              </li>
              {/*<li>*/}
              {/*  <Link to={process.env.PUBLIC_URL + "/login-register"}>Login</Link>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <Link to={process.env.PUBLIC_URL + "/login-register"}>*/}
              {/*    Register*/}
              {/*  </Link>*/}
              {/*</li>*/}
            </ul>
          </div>
        </div>
      </div>
      <div className="same-style header-search d-none d-lg-block">
        <button className="search-active" onClick={(e) => handleClick(e)}>
          <i className="pe-7s-search" />
        </button>
        <div className="search-content">
          <form action="#">
            <input type="text" placeholder="Search" />
            <button className="button-search">
              <i className="pe-7s-search" />
            </button>
          </form>
        </div>
      </div>
      <div className="same-style header-compare">
        <Link to={process.env.PUBLIC_URL + "/compare"}>
          <i className="pe-7s-shuffle" />
          <span className="count-style">
            {compareData && compareData.length ? compareData.length : 0}
          </span>
        </Link>
      </div>
      <div className="same-style header-wishlist">
        <Link to={process.env.PUBLIC_URL + "/wishlist"}>
          <i className="pe-7s-like" />
          <span className="count-style">
            {wishlistData && wishlistData.length ? wishlistData.length : 0}
          </span>
        </Link>
      </div>
      <div className="same-style cart-wrap d-none d-lg-block">
        <button className="icon-cart" onClick={(e) => handleClick(e)}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">
            {cartData && cartData.length ? cartData.length : 0}
          </span>
        </button>
        {/* menu cart */}
        <MenuCart
          cartData={cartData}
          currency={currency}
          deleteFromCart={deleteFromCart}
        />
      </div>
      <div className="same-style cart-wrap d-block d-lg-none">
        <Link className="icon-cart" to={process.env.PUBLIC_URL + "/cart"}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">
            {cartData && cartData.length ? cartData.length : 0}
          </span>
        </Link>
      </div>
      <div className="same-style mobile-off-canvas d-block d-lg-none">
        <button
          className="mobile-aside-button"
          onClick={() => triggerMobileMenu()}
        >
          <i className="pe-7s-menu" />
        </button>
      </div>
    </div>
  );
};

IconGroup.propTypes = {
  cartData: PropTypes.array,
  compareData: PropTypes.array,
  currency: PropTypes.object,
  iconWhiteClass: PropTypes.string,
  deleteFromCart: PropTypes.func,
  wishlistData: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    currency: state.currencyData,
    cartData: state.cartData,
    wishlistData: state.wishlistData,
    compareData: state.compareData,
    userData: state.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromCart: (item, addToast) => {
      dispatch(deleteFromCart(item, addToast));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IconGroup);

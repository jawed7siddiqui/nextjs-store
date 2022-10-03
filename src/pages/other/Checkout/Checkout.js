import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { connect } from "react-redux";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { getDiscountPrice } from "../../../helpers/product";
import LayoutOne from "../../../layouts/LayoutOne";
import Breadcrumb from "../../../wrappers/breadcrumb/Breadcrumb";
import CheckoutController from "./Checkout.controller";
import useInputsForm from "./useInputsForm";
import MainWrapper from "../../../components/wrapper/MainWrapper";

const Checkout = ({ location, cartItems, currency, userData }) => {
  const { pathname } = location;
  let cartTotalPrice = 0;

  console.log(userData);
  const { customInput, state } = useInputsForm(null, {
    defaultValue: {
      name: userData?.name,
      email: userData?.email,
      phone: userData?.phone,
    },
  });
  const { onSubmit } = CheckoutController(cartItems);
  console.log(cartItems);

  return (
    <MainWrapper
      title={"Flone | Checkout"}
      content={"Checkout page of flone react minimalist eCommerce template."}
      headerTop={"visible"}
      authenticated
    >
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Checkout
      </BreadcrumbsItem>
      {/*<LayoutOne headerTop="visible">*/}
      {/* breadcrumb */}
      <Breadcrumb />
      <div className="checkout-area pt-95 pb-100">
        {/*<form*/}
        {/*  onSubmit={() => {*/}
        {/*    onSubmit();*/}
        {/*  }}*/}
        {/*>*/}
        <div className="container">
          {cartItems && cartItems.length >= 1 ? (
            <div className="row">
              <div className="col-lg-7">
                <div className="billing-info-wrap">
                  <h3>Billing Details</h3>
                  <div className="row">
                    <div className="col-lg-12">
                      {customInput({ title: "Name", name: "name" })}
                    </div>

                    <div className="col-lg-12">
                      {customInput({
                        title: "Company Name",
                        name: "companyName",
                      })}
                    </div>
                    <div className="col-lg-12">
                      {customInput({
                        title: "Country",
                        name: "country",
                        listArray: [
                          { value: "4", text: "Select a country" },
                          { value: "3", text: "Azerbaijan" },
                          { value: "3", text: "Bahamas" },
                          { value: "5", text: "Bahrain" },
                          { value: "7", text: "Bangladesh" },
                          { value: "8", text: "Barbados" },
                        ],
                      })}
                    </div>
                    <div className="col-lg-12">
                      {customInput({
                        title: "Street Address",
                        inputArray: [
                          {
                            name: "house_street",
                            placeholder: "House number and street name",
                          },
                          {
                            name: "apartment_suite",
                            placeholder: "Apartment, suite, unit etc.",
                          },
                        ],
                      })}
                    </div>
                    <div className="col-lg-12">
                      {customInput({
                        title: "Town / City",
                        name: "city",
                      })}
                    </div>
                    <div className="col-lg-6 col-md-6">
                      {customInput({
                        title: "State / County",
                        name: "state",
                      })}
                    </div>
                    <div className="col-lg-6 col-md-6">
                      {customInput({
                        title: "Postcode / ZIP",
                        name: "postcode",
                      })}
                    </div>
                    <div className="col-lg-6 col-md-6">
                      {customInput({
                        title: "Phone",
                        name: "phone",
                      })}
                    </div>
                    <div className="col-lg-6 col-md-6">
                      {customInput({
                        title: "Email Address",
                        name: "email",
                      })}
                    </div>
                  </div>

                  {customInput({
                    title: "Additional information",
                    subTitle: "Order notes",
                    inputType: "textArea",
                    placeholder:
                      "Notes about your order, e.g. special notes for delivery.",
                    name: "message",
                  })}
                </div>
              </div>

              <div className="col-lg-5">
                <div className="your-order-area">
                  <h3>Your order</h3>
                  <div className="your-order-wrap gray-bg-4">
                    <div className="your-order-product-info">
                      <div className="your-order-top">
                        <ul>
                          <li>Product</li>
                          <li>Total</li>
                        </ul>
                      </div>
                      <div className="your-order-middle">
                        <ul>
                          {cartItems.map((cartItem, key) => {
                            const discountedPrice = getDiscountPrice(
                              cartItem.price,
                              cartItem.discount
                            );
                            const finalProductPrice = (
                              cartItem.price * currency.currencyRate
                            ).toFixed(2);
                            const finalDiscountedPrice = (
                              discountedPrice * currency.currencyRate
                            ).toFixed(2);

                            discountedPrice != null
                              ? (cartTotalPrice +=
                                  finalDiscountedPrice * cartItem.quantity)
                              : (cartTotalPrice +=
                                  finalProductPrice * cartItem.quantity);
                            return (
                              <li key={key}>
                                <span className="order-middle-left">
                                  {cartItem.name} X {cartItem.quantity}
                                </span>{" "}
                                <span className="order-price">
                                  {discountedPrice !== null
                                    ? currency.currencySymbol +
                                      (
                                        finalDiscountedPrice * cartItem.quantity
                                      ).toFixed(2)
                                    : currency.currencySymbol +
                                      (
                                        finalProductPrice * cartItem.quantity
                                      ).toFixed(2)}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <div className="your-order-bottom">
                        <ul>
                          <li className="your-order-shipping">Shipping</li>
                          <li>Free shipping</li>
                        </ul>
                      </div>
                      <div className="your-order-total">
                        <ul>
                          <li className="order-total">Total</li>
                          <li>
                            {currency.currencySymbol +
                              cartTotalPrice.toFixed(2)}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="payment-method"></div>
                  </div>
                  <div className="place-order mt-25">
                    <button
                      className="btn-hover"
                      type={"submit"}
                      onClick={() => {
                        onSubmit(state);
                      }}
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-lg-12">
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon mb-30">
                    <i className="pe-7s-cash"></i>
                  </div>
                  <div className="item-empty-area__text">
                    No items found in cart to checkout <br />{" "}
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/*</form>*/}
      </div>
      {/*</LayoutOne>*/}
    </MainWrapper>
  );
};

Checkout.propTypes = {
  cartItems: PropTypes.array,
  currency: PropTypes.object,
  location: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData,
    currency: state.currencyData,
    userData: state.userData,
  };
};

export default connect(mapStateToProps)(Checkout);

import PropTypes from "prop-types";
import React from "react";
import ProductgridList from "./ProductgridList";
import { Modal } from "react-bootstrap";

const ShopProducts = ({ products, layout }) => {
  return (
    <div className="shop-bottom-area mt-35">
      <div className={`row ${layout ? layout : ""}`}>
        <ProductgridList products={products} spaceBottomClass="mb-25" />
        <Modal show={false} className="product-quickview-modal-wrapper" />
      </div>
    </div>
  );
};

ShopProducts.propTypes = {
  layout: PropTypes.string,
  products: PropTypes.array,
};

export default ShopProducts;

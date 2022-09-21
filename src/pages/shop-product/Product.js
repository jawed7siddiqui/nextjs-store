import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";



const Product = ({ location, product }) => {
  const { pathname } = location;

  const rows = {
    "id": "3",
    "sku": "asdf125",
    "name": "3333333333333333333333333333333333333333333",
    "price": 17.45,
    "discount": 40,
    "offerEnd": "October 2, 2020 12:11:00",
    "new": true,
    "rating": 5,
    "saleCount": 36,
    "category": [
        "fashion",
        "men"
    ],
    "tag": [
        "fashion",
        "men",
        "jacket",
        "full sleeve"
    ],
    "variation": [
        {
            "color": "white",
            "image": "/assets/img/product/fashion/1.jpg",
            "size": [
                {
                    "name": "x",
                    "stock": 3
                },
                {
                    "name": "m",
                    "stock": 2
                },
                {
                    "name": "xl",
                    "stock": 5
                }
            ]
        },
        {
            "color": "black",
            "image": "/assets/img/product/fashion/8.jpg",
            "size": [
                {
                    "name": "x",
                    "stock": 4
                },
                {
                    "name": "m",
                    "stock": 7
                },
                {
                    "name": "xl",
                    "stock": 9
                },
                {
                    "name": "xxl",
                    "stock": 1
                }
            ]
        },
        {
            "color": "brown",
            "image": "/assets/img/product/fashion/3.jpg",
            "size": [
                {
                    "name": "x",
                    "stock": 1
                },
                {
                    "name": "m",
                    "stock": 2
                },
                {
                    "name": "xl",
                    "stock": 4
                },
                {
                    "name": "xxl",
                    "stock": 0
                }
            ]
        }
    ],
    "image": [
      "/uploads/8f87f620-35ad-11ed-bb9c-7722f46c35cf-9.jpg",
     
    ],
    "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
  }
  console.log(product);
  
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Product Page</title>
        <meta
          name="description"
          content="Product page of flone react minimalist eCommerce template."
        />
      </MetaTags>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Shop Product
      </BreadcrumbsItem>

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        {/* product description with image */}
        <ProductImageDescription
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={rows}
        />

        {/* product description tab */}
        {/* <ProductDescriptionTab
          spaceBottomClass="pb-90"
          productFullDesc={product.fullDescription}
        /> */}

        {/* related product slider */}
        {/* <RelatedProductSlider
          spaceBottomClass="pb-95"
          category={product.category[0]}
        /> */}
      </LayoutOne>
    </Fragment>
  );
};

Product.propTypes = {
  location: PropTypes.object,
  rows: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  const itemId = ownProps.match.params.id;
  return {
    rows: state.productData.products.filter(
      single => single.id === itemId
    )[0]
  };
};

export default connect(mapStateToProps)(Product);

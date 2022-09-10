import React, { Fragment,useState,useEffect } from "react";

import axios from 'axios'

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProducts } from "../../helpers/product";
import ProductGridSingle from "../../components/product/ProductGridSingle";
import { addToCart } from "../../redux/actions/cartActions";
import { addToWishlist } from "../../redux/actions/wishlistActions";
import { addToCompare } from "../../redux/actions/compareActions";


// useEffect(() => {


 
// });

const j7Product = [{
  "id": "9",
  "sku": "asdf131",
  "name": "Test 1 Product",
  "price": 35.6,
  "discount": 0,
  "new": false,
  "rating": 4,
  "saleCount": 95,
  "category": [
      "fashion",
      "women"
  ],
  "tag": [
      "fashion",
      "women",
      "top",
      "sleeveless"
  ],
  "stock": 5,
  // "affiliateLink": "//www.amazon.com",
  "image": [
      "/assets/img/product/fashion/9.jpg",
      "/assets/img/product/fashion/7.jpg",
      "/assets/img/product/fashion/5.jpg",
      "/assets/img/product/fashion/2.jpg",
      "/assets/img/product/fashion/4.jpg"
  ],
  "shortDescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
  "fullDescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
}]


const ProductGrid = ({
  products,
  currency,
  addToCart,
  addToWishlist,
  addToCompare,
  cartItems,
  wishlistItems,
  compareItems,
  sliderClassName,
  spaceBottomClass
}) => {


//   axios({
//     url:  process.env.REACT_APP_API_URL ,
//     method: 'post',
//     data:{   
//   query: `
//   query {
//     productFindAllByStore(store_id: 1) {
//         id,
//         store_id,
//         category_id,
//         title,
//         short_description,
//         long_description,
//         html_content,
//         price,
//         discount,
//         country_of_origin,
//         medias {
//             id,
//             src
//         },
//         attributes {
//             name,
//             value
//         },
//         faqs {
//             id,
//             question,
//             answer,
//         },
//         stock,
//         status,
//         created_at,
//         updated_at
//     }
// } `    
//   },
//   headers: { Authorization: 'Bearer '+window.localStorage.getItem('accessToken') }
//     }).then((result) => {      
//       console.log("productList====>"+result)

//   })
  console.log(j7Product)

  return (
    <Fragment>
      {j7Product.map(product => {
        return (
          <ProductGridSingle
            sliderClassName={sliderClassName}
            spaceBottomClass={spaceBottomClass}
            product={product}
            currency={currency}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
            addToCompare={addToCompare}
            cartItem={
              cartItems.filter(cartItem => cartItem.id === product.id)[0]
            }
            wishlistItem={
              wishlistItems.filter(
                wishlistItem => wishlistItem.id === product.id
              )[0]
            }
            compareItem={
              compareItems.filter(
                compareItem => compareItem.id === product.id
              )[0]
            }
            key={product.id}
          />
        );
      })}
    </Fragment>
  );
};

ProductGrid.propTypes = {
  addToCart: PropTypes.func,
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  cartItems: PropTypes.array,
  compareItems: PropTypes.array,
  currency: PropTypes.object,
  products: PropTypes.array,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  wishlistItems: PropTypes.array
};

const mapStateToProps = (state, ownProps) => {
  return {
    j7Product: getProducts(
      state.productData.products,
      ownProps.category,
      ownProps.type,
      ownProps.limit
    ),
    currency: state.currencyData,
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    compareItems: state.compareData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (
      item,
      addToast,
      quantityCount,
      selectedProductColor,
      selectedProductSize
    ) => {
      dispatch(
        addToCart(
          item,
          addToast,
          quantityCount,
          selectedProductColor,
          selectedProductSize
        )
      );
    },
    addToWishlist: (item, addToast) => {
      dispatch(addToWishlist(item, addToast));
    },
    addToCompare: (item, addToast) => {
      dispatch(addToCompare(item, addToast));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid);

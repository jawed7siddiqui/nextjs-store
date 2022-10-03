import {
  ADD_USERDATA,
  DELETE_FROM_WISHLIST,
  DELETE_ALL_FROM_WISHLIST,
} from "../actions/userActions";

const initState = [];

const userReducer = (state = initState, action) => {
  const userData = state,
    user = action.payload;

  if (action.type === ADD_USERDATA) {
    return user;
  }

  // if (action.type === DELETE_FROM_WISHLIST) {
  //   const remainingItems = (wishlistItems, product) =>
  //     wishlistItems.filter((wishlistItem) => wishlistItem.id !== product.id);
  //   return remainingItems(wishlistItems, product);
  // }
  //
  // if (action.type === DELETE_ALL_FROM_WISHLIST) {
  //   return wishlistItems.filter((item) => {
  //     return false;
  //   });
  // }

  return userData;
};

export default userReducer;

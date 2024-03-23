import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favouritesProducts: [],
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    deleteFavouritesItem: (state, action) => {
      state.favouritesProducts = state.favouritesProducts.filter(
        (product) => product.id !== action.payload.id
      );
      //   const productIndex = state.favouritesProducts.findIndex(
      //     (product) => product.id === action.payload.id
      //   );
      //   state.favouritesProducts.splice(productIndex, 1);
    },
    addFavouritesItem: (state, action) => {
      const productExist = state.favouritesProducts.find(
        (product) => product.id === action.payload.id
      );
      !productExist && state.favouritesProducts.push(action.payload);
    },
    // checkIfProductFavourite: (state, action) => {
    //   const productExist =
    //     state.favouritesProducts &&
    //     state.favouritesProducts.some(
    //       (product) => product.id === action.payload.id
    //     );
    //   return productExist;
    // },
  },
});

export const {
  deleteFavouritesItem,
  addFavouritesItem,
  checkIfProductFavourite,
} = favouritesSlice.actions;
export default favouritesSlice.reducer;

// to handle asynchronous logic need to use createAsycnThunk
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productList from "../data/productList.json";

// createAsyncThunk, takes two arguments, string that desrcibe the action type and callback function that returns a promise
export const fetchAllProducts = createAsyncThunk(
  "fetch-all-products",
  async (apiURL) => {
    const response = await fetch(apiURL);
    return response.json();
  }
);

const productSlice = createSlice({
  name: "products",
  // an array objects, and the fetch status will tell the component if the data is being fetched/successfully fetched/error
  initialState: { data: [], fetchStatus: " " },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.fetchStatus = "success";
      })
      .addCase(fetchAllProducts.pending, (state) => {
        state.fetchStatus = "loading";
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        // if the fetch data fails, we fall back on the productList.products
        state.data = productList.products;
        state.fetchStatus = "error";
      });
  },
});

export default productSlice;

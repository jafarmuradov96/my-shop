import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
    products: [],
    productStatus: STATUS.IDLE,
    productDetail: [],
    productDetailStatus: STATUS.IDLE
}

export const getProducts = createAsyncThunk("getproducts", async() => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data =  await response.json();
    return data;
})

export const getCategoryProduct = createAsyncThunk('getcategory', async(category) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const data = await response.json();
    return data
})
export const getDetailProduct = createAsyncThunk('getproduct', async(id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json();
    return data
})

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state, action) => {
            state.productStatus = STATUS.LOADING
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.productStatus = STATUS.SUCCES;
            state.products = action.payload;
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.productStatus = STATUS.FAIL;

        })

        .addCase(getDetailProduct.pending, (state, action) => {
            state.productDetailStatus = STATUS.LOADING
        })
        .addCase(getDetailProduct.fulfilled, (state, action) => {
            state.productDetailStatus = STATUS.SUCCES;
            state.productDetail = action.payload;
        })
        .addCase(getDetailProduct.rejected, (state, action) => {
            state.productDetailStatus = STATUS.FAIL;

        })


        .addCase(getCategoryProduct.pending, (state, action) => {
            state.productStatus = STATUS.LOADING
        })
        .addCase(getCategoryProduct.fulfilled, (state, action) => {
            state.productStatus = STATUS.SUCCES;
            state.products = action.payload;
        })
        .addCase(getCategoryProduct.rejected, (state, action) => {
            state.productStatus = STATUS.FAIL;

        })
        
    }
})


export default productSlice.reducer;


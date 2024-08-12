// import { createSlice } from "@reduxjs/toolkit";
// const slice = createSlice({
//   name: "productSlice",
//   initialState: {
//     product: product,
//   },
//   reducers: {
//     getProducts: (state, action) => {
//       const response = await fetch("https://fakestoreapi.com/products");
//       const dummy = await response.json();
//       state.product(dummy);
//     },
//   },
// });
// export const { getProducts } = slice.actions;
// export default slice.reducer;
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
interface ProductState {
  products: Product[];
}
const initialState: ProductState = {
  products: [],
};
export const fetchProducts = createAsyncThunk<Product[]>(
  'productSlice/fetchProducts',
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    });
  }
});

export default productSlice.reducer;

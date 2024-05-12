import { configureStore } from "@reduxjs/toolkit";
import products from "./products.slice";

const store = configureStore({
	reducer: {
		products,
	},
});

export default store;

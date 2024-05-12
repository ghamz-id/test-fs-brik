import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";
import { BASE_URL } from "../../constants";

// ---------------- CREATE REDUSER ----------------
const slicer = createSlice({
	name: "products",
	initialState: {
		products: [],
		productDetails: {},
	},
	reducers: {
		products: (state, action) => {
			state.products = action.payload;
		},
		productDetails: (state, action) => {
			state.productDetails = action.payload;
		},
	},
});
const { products, productDetails } = slicer.actions;

// ---------------- ASYNC THUNK ----------------
export function fetch(params) {
	return async (dispatch) => {
		try {
			const { data } = await axios({
				method: "GET",
				url: BASE_URL + "/products",
				params: params,
				headers: {
					Authorization: "Bearer " + localStorage.getItem("token"),
				},
			});
			dispatch(products(data));
		} catch (error) {
			Swal.fire({
				title: error.response.data.message,
				icon: "error",
			});
		}
	};
}

export function fetchById(id) {
	return async (dispatch) => {
		try {
			const { data } = await axios({
				method: "GET",
				url: BASE_URL + `/products/${id}`,
				headers: {
					Authorization: "Bearer " + localStorage.getItem("token"),
				},
			});
			dispatch(productDetails(data));
		} catch (error) {
			Swal.fire({
				title: error.response.data.message,
				icon: "error",
			});
		}
	};
}

export default slicer.reducer;

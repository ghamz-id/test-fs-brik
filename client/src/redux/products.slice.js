import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";
import { BASE_URL } from "../../constants";

// ---------------- CREATE REDUSER ----------------
const slicer = createSlice({
	name: "products",
	initialState: {
		products: [],
		products_id: {},
	},
	reducers: {
		products: (state, action) => {
			state.products = action.payload;
		},
		products_id: (state, action) => {
			state.products_id = action.payload;
		},
	},
});
const { products, products_id } = slicer.actions;

// ---------------- ASYNC THUNK ----------------
export function fetch_product(params) {
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

export default slicer.reducer;

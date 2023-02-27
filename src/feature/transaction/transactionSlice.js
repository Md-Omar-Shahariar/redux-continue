import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getTransactions,
  addTransaction,
  deleteTransaction,
  editTransaction,
} from "./transactionApi";

const initialState = {
  transactions: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchTransaction = createAsyncThunk(
  "transaction/fetchTransactions",
  async () => {
    const transaction = await getTransactions();
    return transaction;
  }
);
export const createTransaction = createAsyncThunk(
  "transaction/createTransactions",
  async (data) => {
    const transaction = await addTransaction(data);
    return transaction;
  }
);
export const changeTransaction = createAsyncThunk(
  "transaction/changeTransactions",
  async ({ id, data }) => {
    const transaction = await editTransaction(id, data);
    return transaction;
  }
);
export const removeTransaction = createAsyncThunk(
  "transaction/removeTransactions",
  async (id) => {
    const transaction = await deleteTransaction(id);
    return transaction;
  }
);

const transactionSlice = createSlice({
  name: "transaction",
  ...initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTransaction.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(fetchTransaction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.transactions = action.payload;
    });
    builder.addCase(fetchTransaction.rejected,(state,action)=>{
        state.isError = true
        state.error = action?.error?.message
        state.transactions = []
        state.isLoading = false
    })
  },
});

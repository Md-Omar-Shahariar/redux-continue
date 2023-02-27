import { createAsyncThunk } from "@reduxjs/toolkit"
import {getTransactions,addTransaction,deleteTransaction,editTransaction} from "./transactionApi"

const initialState = {
    transactions:[],
    isLoading:false,
    isError:false,
    error:""
}

export const fetchTransaction = createAsyncThunk("transaction/fetchTransactions",async()=>{
    const transaction =  await

})
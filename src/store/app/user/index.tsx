import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Dispatch } from "@reduxjs/toolkit";
import axiosConfig from "../../../utils/config";

interface userType {
    name: string;
    email: string;
    password: string;
}

interface Redux {
    getState: any;
    dispatch: Dispatch<any>;
}

interface postResponseType {
    data: userType;
    message: string;
}

interface InitialState {
    users: userType[];
    user: userType;
    loading: boolean;
}

interface initialState {

}


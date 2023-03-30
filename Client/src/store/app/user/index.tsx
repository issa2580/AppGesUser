import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

export interface userType {
    name: string;
    email: string;
    password: string;
}

// interface Redux {
//     getState: any;
//     dispatch: Dispatch<any>;
// }

interface postResponseType {
    data: userType;
    message: string;
}

interface InitialState {
    users: userType[];
    user: userType | null;
    loading: boolean;
}

const initialState: InitialState = {
    users: [],
    user: null ,
    loading: true
}


export const getAllUsers = createAsyncThunk(
    'appUsers/getAllUsers',
    async () => {
      const { data } = await axios.get<userType[]>(
        'api/users'
      );
      console.log('user', data)
      return data;
    }
  );



export const appUserSlice = createSlice({
    name: 'appUsers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

      builder.addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      });

    },
  });
  
export default appUserSlice.reducer


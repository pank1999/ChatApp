import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isFetching:false,
  error:false
}

export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        loginStart:(state)=>{
            state.isFetching=true;
        },
        loginSuccess:(state,action)=>{
            state.user=action.payload;
        },
        loginFailure:(state)=>{
            state.isFetching=false;
            state.user=null;
            state.error=true;
        }
    }
})

export const { loginStart ,loginFailure ,loginSuccess } = userSlice.actions

export default userSlice.reducer
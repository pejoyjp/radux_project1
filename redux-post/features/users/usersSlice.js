import {createSlice} from "@reduxjs/toolkit";
const initialState = [
    {id:'0',name:'Jin'},
    {id:'1',name:'Wang'},
    {id:'2',name:'Zhang'},
]
const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{

    }
})
export const selectAllUsers = (state)=>{
    //users and posts they both in State
    return  state.users
}
export default usersSlice.reducer
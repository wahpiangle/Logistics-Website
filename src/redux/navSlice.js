import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({
    name:'navigation',
    initialState:{
        value:""
    },
    reducers:{
        setHome:(state)=>{
            state.value = 'home'
        },
        setAbout:(state)=>{
            state.value = 'about'
        },
        setProject:(state)=>{
            state.value = 'project'
        },
        setContact:(state)=>{
            state.value = 'contact'
        },
    }
})

export const { setHome, setAbout, setProject, setContact } = navSlice.actions
export default navSlice.reducer
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
        setPricing:(state)=>{
            state.value = 'pricing'
        },
        setContact:(state)=>{
            state.value = 'contact'
        },
    }
})

export const { setHome, setAbout, setPricing, setContact } = navSlice.actions
export default navSlice.reducer
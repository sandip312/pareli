import { createSlice } from '@reduxjs/toolkit';
//redux -> user: u
const initialState = {
    token: '',
    role: '',
    id: '',
    fullname: '',
    phoneNumber: '',
    businessName: '',

};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            const { token, role, id, fullname, phoneNumber, businessName } = action.payload
            return {
                ...state,
                token, id, role, fullname, phoneNumber, businessName
            }
        },
        logout: (state, action) => {
            return {
                ...initialState
            }
        },
    },
});




export const { setUserDetails, logout } = userSlice.actions;
export default userSlice.reducer;
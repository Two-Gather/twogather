import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


const initialState = {
  nickname: "",
  email: "",
  useType: "user",    // user host admin
  isLoading: true,

}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
        state = action.payload
    }
  },
  extraReducers: {
    // Extra reducer comes here
  },
})

export const { login } = userSlice.actions;
export default userSlice.reducer;
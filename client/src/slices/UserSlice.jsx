import { createSlice, PayloadAction } from "@reduxjs/toolkit"


const initialState = {
  nickname: "",
  email: "",
  useType: "",    // user host admin
  isLoading: true,

}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state = action.payload;
    }
  }

})

export const { login } = userSlice.actions;
export default userSlice.reducer;
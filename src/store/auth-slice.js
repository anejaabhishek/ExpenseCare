import { createSlice } from "@reduxjs/toolkit";
import { account } from "../appwrite/appwrite-config";
import { loadingActions } from "./loading-slice";

const initialState = {
  userId: null,
  sessionId: null,
  userEmail: null,
};

/* State to provide and set the logged in user's userId and email */

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUserData(state, action) {
      state.userId = action.payload?.userId;
      state.sessionId = action.payload?.sessionId;
      state.userEmail = action.payload?.userEmail;
    },
    setUserId(state, action) {
      state.userId = action?.payload;
    },
    setUserEmail(state, action) {
      state.userEmail = action?.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;

export function logout(sessionId) {
  return function (dispatch) {
    dispatch(loadingActions.setLoading(true));

    const promise = account.deleteSession(sessionId);

    promise.then(
      (response) => {
        console.log("Logged out successfully");
        dispatch(authActions.setUserData(initialState));
        dispatch(loadingActions.setLoading(false));
      },
      (error) => {
        console.log(error);
        dispatch(loadingActions.setLoading(false));
      }
    );
  };
}

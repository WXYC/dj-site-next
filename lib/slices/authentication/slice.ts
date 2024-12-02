import { createAppSlice } from "@/lib/createAppSlice";

import { AuthenticationState, UpdateCredentialPayload } from "@/lib/models/authentication/types";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthenticationState = {
  credentials: {
    username: "",
    password: "",
  },
  validation: {
    username: false,
    password: false,
  },
  loginState: 0,
};

export const authenticationSlice = createAppSlice({
  name: "authentication",
  initialState,
  reducers: {
    updateCredentials: (
      state,
      action: PayloadAction<UpdateCredentialPayload>
    ) => {
        state.credentials[action.payload.field] = action.payload.value;
        state.validation[action.payload.field] = action.payload.approved;
    },
  },
});

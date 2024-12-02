import { createAppSlice } from "@/lib/createAppSlice";
import { ApplicationState, RightbarModes } from "@/lib/models/application/types";
import { ColorPaletteProp } from "@mui/joy";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: ApplicationState = {
  classic: false,
  rightbarMode: RightbarModes.NONE,
  routeStyle: "primary",
};

const routeStyles: { [key: string]: ColorPaletteProp } = {
  admin: "success",
  settings: "warning",
};

export const applicationSlice = createAppSlice({
  name: "application",
  initialState,
  reducers: {
    setClassic: (state, action) => {
      state.classic = action.payload;
    },
    toggleClassic: (state, action: PayloadAction<undefined>) => {
      state.classic = !state.classic;
    },
    getRouteStyle: (state, action) => {
      const foundKey = Object.keys(routeStyles).find((key) =>
        action.payload.includes(key)
      );
      state.routeStyle = foundKey ? routeStyles[foundKey] : "primary";
    },
  },
});

import { RootState } from "@/lib/store";

export const getClassic = (state: RootState) => state.application.classic;
export const getPageStyle = (state: RootState) => state.application.routeStyle;
export const getRightbarMode = (state: RootState) => state.application.rightbarMode;
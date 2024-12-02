import { ColorPaletteProp } from "@mui/joy";

export interface ApplicationState {
    classic: boolean;
    rightbarMode: RightbarModes;
    routeStyle: ColorPaletteProp;
}

export enum RightbarModes {
    SONG_CARD = "SONG_CARD",
    EDIT_CATALOG = "EDIT_CATALOG",
    NONE = "NONE",
}
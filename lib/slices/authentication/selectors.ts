import { RootState } from "@/lib/store";

export const getIsAuthenticating = (state: RootState) =>
  state.authentication.loginState === 1;
export const getCredentials = (state: RootState) =>
  state.authentication.credentials;
export const getValidation = (state: RootState) =>
  state.authentication.validation;

export const getIsValid = (state: RootState) => {
  const validation = getValidation(state);
  return Object.values(validation).every((v) => v);
};

export const getNeedsNewPassword = (state: RootState) =>
  state.authentication.loginState === 2;

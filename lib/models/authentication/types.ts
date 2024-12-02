export interface AuthenticationState {
  credentials: Credentials;
  validation: CredentialValidation;
  loginState: LoginState;
}

export enum LoginState {
  LoggedOut = 0,
  LoggingIn = 1,
  NeedsNewPassword = 2,
  LoggedIn = 3,
}

export interface Credentials {
  username: string;
  password: string;
  realname?: string;
  djname?: string;
}

export type CredentialValidation = {
  [K in keyof Credentials]: boolean;
};

export interface UpdateCredentialPayload {
  field: keyof Credentials;
  value: string;
  approved: boolean;
}

export enum UserTypes {
  DJ = 1,
  MUSIC_DIRECTOR = 2,
  STATION_MANAGER = 3,
}

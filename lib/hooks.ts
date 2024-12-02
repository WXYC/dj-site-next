// This file serves as a central hub for re-exporting pre-typed Redux hooks.
import { useDispatch, useSelector, useStore } from "react-redux";
import type { AppDispatch, AppStore, RootState } from "./store";
import { useEffect, useState } from "react";
import {
  fetchAuthSession,
  fetchUserAttributes,
  getCurrentUser,
} from "aws-amplify/auth";
import { UserTypes } from "./models/authentication/types";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();

export function useAuthenticatedUser() {
  const [user, setUser] = useState<Record<string, any>>({});

  useEffect(() => {
    async function getUser() {
      const session = await fetchAuthSession();
      if (!session.tokens) {
        return;
      }

      const user = {
        ...(await getCurrentUser()),
        ...(await fetchUserAttributes()),
        permissions: UserTypes.DJ,
      };
      const groups = session.tokens.accessToken.payload["cognito:groups"];

      let isStationManager = Boolean(
        // @ts-ignore
        groups && groups.includes("station-management")
      );
      let isMusicDirector = Boolean(
        // @ts-ignore
        groups && groups.includes("music-management")
      );

      if (isStationManager) {
        user.permissions = UserTypes.STATION_MANAGER;
      } else if (isMusicDirector) {
        user.permissions = UserTypes.MUSIC_DIRECTOR;
      }

      setUser(user);
    }

    getUser();
  }, []);

  return user;
}

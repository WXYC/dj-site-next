"use client";

import LeaveClassic from "../components/Theme/Classic/LeaveClassic";

export default function ClassicLoginPage() {
  //const dispatch = useAppDispatch();

  //const resetPasswordRequired = useAppSelector(needsNewPassword);
  const handlePasswordUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const username = form.username.value;
    const password = form.password.value;

    if (username && password) {
      //dispatch(login({ username, password }));
    }
  };

  return false ? (
    <div>Not done yet</div>
  ) : (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ marginBottom: 20 }}>
        <LeaveClassic />
      </div>
    </div>
  );
}

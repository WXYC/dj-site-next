"use client";

import { useAppDispatch } from "@/lib/hooks";
import { authenticationSlice } from "@/lib/slices/authentication/slice";
import {
  FormControl,
  FormLabel,
  Input,
  LinearProgress,
  Typography,
} from "@mui/joy";
import React, { useEffect, useState } from "react";

export default function PasswordBox({
  minLength,
  disabled,
  guide,
}: {
  minLength?: number;
  disabled?: boolean;
  guide?: boolean;
}) {
  const dispatch = useAppDispatch();
  const [password, setPassword] = useState("");

  const [approved, setApproved] = useState(false);
  const [pWordStrength, setPWordStrength] = useState(""); // for the password strength meter

  useEffect(() => {
    dispatch(
      authenticationSlice.actions.updateCredentials({
        field: "password",
        value: password,
        approved: approved,
      })
    );
  }, [password]);

  useEffect(() => {
    // Needs one capital letter, one lowercase letter, and one number
    // Needs to be at least 8 characters long
    // start with capital letter test:
    let strengthString = "Needs ";
    if (!password.match(/[A-Z]/g)) {
      strengthString += "one capital letter";
    }
    // lowercase letter test:
    if (!password.match(/[a-z]/g)) {
      strengthString +=
        strengthString === "Needs "
          ? "one lowercase letter"
          : ", one lowercase letter";
    }
    // number test:
    if (!password.match(/[0-9]/g)) {
      strengthString +=
        strengthString === "Needs " ? "one number" : ", one number";
    }
    // length test:
    if (password.length < (minLength || 8)) {
      strengthString +=
        strengthString === "Needs "
          ? `to be at least ${minLength} characters long`
          : `, to be at least ${minLength} characters long`;
    }
    // add 'and' if there are multiple requirements at second-to-last requirement
    if ((strengthString?.match(/,/g)?.length ?? 0) > 0) {
      strengthString = strengthString.replace(/,([^,]*)$/, " and$1");
    }
    // if all tests pass, strengthString will still be 'Needs '
    if (strengthString === "Needs ") {
      strengthString = "Strong";
      setApproved(true);
    } else {
      setApproved(false);
    }
    setPWordStrength(strengthString);
  }, [password, minLength]);

  return (
    <FormControl
      required
      sx={{
        "--hue": Math.min(password.length * 10, 120),
      }}
    >
      <FormLabel>Password</FormLabel>
      <Input
        placeholder="•••••••"
        type="password"
        name={"password"}
        disabled={disabled}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
        error={pWordStrength !== "Strong"}
        color={pWordStrength === "Strong" ? "success" : "primary"}
      />
      {guide && (
        <><LinearProgress
        determinate
        size="sm"
        value={Math.min((password.length * 100) / (minLength || 8), 100)}
        sx={{
          mt: 1,
          bgcolor: "background.level3",
          color: "hsl(var(--hue) 80% 40%)",
        }}
      />
      <Typography
        level="body-xs"
        sx={{
          alignSelf: "flex-end",
          color: "hsl(var(--hue) 80% 30%)",
        }}
      >
        {pWordStrength}
      </Typography></>)}
    </FormControl>
  );
}

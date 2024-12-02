"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Credentials } from "@/lib/models/authentication/types";
import { getCredentials } from "@/lib/slices/authentication/selectors";
import { authenticationSlice } from "@/lib/slices/authentication/slice";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import React, { useEffect, useState } from "react";

export default function ConfirmBox({
  name,
  title,
  disabled,
  type,
  placeholder,
}: {
  name: keyof Credentials;
  title: string;
  disabled?: boolean;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const credentials = useAppSelector(getCredentials);
  const [compareTo, setCompareTo] = useState("");
  const [approved, setApproved] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    setCompareTo(credentials[name] ?? "");
  }, [credentials]);

  useEffect(() => {
    if (value === compareTo && value.length > 0) {
      setApproved(true);
    } else {
      setApproved(false);
    }

    dispatch(
      authenticationSlice.actions.updateCredentials({
        field: name,
        value: compareTo,
        approved: approved,
      })
    );
  }, [value, compareTo]);

  return (
    <FormControl required>
      <FormLabel>{title}</FormLabel>
      <Input
        placeholder={placeholder || `Confirm your ${title.toLocaleLowerCase()}`}
        type={type || "text"}
        name={name}
        disabled={disabled}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        error={!approved}
        color={approved ? "success" : "primary"}
      />
    </FormControl>
  );
}

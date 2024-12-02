"use client";

import { useAppDispatch } from "@/lib/hooks";
import { Credentials } from "@/lib/models/authentication/types";
import { authenticationSlice } from "@/lib/slices/authentication/slice";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import { useEffect, useState } from "react";

export default function RequiredBox({
  name,
  title,
  placeholder,
  helper,
  disabled,
  type,
}: {
  name: keyof Credentials;
  title: string;
  placeholder?: string;
  helper?: string;
  disabled?: boolean;
  type?: React.HTMLInputTypeAttribute;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const [approved, setApproved] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value.length > 0) {
      setApproved(true);
    } else {
      setApproved(false);
    }

    dispatch(
      authenticationSlice.actions.updateCredentials({
        field: name,
        value: value,
        approved: approved,
      })
    );
  }, [value, approved]);

  return (
    <FormControl required>
      <FormLabel>{title}</FormLabel>
      <Input
        placeholder={placeholder || `Enter your ${title.toLocaleLowerCase()}`}
        type={type || "text"}
        name={name}
        disabled={disabled}
        color={value.length > 0 ? "success" : "primary"}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      {helper && (<Typography level="body-xs">{helper}</Typography>)}
    </FormControl>
  );
}

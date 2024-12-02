"use client";

import { useAppSelector } from "@/lib/hooks";
import {
  getIsAuthenticating,
  getIsValid,
} from "@/lib/slices/authentication/selectors";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { Link } from "@mui/joy";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import React from "react";
import ConfirmBox from "./ConfirmBox";
import PasswordBox from "./PasswordBox";
import RequiredBox from "./RequiredBox";

export default function UserDataForm(): JSX.Element {
  const authenticating = useAppSelector(getIsAuthenticating);
  const isValid = useAppSelector(getIsValid);

  const handlePasswordUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const holdOnQuotesAndArtists = [
    ["for one more day.", "Wilson Phillips"],
    ["if you feel like letting go.", "Tom Waits"],
    ["tight to your dreams.", "Electric Light Orchestra"],
    ["be strong, and stay true to yourself.", "2Pac"],
    ["if you believe in love.", "Michael Bublé"],
    ["when everything falls apart.", "Good Charlotte"],
    ["to what you believe in.", "Mumford & Sons"],
    ["I'm still alive.", "Pearl Jam"],
    ["when the night is closing in.", "Chris Cornell"],
    ["to hope if you got it.", "Florence + The Machine"],
  ];

  const randomIndexForHoldOnQuote = Math.floor(
    Math.random() * holdOnQuotesAndArtists.length
  );

  return (
    <>
      <div>
        <Link
          startDecorator={<ArrowLeftIcon />}
          href="/#/login"
          level="body-sm"
          sx={{ alignSelf: "flex-end", mb: 3 }}
        >
          Log in with a different account
        </Link>
        <Typography level="h1" fontSize={"4.5rem"}>
          Hold On
        </Typography>
        <Typography level="h3" suppressHydrationWarning>
          ...{holdOnQuotesAndArtists[randomIndexForHoldOnQuote][0]}
        </Typography>
        <Typography
          level="body-md"
          sx={{ my: 1, mb: 3, textAlign: "right" }}
          suppressHydrationWarning
        >
          - {holdOnQuotesAndArtists[randomIndexForHoldOnQuote][1]}
        </Typography>
        <Typography level="body-sm">
          Actually, we just need some more information from you.
        </Typography>
      </div>
      <form onSubmit={handlePasswordUpdate} autoComplete="off">
        <RequiredBox
          title="Real Name"
          name="realname"
          disabled={authenticating}
          type="text"
        />
        <RequiredBox
          title="DJ Name"
          name="djname"
          disabled={authenticating}
          type="text"
        />
        <PasswordBox disabled={authenticating} />
        <ConfirmBox
          name="password"
          title="Confirm Password"
          disabled={authenticating}
        />

        <Button
          type="submit"
          variant="solid"
          color="primary"
          disabled={authenticating || !isValid}
          loading={authenticating}
        >
          Submit
        </Button>
      </form>
    </>
  );
}

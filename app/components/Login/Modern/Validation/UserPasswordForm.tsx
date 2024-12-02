"use client";
import { handleSignIn } from "@/lib/utilities/authentication/cognitoActions";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import PasswordBox from "./PasswordBox";
import RequiredBox from "./RequiredBox";

export default function UserPasswordForm(): JSX.Element {
  const [authenticating, setAuthenticating] = useState(false);

  const welcomeQuotesAndArtists = [
    ["to the Jungle", "Guns N' Roses"],
    ["to the Hotel California", "Eagles"],
    ["to the Black Parade", "My Chemical Romance"],
    ["to the Pleasuredome", "Frankie Goes to Hollywood"],
    ["Home", "Coheed and Cambria"],
    ["to My Life", "Simple Plan"],
    ["to the Party", "Diplo, French Montana, Lil Pump ft. Zhavia Ward"],
    ["to the Family", "Avenged Sevenfold"],
    ["to the Machine", "Pink Floyd"],
    ["to the Club", "Manian ft. Aila"],
  ];

  const randomIndexForWelcomeQuote = Math.floor(
    Math.random() * welcomeQuotesAndArtists.length
  );

  const [error, dispatch] = useFormState(handleSignIn, undefined);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setAuthenticating(true);

    const data = new FormData(e.currentTarget);

    dispatch(data);
  };

  useEffect(() => {
    if (error) {
      setAuthenticating(false);
      toast.error(error);
    }
  }, [error]);

  return (
    <>
      <div>
        <Typography level="h1" fontSize={"4.5rem"}>
          Welcome
        </Typography>
        <Typography level="h2" fontSize={"4.5rem"} suppressHydrationWarning>
          ...{welcomeQuotesAndArtists[randomIndexForWelcomeQuote][0]}
        </Typography>
        <Typography
          level="body-md"
          sx={{ my: 1, mb: 3, textAlign: "right" }}
          suppressHydrationWarning
        >
          - {welcomeQuotesAndArtists[randomIndexForWelcomeQuote][1]}
        </Typography>
      </div>
      <form onSubmit={handleLogin} autoComplete="off">
        <RequiredBox
          title="Username"
          type="text"
          name="username"
          disabled={authenticating}
        />
        <PasswordBox disabled={authenticating} />
        <Button
          type="submit"
          fullWidth
          disabled={authenticating}
          loading={authenticating}
        >
          Sign in
        </Button>
      </form>
    </>
  );
}

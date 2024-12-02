import { resendSignUpCode, signIn, signOut } from "aws-amplify/auth";
import { redirect } from "next/navigation";
import { getErrorMessage } from "../getErrorMessage";

export async function handleSignIn(
  prevState: string | undefined,
  formData: FormData
) {
  let redirectLink = "/dashboard";
  try {
    const { isSignedIn, nextStep } = await signIn({
      username: String(formData.get("username")),
      password: String(formData.get("password")),
    });
    if (nextStep.signInStep === "CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED") {
      redirectLink = "/auth/confirm-signin";
    }
  } catch (error) {
    return getErrorMessage(error);
  }

  redirect(redirectLink);
}

export async function handleSignOut() {
  try {
    await signOut();
  } catch (error) {
    console.log(getErrorMessage(error));
  }
  redirect("/auth/login");
}

import { cookies } from "next/headers";
import ClassicLoginPage from "./classic";
import ModernLoginPage from "./modern";

export default function LoginPage(): JSX.Element {
  const cookieStore = cookies();
  if (cookieStore.get("viewMode")?.value === "classic") {
    return <ClassicLoginPage />;
  } else {
    return <ModernLoginPage />;
  }
}

import { redirect } from "next/navigation";

export default function IndexPage() {
  redirect("/dashboard/catalog");
}

export const metadata = {
  title: "WXYC DJ Site",
};

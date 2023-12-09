import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const AuthLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");

  return <>{children}</>;
};

export default AuthLayout;

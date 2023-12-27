import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const AuthLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (session) {
    if (session?.user?.role == "admin") redirect("/dashboard");
    else redirect("/dashboard-pharmacy");
  }

  return <>{children}</>;
};

export default AuthLayout;

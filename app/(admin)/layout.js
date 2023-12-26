import "../../public/assets/main/css/fonts.css";
import DashboardFooter from "@/components/layouts/dashboard/DashboardFooter";
import DashboardHeader from "@/components/layouts/dashboard/DashboardHeader";
import Sidebar from "@/components/layouts/dashboard/Sidebar";
import { getServerSession } from "next-auth";
import Script from "next/script";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/auth/login");

  return (
    <>
      <main id="main-wrapper" className="show">
        <Sidebar />
        {children}
        <DashboardHeader />
        <DashboardFooter />
      </main>

      {/* <!-- Main jQuery --> */}
      <Script src="assets/plugins/jquery/jquery.min.js" />
      {/* <!-- popper js --> */}
      <Script src="assets/plugins/popper/popper.min.js" />

      {/* Main Custom JQuery */}
      <Script src="assets/js/main.js" />
    </>
  );
}

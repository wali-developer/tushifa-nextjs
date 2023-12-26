import "../../public/assets/main/css/fonts.css";
import DashboardFooter from "@/components/layouts/dashboard/DashboardFooter";
import { getServerSession } from "next-auth";
import Script from "next/script";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import PharmcistHeader from "@/components/layouts/pharmcist/PharcmistHeader";
import PharmcistSidebar from "@/components/layouts/pharmcist/PharcmistSidebar";

export default async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/auth/login");

  return (
    <>
      <main id="main-wrapper" className="show">
        <PharmcistSidebar />
        <PharmcistHeader />
        {children}
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

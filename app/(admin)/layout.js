import "../../public/assets/main/css/fonts.css";
import DashboardFooter from "@/components/layouts/dashboard/DashboardFooter";
import DashboardHeader from "@/components/layouts/dashboard/DashboardHeader";
import Sidebar from "@/components/layouts/dashboard/Sidebar";
import Script from "next/script";

export default function DashboardLayout({ children }) {
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
      {/* <!-- Bootstrap --> */}
      <Script src="assets/plugins/bootstrap/js/bootstrap.js" />

      {/* Moment */}
      <Script src="assets/plugins/moment/moment.min.js" />

      {/*  Datatable */}
      <Script src="assets/plugins/datatables/jquery.dataTables.min.js" />
      <Script src="assets/js/init-tdatatable.js" />

      {/* Main Custom JQuery */}
      <Script src="assets/js/toggleFullScreen.js" />
      <Script src="assets/js/main.js" />
    </>
  );
}

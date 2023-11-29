import DashboardFooter from "./DashboardFooter";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div id="main-wrapper" className="show">
        <Sidebar />
        {children}
        <DashboardHeader />
        <DashboardFooter />
      </div>
    </>
  );
}

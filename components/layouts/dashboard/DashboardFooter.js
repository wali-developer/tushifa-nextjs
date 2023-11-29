import Link from "next/link";
import React from "react";

const DashboardFooter = () => {
  return (
    <div className="footer">
      <div className="copyright">
        <p className="mb-0">
          Copyright © &amp;{" "}
          <Link href="#" target="_blank">
            Tushifa{" "}
          </Link>
          2023
        </p>
      </div>
    </div>
  );
};

export default DashboardFooter;

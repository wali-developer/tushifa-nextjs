import Script from "next/script";
import "../public/assets/plugins/bootstrap/bootstrap.min.css";
import "../public/assets/plugins/icofont/icofont.min.css";
import "../public/assets/plugins/slick-carousel/slick/slick.css";
import "../public/assets/plugins/slick-carousel/slick/slick-theme.css";
import "../public/assets/main/scss/style.scss";
import NextTopLoader from "nextjs-toploader";
import AuthProvider from "@/components/AuthProvider";
// import "./globals.css";

export const metadata = {
  title: "Tushifa",
  description: "Tushifa - Healthcare management system",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/images/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/images/favicon-16x16.png"
          />
          <link rel="manifest" href="/assets/images/site.webmanifest" />
        </head>
        <body>
          <NextTopLoader color="#FF4522" />
          {children}

          {/* <!-- Main jQuery --> */}
          <Script src="/assets/plugins/jquery/jquery.js" />
          {/* <!-- Bootstrap 4.3.2 --> */}
          <Script src="/assets/plugins/bootstrap/js/popper.js" />
          <Script src="/assets/plugins/bootstrap/js/bootstrap.min.js" />
          {/* <!-- Slick Slider --> */}
          <Script src="assets/plugins/slick-carousel/slick/slick.min.js" />
          {/* <!-- Counterup --> */}
          <Script src="/assets/plugins/counterup/jquery.waypoints.min.js" />
          <Script src="/assets/plugins/counterup/jquery.counterup.min.js" />

          <Script src="/assets/js/script.js" />
          <Script src="/assets/js/contact.js" />
        </body>
      </html>
    </AuthProvider>
  );
}

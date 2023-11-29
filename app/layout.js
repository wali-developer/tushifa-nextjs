import "../public/assets/plugins/bootstrap/bootstrap.min.css";
import "../public/assets/plugins/icofont/icofont.min.css";
import "../public/assets/plugins/slick-carousel/slick/slick.css";
import "../public/assets/plugins/slick-carousel/slick/slick-theme.css";
import "../public/assets/main/scss/style.scss";
import Script from "next/script";
// import "./globals.css";

export const metadata = {
  title: "Tushifa",
  description: "Tushifa - Healthcare management system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png" />
        <link rel="manifest" href="/assets/images/site.webmanifest" />
      </head>
      <body>
        {/* <NextTopLoader color="#FF4522" /> */}
        {children}

        {/* <!-- Main jQuery --> */}
        <Script src="/assets/plugins/jquery/jquery.js" />
        {/* <!-- Bootstrap 4.3.2 --> */}
        <Script src="/assets/plugins/bootstrap/js/popper.js" />
        <Script src="/assets/plugins/bootstrap/js/bootstrap.min.js" />
        <Script src="/assets/plugins/counterup/jquery.easing.js" />
        {/* <!-- Slick Slider --> */}
        <Script src="assets/plugins/slick-carousel/slick/slick.min.js" />
        {/* <!-- Counterup --> */}
        <Script src="/assets/plugins/counterup/jquery.waypoints.min.js" />

        <Script src="/assets/plugins/shuffle/shuffle.min.js" />
        <Script src="/assets/plugins/counterup/jquery.counterup.min.js" />
        {/* <!-- Google Map --> */}
        {/* <Script src="/assets/plugins/google-map/map.js" /> */}
        {/* <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAkeLMlsiwzp6b3Gnaxd86lvakimwGA6UA&callback=initMap"/> */}

        <Script src="/assets/js/Script.js" />
        <Script src="/assets/js/contact.js" />
      </body>
    </html>
  );
}

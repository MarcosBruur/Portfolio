import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Layout() {
  return (
    <>
      <div
        className="
        bg-bg-light
      dark:bg-bg 
      dark:text-text
      "
      >
        <ScrollToTop />
        <div>
          <Header />
          <main className="container md:mx-auto md:py-16 md:gap-20  md:mt-0">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

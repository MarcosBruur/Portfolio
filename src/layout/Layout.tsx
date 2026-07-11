import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Layout() {
  return (
    <>
      <div
        className="
        min-h-screen
        bg-bg-light
      dark:bg-bg 
      dark:text-text
      "
      >
        <ScrollToTop />
        <div>
          <Header />
          <main className="mx-auto w-full max-w-[1720px] px-4 py-10 sm:px-6 md:px-8 md:py-16 2xl:px-10 2xl:py-20">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

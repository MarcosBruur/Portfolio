import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
  return (
    <>
    <div>
      <Header />
      <main className="container text-center md:mx-auto md:py-16 md:flex md:gap-20 mt-20 md:mt-0">
        <Outlet />
      </main>
    </div>
    </>
  );
}

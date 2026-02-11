import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
  return (
    <>
      <div>
        <Header />
        <main className="container md:mx-auto md:py-16 md:gap-20  md:mt-0">
          <Outlet />
        </main>
      </div>
    </>
  );
}

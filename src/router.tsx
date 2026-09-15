import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import SkillsPage from "./views/SkillsPage";
import ProyectsPage from "./views/ProyectsPage";
import Layout from "./layout/Layout";
import ContactPage from "./views/ContactPage";
import TrajectoryPage from "./views/TrajectoryPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProyectsPage />} />
          <Route path="/trajectory" element={<TrajectoryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

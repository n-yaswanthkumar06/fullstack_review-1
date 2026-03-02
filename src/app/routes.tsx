import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { LandingPage } from "./components/LandingPage";
import { AdminDashboard } from "./components/AdminDashboard";
import { FarmerDashboard } from "./components/FarmerDashboard";
import { ExpertDashboard } from "./components/ExpertDashboard";
import { PublicDashboard } from "./components/PublicDashboard";
import { Resources } from "./components/Resources";
import { SectorConnections } from "./components/SectorConnections";
import { Discussions } from "./components/Discussions";
import { Initiatives } from "./components/Initiatives";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: LandingPage },
      { path: "admin", Component: AdminDashboard },
      { path: "farmer", Component: FarmerDashboard },
      { path: "expert", Component: ExpertDashboard },
      { path: "public", Component: PublicDashboard },
      { path: "resources", Component: Resources },
      { path: "sectors", Component: SectorConnections },
      { path: "discussions", Component: Discussions },
      { path: "initiatives", Component: Initiatives },
      { path: "*", Component: NotFound },
    ],
  },
]);

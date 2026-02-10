import { Route, BrowserRouter, Routes } from "react-router-dom";


import "./../style/Tailwind.css";
import "./../style/App.css";


import { Dashboard_Leyout } from "./Dashboard/Leyout";
import Index from "./../Components/Dashboard/pages/index";
import Editor from "./../Components/Dashboard/pages/Editor";
import Workflow from "./../Components/Dashboard/pages/workflow";
import Analytics from "./../Components/Dashboard/pages/Analytics";



import { AppLayout } from "./Leyout";
import { AuthProvider } from "./../context/AuthContext";
import IsLoginCheck from "./Authentication/IsLoginCheck";

import Home from "./pages/Home";
import Uk from "./pages/Uk";
import Business from "./pages/Business";
import Health from "./pages/Health";
import Politics from "./pages/Politics";
import Science from "./pages/Science";
import Sport from "./pages/Sport";
import Technology from "./pages/Technology";
import World from "./pages/World";
import NotFound from "./pages/NotFound";
import Details from "./pages/Details";
import Live from "./pages/Live";
import Profile from "./pages/Profile";

export default function App() {



  return (
    <BrowserRouter>
      < AuthProvider >
        <IsLoginCheck >
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="profile" element={<Profile />} />
              <Route path="uk" element={<Uk />} />
              <Route path="technology" element={<Technology />} />
              <Route path="sport" element={<Sport />} />
              <Route path="world" element={<World />} />
              <Route path="politics" element={<Politics />} />
              <Route path="science" element={<Science />} />
              <Route path="health" element={<Health />} />
              <Route path="business" element={<Business />} />
              <Route path="details" element={<Details />} />
              <Route path="live" element={<Live />} />
            </Route>


            <Route path="dashboard" element={<Dashboard_Leyout />}>
              <Route index element={<Index />} />
              <Route path="SmartEditor" element={<Editor />} />
              <Route path="Workflow" element={<Workflow />} />
              <Route path="Workflow" element={<Workflow />} />
              <Route path="Analytics" element={<Analytics />} />
            </Route>

            <Route path="dashboard/Auth" >

            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </IsLoginCheck>
      </AuthProvider>
    </BrowserRouter>
  );
}


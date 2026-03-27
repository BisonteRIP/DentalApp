import "./App.css";
import { SidebarProvider } from "./components/ui/sidebar";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Historial from "./pages/Historial";
import Odontograma from "./pages/Odontograma";
import Agenda from "./pages/Agenda";

function App() {
  return (
    <>
      <SidebarProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Odontograma" element={<Odontograma />} />
            <Route path="/Historial" element={<Historial />} />
            <Route path="/Agenda" element={<Agenda />} />
          </Route>
        </Routes>
      </SidebarProvider>
    </>
  );
}

export default App;

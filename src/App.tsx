import "./App.css";
import Header from "./components/Header";
import { SidebarProvider } from "./components/ui/sidebar";
import AppSidebar from "./components/App-sidebar";

function App() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <Header />
      </SidebarProvider>
    </>
  );
}

export default App;

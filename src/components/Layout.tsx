import Header from "./Header";
import AppSidebar from "./App-sidebar";
import {Outlet} from "react-router-dom";


export default function Layout (){
    return (
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    );
}
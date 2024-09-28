import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { DashboardPage } from "./pages/dashboard";
import { ReservationPage } from "./pages/reservation";
import { PassengersContextProvider } from "./context";
import { Navigation } from "./components/navigation";

function NavBarWrapper() {
  return (
    <>
      <Navigation />
      <div id="page-container">
        <Outlet />
      </div>
    </>
  )
}

function App(): React.ReactElement {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBarWrapper/>,
      children: [
        {
          path: '/',
          element: <DashboardPage />
        },
        {
          path: '/reservation',
          element: <ReservationPage />,
        }
      ]
    },
  ]);

  return (
    <div className="App">
      <PassengersContextProvider>
        <RouterProvider router={router} />
      </PassengersContextProvider>
    </div>
  );
}

export default App;

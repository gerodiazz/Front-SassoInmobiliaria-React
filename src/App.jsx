import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/dashboard/Dashboard";
import Contact from "./Components/contact/Contact";
import Tasaciones from "./Components/tasaciones/Tasaciones";
import PropList from "./Components/propList/PropList";
import Login from "./Components/login/Login";


function App() {


  const router = createBrowserRouter([
    { path: "/", element: <Dashboard /> },
    { path: "/contact", element: <Contact /> },
    { path: "/tasaciones", element: <Tasaciones /> },
    { path: "/propList", element: <PropList /> },
    {path: "/login", element: <Login />}
 
  ]);

  return <RouterProvider router={router} />;
}

export default App;
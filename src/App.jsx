import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/layOu/Layout'; 
import Contact from './Components/contact/Contact';
import AppraisalForm from './Components/appraisalForm/AppraisalForm';
import Login from './Components/login/Login';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import PropList from './Components/propList/PropList';
import Dashboard from './Components/dashboard/Dashboard';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Dashboard/>},
        { path: "contact", element: <Contact /> },
        { path: "appraisalForm", element: <AppraisalForm /> },
        { path: "propList", element: <PropList/> },
        
      ],
    },
    { path: "/login", element: <Login /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
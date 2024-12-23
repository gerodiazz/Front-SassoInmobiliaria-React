import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/layOu/Layout'; 
import Dashboard from './Components/dashboard/Dashboard';
import Contact from './Components/contact/Contact';
import AppraisalForm from './Components/appraisalForm/AppraisalForm';
import Login from './Components/login/Login';
import PropList from './Components/propList/PropList';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Dashboard /> }, 
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
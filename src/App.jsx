import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/layOu/Layout'; 
import Contact from './Components/contact/Contact';
import AppraisalForm from './Components/appraisalForm/AppraisalForm';
import Login from './Components/login/Login';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "contact", element: <Contact /> },
        { path: "appraisalForm", element: <AppraisalForm /> },
        
      ],
    },
    { path: "/login", element: <Login /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
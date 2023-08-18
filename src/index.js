import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Badminton from './Badminton';
import Home from './Home';
import Aghdasie from './Aghdasie';
import Contactus from './Contactus';
import Login from './Login';
import Singin from './Singin'
import Aboutus from './Aboutus';
import Bartarin from './Bartarin';
import Peygiri from './Peygiri';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/react-test/",
    element: <App />,
  },
  {
    path: "Badminton",
    element: <Badminton/>,
  },
  {
    path: "Aghdasie",
    element: <Aghdasie/>,
  },
  {
    path: "Login",
    element: <Login/>,
  },
  {
    path: "Singin",
    element: <Singin/>,
  },
  {
    path: "Contactus",
    element: <Contactus/>,
  },
  {
    path: "Aboutus",
    element: <Aboutus/>,
  },
  {
    path: "Bartarin",
    element: <Bartarin/>,
  },
  {
    path: "Peygiri",
    element: <Peygiri/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

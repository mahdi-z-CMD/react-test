import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Badminton from './Badminton';
import Home from './Home';
import Aghdasie from './Aghdasie';
import Login from './Login';
import Singin from './Singin'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/react-test",
    element: <App />,
  },
  {
    path: "/react-test/Badminton",
    element: <Badminton/>,
  },
  {
    path: "/react-test/Badminton/Aghdasie",
    element: <Aghdasie/>,
  },
  {
    path: "/react-test/Login",
    element: <Login/>,
  },
  {
    path: "/react-test/Singin",
    element: <Singin/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

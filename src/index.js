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
    path: "/",
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
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

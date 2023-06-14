import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './components/pages';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import Logo from './components/logo/Logo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Logo />
    <RouterProvider router={router} />
  </React.StrictMode>
);

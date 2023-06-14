import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './components/pages';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  </React.StrictMode>
);

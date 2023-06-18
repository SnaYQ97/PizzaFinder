import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import HomePage from '../pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

export default  router;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals.js';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import {Layout, HomePage, Login, Register, Cart, Catalog, Chekout, ForgotPassword} from './Components.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
  // [
  //   {
  //     path: '/',
  //     element: <Layout />,
  //     children: [{
  //       path: '',
  //       element: <HomePage />,
  //     },
  //     {
  //       path: 'login',
  //       element: <Login />,
  //     },
  //     {
  //       path: 'register',
  //       element: <Register />,
  //     },
  //     {
  //       path: 'cart',
  //       element: <Cart />,
  //     },
  //     {
  //       path: 'products',
  //       element: <Catalog />,
  //     },
  //     {
  //       path: 'checkout',
  //       element: <Chekout />,
  //     },
  //     ],
  //   }
  // ]

  // Create Routes from elements
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<HomePage />} />
      <Route path="products" element={<Catalog />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Chekout />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
    </Route>
  )
)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

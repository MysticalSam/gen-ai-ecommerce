import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals.js';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import './index.css';

import Layout from './Layout.jsx';
import Catalog from './customer/components/Catalog.jsx';
import HomePage from './customer/pages/homepage/HomePage.jsx';
import Login from './customer/pages/login/Login.jsx';
import Register from './customer/pages/register/Register.jsx';
import Cart from './customer/pages/cart/Cart.jsx';
import Chekout from './customer/pages/checkout/Checkout.jsx';

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

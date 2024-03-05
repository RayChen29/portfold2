import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './navbar';
import Root from './root';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Contact from './Contact/contact';
import PersonalBoard from './Projects/personal-board/personal-board';
const router = createBrowserRouter([
  
  {
    path: '/',
    element: <Root/>,
    errorElement:<div>Why are you here?</div>
  },
  {
    path: '/personal-board',
    element: <PersonalBoard/>,
    errorElement:<div>Why are you there?</div>
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={router} />
    <Contact/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

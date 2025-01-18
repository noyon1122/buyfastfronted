import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'react-multi-carousel/lib/styles.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './utils/routes.jsx';
import Navbar from './components/navbar/Navbar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}>
    <Navbar></Navbar>
   <App />
   </RouterProvider>
  </StrictMode>,
)

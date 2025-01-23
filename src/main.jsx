import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



import Error from './pages/Error';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },      
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/resume',
        element: <Resume />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(  
    <RouterProvider router={router} />  
)

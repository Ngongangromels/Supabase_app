import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Description from './components/description';
import DescriptionMobile from './components/descriptionMobile';
import LoginPage from './components/loginPage';
import SignUp from './components/signUp';
import UserPage from './components/userPage';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>, 
  },
  {
    path: '/Description/:id',
    element: <Description />
  },
  {
    path: '/DescriptionMobile/:id',
    element: <DescriptionMobile/>
  },
  {
    path: '/LoginPage',
    element: <LoginPage/>
  },
  {
    path: '/SignUp',
    element: <SignUp/>
  },
  {
    path: '/UserPage/:id',
    element: <UserPage/>
  }
 
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 <RouterProvider router={router} />
);

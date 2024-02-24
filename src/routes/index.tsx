import { createBrowserRouter } from 'react-router-dom';
import UserProfilePage from '../pages/UserProfilePage';
import UserDetailPage from '../pages/UserDetailPage';
import ErrorPage from '../pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <UserProfilePage />,
  },
  {
    path: '/userdetail/:name',
    element: <UserDetailPage />,
  },
  {
    path: '*',
    element: <ErrorPage />
  }
]);

import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/home/index.tsx'
import ErrorPage from './pages/error/ErrorPage.tsx'
import UploadImagePage from './pages/upload-image/index.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/upload-image',
    element: <UploadImagePage />
  }
])

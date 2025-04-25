import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import App from './App.jsx'
import AlbumPage from './views/AlbumPage/AlbumPage.jsx'
import Home from './views/HomePage/HomePage.jsx'

const FallbackComponent = ({ error }) => (
  <div className="error-container">
    <h2>Something went wrong</h2>
    <p>{error.message}</p>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <App />
      </ErrorBoundary>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "album/:albumId",
        element: <AlbumPage />,
      },
    ],
  },
]);

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <RouterProvider
      router={router}
    />
  </StrictMode>
);
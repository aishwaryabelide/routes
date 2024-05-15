import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import Products from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetailsPage from '../src/pages/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, //path: '' or index: true for default child routes
      { path: 'products', element: <Products /> }, //Relative path
      { path: 'products/:productId', element: <ProductDetailsPage /> } //Relative path i.e., /root/products
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

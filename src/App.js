import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../src/pages/Home';
import Products from '../src/pages/Products';
import RootLayout from '../src/pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <Products /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

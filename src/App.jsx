import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { loader as categoryLoader } from "./features/categories/CategoryList";
import { loader as productLoader } from "./features/product/Product";

import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import PageLoader from "./ui/PageLoader";
import Productpage from "./pages/Productpage";
import Cart from "./features/cart/Cart";

const Homepage = lazy(() => import("./pages/Homepage"));
const Categories = lazy(() => import("./features/categories/Categories"));
const CategoryList = lazy(() => import("./features/categories/CategoryList"));
const CategoryPlaceholder = lazy(
  () => import("./features/categories/CategoryPlaceholder")
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        errorElement: <Error />,
        element: (
          <Suspense fallback={<PageLoader />}>
            <Homepage />
          </Suspense>
        ),
      },
      {
        path: "/categories",
        element: <Categories />,
        children: [
          {
            index: true,
            element: <CategoryPlaceholder />,
          },
          {
            path: ":categoryType",
            element: <CategoryList />,
            errorElement: <Error />,
            loader: categoryLoader,
          },
        ],
      },
      {
        path: "/categories/:categoryType/:productId",
        element: <Productpage />,
        loader: productLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

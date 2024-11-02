import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./Component/Root/Root.jsx";
import { Error } from "./Component/Error/Error.jsx";
import { Home } from "./Component/Home/Home.jsx";
import { BookDetails } from "./Component/BookDetails/BookDetails.jsx";
import { ListedBooks } from "./Component/ListedBooks/ListedBooks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/public/booksData.json"),
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("/public/booksData.json"),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);

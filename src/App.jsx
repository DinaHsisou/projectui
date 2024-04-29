
import HomePage from "./routes/homePage/homePage"
import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      children:[
        {
          path:"/",
          element:<HomePage></HomePage>
        },
        {
          path:"/list",
          element:<ListPage></ListPage>
        },
        {
          path:"/:id",
          element:<SinglePage></SinglePage>
        }


      ]
    }
  ]);
  return (
   
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
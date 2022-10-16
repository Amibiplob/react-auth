import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login";

import Navbar from "./Components/Navbar";
import Registion from "./Components/Register";
import Root from "./Root";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
      
        element: <Login></Login>,
      },
      {
        path: '/login',
      
        element: <Login></Login>,
      },
      {
        path: '/register',
      
        element: <Registion></Registion>,
      },
    ]
  }
])
function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

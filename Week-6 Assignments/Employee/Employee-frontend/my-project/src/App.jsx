import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./Components/RootLayout";
import Home from "./Components/Home";
import CreateEmp from "./Components/CreateEmp";
import ListOfEmp from "./Components/ListOfEmp";
import Employee from "./Components/Employee";
import EditEmp from "./Components/EditEmp";

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "create-emp", element: <CreateEmp /> },
        { path: "list", element: <ListOfEmp /> },
        { path: "employee",element: <Employee />},
        {path:"edit-emp",element:<EditEmp/>}
    
      ],
    },
  ]);

  return <RouterProvider router={routerObj} />;
}

export default App;
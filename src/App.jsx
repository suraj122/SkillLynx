import SingleCourse from "./common/SingleCourse";
import CreateCourse from "./components/admin/CreateCourse";
import Dashboard from "./components/admin/Dashboard";
import Login from "./components/admin/Login";
import Navbar from "./components/admin/Navbar";
import Signup from "./components/admin/Signup";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/signup" element={<Signup />} />
        <Route path="/admin/courses" element={<Navbar />}>
          <Route index element={<Dashboard />} />
          <Route path="/admin/courses/create" element={<CreateCourse />} />
          <Route path="/admin/courses/123456" element={<SingleCourse />} />
        </Route>
        <Route path="/*" element={<h1>Page not found</h1>} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
      <Outlet />
    </>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import Home from "../Pages/Home";
import Mens from "../Pages/Mens";
import Womens from "../Pages/Womens";
import Kids from "../Pages/Kids";
import Wishlist from "../Pages/Wishlist";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoutes";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      
      <Route
        path="/men"
        element={
          <PrivateRoute>
            <Mens />
          </PrivateRoute>
        }
      />
      <Route
        path="/women"
        element={
          <PrivateRoute>
            <Womens />
          </PrivateRoute>
        }
      />
      <Route
        path="/kids"
        element={
          <PrivateRoute>
            <Kids />
          </PrivateRoute>
        }
      />
      <Route
        path="/wishlist"
        element={
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        }
      />


      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AllRoutes;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CustomerManagement from "./pages/CustomerManagement";

import Navigation from "./pages/Navigation";
import PurchaseOrderForm from "./components/PurchaseOrderForm";
import ShippingDetails from "../src/components/ShippingDetailsForm";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import CustomerDetailsTable from "./pages/CustomerDetailsTable";

const App = () => {
  const { loading } = useSelector((state) => state.alerts);

  return (
    <BrowserRouter>
      {loading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Navigation />
              </ProtectedRoute>
            }
          />
          <Route
            path="/api/customers/:id"
            element={
              <ProtectedRoute>
                <CustomerDetailsTable />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/customerManagement"
            element={
              <ProtectedRoute>
                <CustomerManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/purchase-orders/:id"
            element={
              <ProtectedRoute>
                <PurchaseOrderForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/shipping-details"
            element={
              <ProtectedRoute>
                <ShippingDetails />
              </ProtectedRoute>
            }
          />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;

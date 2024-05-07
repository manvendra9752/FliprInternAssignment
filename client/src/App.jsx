import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CustomerManagement from "./pages/CustomerManagement";

import Navigation from "./pages/Navigation";
import PurchaseOrderForm from "./components/PurchaseOrderForm";
import ShippingDetails from "../src/components/ShippingDetailsForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customerManagement" element={<CustomerManagement />} />
        <Route path="/purchase-orders/:id" element={<PurchaseOrderForm />} />
        <Route path="/shipping-details" element={<ShippingDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [customerDetails, setCustomerDetails] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/");
      setDashboardData(res.data);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  const fetchCustomerDetails = async (customerId) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/customers/${customerId}`
      );
      setCustomerDetails(res.data);
      setSelectedCustomerId(customerId);
    } catch (error) {
      console.error("Error fetching customer details:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Customers</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  City
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {dashboardData &&
                dashboardData?.customers.map((customer) => (
                  <tr key={customer._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {customer.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        className="text-blue-500"
                        onClick={() => fetchCustomerDetails(customer._id)}
                      >
                        {customer.email}
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {customer.city}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div>
          {selectedCustomerId && (
            <>
              <h2 className="text-xl font-bold mb-2">Shipping Details</h2>
              <ul>
                {customerDetails?.shippingDetails.map((shipping) => (
                  <li key={shipping._id}>
                    Address: {shipping.address}, {shipping.city} - Pincode:{" "}
                    {shipping.pincode}
                  </li>
                ))}
              </ul>
              <h2 className="text-xl font-bold mb-2">Purchase Orders</h2>
              <ul>
                {customerDetails.purchaseOrders.map((order) => (
                  <li key={order._id}>
                    Product Name: {order.productName} - Quantity:{" "}
                    {order.quantity} - Price: {order.pricing}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

"use client";
import Loading from "@/app/loading";
import Footer from "@/Component/Shared/Footer";
import Navbar from "@/Component/Shared/Navbar";
import { getAllUsersOrder, getOrderById } from "@/service/OrderApi";
import { TOrder } from "@/types/order";
import React, { useEffect, useState } from "react";
import ChatModal from "@/Component/Shared/ChatModal";
const MyOrder = () => {
  const [selectedOrder, setSelectedOrder] = useState<TOrder | null>(null);
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [orders, setOrders] = useState<TOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await getAllUsersOrder();
        setOrders(res?.data || []);
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError("Failed to load orders.");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const selectOrder = async (id: string) => {
    try {
      const res = await getOrderById(id);
      setSelectedOrder(res?.data);
      setShowOrderDetails(true);
    } catch (err) {
      setError("Failed to load order details.");
      console.error("Error fetching order details:", err);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen px-4 md:px-10 py-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">My Orders</h2>

        {error && (
          <div className="text-center text-red-500 py-10 text-lg">{error}</div>
        )}

        <div className="grid gap-6">
          {orders.length === 0 && (
            <p className="text-center text-gray-500">
              You have no orders yet 😢
            </p>
          )}

          {orders.map((order: TOrder) => (
            <div
              key={order.id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all p-5 flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {order?.service?.title}
                </h3>
                <p className="text-gray-600">
                  Provider:{" "}
                  <span className="font-medium text-gray-800">
                    {order.provider.fullName}
                  </span>
                </p>
                <p className="text-gray-500 text-sm">
                  {new Date(order.createdAt).toLocaleDateString("en-GB")} at{" "}
                  {new Date(order.createdAt).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <p className="text-green-600 font-semibold mt-1">
                  ৳{order.price}
                </p>
              </div>

              <div className="flex items-center gap-3 mt-4 md:mt-0">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    order.status
                  )}`}
                >
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
                <button
                  onClick={() => {
                    setSelectedOrder(order);
                    setShowChat(true);
                  }}
                  className="text-sm font-semibold border rounded-md px-3 py-1 transition-all duration-200 text-blue-600 border-blue-300 hover:bg-blue-50"
                >
                  Chat
                </button>

                <button
                  onClick={() => selectOrder(order.id)}
                  className="text-green-600 hover:text-green-700 text-sm font-medium underline"
                >
                  View Details
                </button>

                <button
                  disabled={order.status !== "pending"}
                  className={`text-sm font-semibold border rounded-md px-3 py-1 transition-all duration-200 ${
                    order.status === "pending"
                      ? "text-red-600 border-red-300 hover:bg-red-50"
                      : "text-gray-400 border-gray-200 cursor-not-allowed"
                  }`}
                >
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Order Details Modal ===== */}
      {showOrderDetails && selectedOrder && (
        <div className="fixed inset-0 backdrop-blur-md bg-black/20 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg mx-4 animate-fade-in">
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Order Details
              </h3>
              <button
                onClick={() => setShowOrderDetails(false)}
                className="text-gray-400 hover:text-gray-600 text-lg"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-gray-800">
              <div>
                <p className="text-sm text-gray-500">Provider Name</p>
                <p className="font-medium">
                  {selectedOrder?.provider?.fullName}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone Number</p>
                <p className="font-medium">
                  {selectedOrder?.provider?.user?.phone}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{selectedOrder?.provider?.email}</p>
              </div>

              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-500">Booked At</p>
                  <p className="font-medium">
                    {new Date(selectedOrder?.createdAt).toLocaleDateString(
                      "en-GB"
                    )}{" "}
                    at{" "}
                    {new Date(selectedOrder?.createdAt).toLocaleTimeString(
                      "en-US",
                      { hour: "2-digit", minute: "2-digit" }
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="text-green-600 font-semibold">
                    ৳{selectedOrder.price}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500">Service Details</p>
                <p className="text-gray-800 leading-relaxed">
                  {selectedOrder?.service?.description}
                </p>
              </div>
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={() => setShowOrderDetails(false)}
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== Chat Modal ===== */}
      {showChat && selectedOrder && (
        <ChatModal
          showChat={showChat}
          setShowChat={setShowChat}
          selectedUser={{
            userId: selectedOrder?.provider?.user?.user_id,
            fullName: selectedOrder?.provider?.user?.fullName,
          }}
          setSelectedChatUser={setSelectedOrder}
        />
      )}

      <Footer />
    </>
  );
};

// Helper functions
function getStatusColor(status: string) {
  switch (status) {
    case "PENDING":
      return "bg-yellow-100 text-yellow-800";
    case "IN_PROGRESS":
      return "bg-blue-100 text-blue-800";
    case "COMPLETED":
      return "bg-green-100 text-green-800";
    case "CANCELED":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

export default MyOrder;

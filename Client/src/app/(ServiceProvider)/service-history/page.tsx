"use client";
import React, { useEffect, useState } from "react";
import {
  getOrderById,
  getProviderServicesHistory,
  updateOrderStatus,
} from "@/service/OrderApi";
import Loading from "@/app/loading";
import Navbar from "@/Component/Shared/Navbar";
import Footer from "@/Component/Shared/Footer";
import { TOrder } from "@/types/order";
import ChatModal from "@/Component/Shared/ChatModal";

const ServiceHistory = () => {
  const [orders, setOrders] = useState<TOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<TOrder | null>(null);
  const [showChat, setShowChat] = useState(false);
  const [newStatus, setNewStatus] = useState("");
  const [updating, setUpdating] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  console.log(selectedOrder);

  // 🟢 Fetch all service orders
  useEffect(() => {
    async function fetchOrders() {
      try {
        const res = await getProviderServicesHistory();
        setOrders(res?.data || []);
      } catch (err) {
        console.error("Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchOrders();
  }, []);

  // 🟢 Select and open order details
  const selectOrder = async (id: string) => {
    try {
      const res = await getOrderById(id);
      setSelectedOrder(res?.data);
      setNewStatus(res?.data?.status || "");
    } catch (err) {
      console.error("Error fetching order details:", err);
    } finally {
      setLoading(false);
    }
  };

  // 🟢 Update order status
  const handleStatusUpdate = async () => {
    if (!selectedOrder || !newStatus) return;
    setUpdating(true);
    setSuccessMsg("");
    try {
      await updateOrderStatus(selectedOrder.id, newStatus);
      setOrders((prev) =>
        prev.map((o) =>
          o.id === selectedOrder.id ? { ...o, status: newStatus } : o
        )
      );
      setSelectedOrder({ ...selectedOrder, status: newStatus });
      setSuccessMsg("✅ Order status updated successfully!");
    } catch (err) {
      console.error("Error updating status:", err);
      setSuccessMsg("❌ Failed to update status.");
    } finally {
      setUpdating(false);
      setTimeout(() => setSuccessMsg(""), 3000);
    }
  };

  if (loading) return <Loading />;
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-10 text-black min-h-screen">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-700 mb-2 text-center">
          🧾 My Service History
        </h1>
        {orders.length === 0 && (
          <div className="text-center py-20 text-black">
            No service history found 😔
          </div>
        )}
        <div className="grid gap-6 pb-16">
          {" "}
          {/* ✅ Added bottom padding to prevent footer overlap */}
          {orders.map((order) => (
            <div
              key={order.id}
              className="border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all p-6 bg-white flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div className="w-full md:w-2/3">
                <h2 className="font-semibold text-lg">
                  {order.service?.title}
                </h2>
                <p className="text-sm mt-2 line-clamp-2">
                  {order.service?.description}
                </p>
              </div>

              <div className="w-full md:w-1/3 flex flex-col items-start md:items-end gap-2 text-sm mt-4 md:mt-0">
                <div>
                  <span className="font-medium">📅 </span>
                  {new Date(order.scheduledDate).toLocaleDateString()} |{" "}
                  {order.scheduledTime}
                </div>
                <div>
                  <span className="font-medium">Qty:</span> {order.quantity}
                </div>
                <div>
                  <span className="font-medium">Total:</span>{" "}
                  <span className="text-green-600 font-semibold">
                    ৳{order.price * order.quantity}
                  </span>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold mt-1 ${
                    order.status === "PENDING"
                      ? "bg-yellow-100 text-yellow-700"
                      : order.status === "COMPLETED"
                      ? "bg-green-100 text-green-700"
                      : order.status === "IN_PROGRESS"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {order.status}
                </span>

                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => selectOrder(order?.id)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 text-sm transition"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => {
                      setSelectedOrder(order);
                      setShowChat(true);
                    }}
                    className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 text-sm transition"
                  >
                    Chat
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />

      {/* ===== ORDER DETAILS MODAL ===== */}
      {selectedOrder && !showChat && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/20"
          onClick={() => setSelectedOrder(null)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-lg mx-4 p-6 relative shadow-xl text-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedOrder(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✖
            </button>

            <h2 className="text-xl font-semibold mb-4">
              {selectedOrder.service?.title}
            </h2>

            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium">Description:</span>{" "}
                {selectedOrder.service?.description || "No description"}
              </p>
              <p>
                <span className="font-medium">Customer:</span>{" "}
                {selectedOrder.fullName || "N/A"}
              </p>
              <p>
                <span className="font-medium">Phone:</span>{" "}
                {selectedOrder.phone || "N/A"}
              </p>
              <p>
                <span className="font-medium">Address:</span>{" "}
                {selectedOrder.address?.street_address},{" "}
                {selectedOrder.address?.area_name},{" "}
                {selectedOrder.address?.city}
              </p>
              <p>
                <span className="font-medium">Date:</span>{" "}
                {new Date(selectedOrder.scheduledDate).toLocaleDateString()} (
                {selectedOrder.scheduledTime})
              </p>
              <p>
                <span className="font-medium">Quantity:</span>{" "}
                {selectedOrder.quantity}
              </p>
              <p>
                <span className="font-medium">Total Price:</span>{" "}
                <span className="text-green-600 font-semibold">
                  ৳{selectedOrder.price * selectedOrder.quantity}
                </span>
              </p>

              {/* ===== Update Status Section ===== */}
              <div className="mt-4">
                <label className="font-medium block mb-1 text-black">
                  Update Order Status:
                </label>
                <select
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                  className="border rounded-xl px-3 py-2 w-full text-black"
                >
                  <option value="">Select status</option>
                  <option disabled>PENDING</option>
                  <option
                    disabled={selectedOrder?.status !== "PENDING"}
                    value="IN_PROGRESS"
                  >
                    IN_PROGRESS
                  </option>
                  <option
                    disabled={
                      selectedOrder?.status !== "PENDING" &&
                      selectedOrder?.status !== "IN_PROGRESS"
                    }
                    value="COMPLETED"
                  >
                    COMPLETED
                  </option>
                  <option
                    disabled={
                      selectedOrder?.status !== "PENDING" &&
                      selectedOrder?.status !== "IN_PROGRESS"
                    }
                    value="REJECTED"
                  >
                    REJECTED
                  </option>
                </select>

                <button
                  onClick={handleStatusUpdate}
                  disabled={updating || !newStatus}
                  className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition mt-3"
                >
                  {updating ? "Updating..." : "Update Status"}
                </button>

                {successMsg && (
                  <p className="mt-2 text-sm text-center text-green-600 font-medium">
                    {successMsg}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setSelectedOrder(null)}
                className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-xl transition"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowChat(true);
                }}
                className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
              >
                Chat with Customer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== CHAT MODAL (✅ now imported component) ===== */}
      {showChat && selectedOrder && (
        <ChatModal
          showChat={showChat}
          setShowChat={setShowChat}
          selectedUser={{
            userId: selectedOrder.userId,
            fullName: selectedOrder.fullName,
          }}
          setSelectedChatUser={setSelectedOrder}
        />
      )}
    </>
  );
};

export default ServiceHistory;

import AddService from "@/Component/Service/ServiceForm";
import Footer from "@/Component/Shared/Footer";
import Navbar from "@/Component/Shared/Navbar";
import React from "react";

const CreateService = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-128px)] bg-gray-50 py-10 px-4 sm:px-6 md:px-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-green-700 mb-2 text-center">
            Add New Service
          </h1>
          <AddService />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CreateService;

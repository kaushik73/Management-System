// import React from "react";
import { useSelector } from "react-redux";
import { FaBeer } from "react-icons/fa";

const Home = () => {
  const theme = useSelector((store) => store.config.theme);
  return (
    <div className="h-content bg-gray-500">
     <div className="min-h-screen bg-gradient-to-b from-blue-600 to-purple-600">
            {/* Header Section */}
            <header className="text-center py-20">
                <h1 className="text-4xl font-bold text-white">Hi, how can we help you?</h1>
                <div className="mt-8">
                <input
                    type="text"
                    placeholder="Search for solutions, services and tickets"
                    className="px-4 py-3 w-96 rounded-lg shadow-md focus:outline-none"
                />
                </div>
            </header>

            {/* Card Section */}
            <section className="flex justify-center mt-10">
                <div className="w-3/4 bg-indigo-800 text-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                    <div>
                    <h2 className="text-lg font-semibold">Welcome to Management System - India</h2>
                    <p className="text-sm text-gray-300">Made with Love</p>
                    </div>
                    <div>
                    <button className="bg-white text-indigo-800 py-2 px-4 rounded-md shadow hover:bg-gray-100">
                        View all
                    </button>
                    </div>
                </div>
                </div>
            </section>

            
            </div>
    </div>
  );
};

export default Home;

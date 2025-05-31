"use client";
import React, { useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Layout from "../components/Layout";

const salesData = [
  { name: "Jan", listed: 40, sold: 25 },
  { name: "Feb", listed: 50, sold: 30 },
  { name: "Mar", listed: 45, sold: 28 },
  { name: "Apr", listed: 60, sold: 35 },
  { name: "May", listed: 70, sold: 50 },
];

const Dashboard = () => {
  return (
    <Layout>
      <div className="flex ml-[20%] bg-gray-50 min-h-screen p-8">
        <div className="w-full space-y-10">
          {/* Header */}
          <header className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-red-700">Estate Dashboard</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Welcome, Admin</span>
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="rounded-full w-10 h-10"
              />
            </div>
          </header>

          {/* Stat Cards */}
          <section className="grid grid-cols-4 gap-6">
            <div className="bg-white shadow-md p-6 rounded-xl">
              <h3 className="text-sm text-gray-500">Properties Listed</h3>
              <p className="text-2xl font-bold text-blue-600">128</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl">
              <h3 className="text-sm text-gray-500">Properties Sold</h3>
              <p className="text-2xl font-bold text-green-500">92</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl">
              <h3 className="text-sm text-gray-500">Revenue</h3>
              <p className="text-2xl font-bold text-yellow-600">$3.4M</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl">
              <h3 className="text-sm text-gray-500">New Leads</h3>
              <p className="text-2xl font-bold text-purple-600">245</p>
            </div>
          </section>

          {/* Line Chart */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Monthly Sales Overview</h2>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="listed" stroke="#3B82F6" name="Listed" />
                  <Line type="monotone" dataKey="sold" stroke="#10B981" name="Sold" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </section>

        
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

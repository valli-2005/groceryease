import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      {/* Navigation Bar */}
      <nav className="w-full px-6 py-4 shadow-md flex justify-between items-center bg-green-600 text-white">
        <h1 className="text-2xl font-bold">GroceryEase</h1>
        <div className="space-x-4">
          <button className="bg-white text-green-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100">
            Register
          </button>
          <button className="bg-white text-green-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100">
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow px-6 py-16 text-center bg-green-50">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Grocery Shopping, Simplified
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Welcome to GroceryEase – your smart grocery delivery platform. Order fresh
          produce, daily essentials, and more, right from your couch.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 text-lg rounded-lg hover:bg-green-700">
          Start Shopping
        </button>
      </main>

      {/* Features Section */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-10">Why GroceryEase?</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-xl shadow p-6">
            <h4 className="text-xl font-bold mb-2">Fresh Products</h4>
            <p>We deliver the freshest fruits, vegetables, and groceries from trusted sellers.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h4 className="text-xl font-bold mb-2">Fast Delivery</h4>
            <p>Lightning-fast delivery service that gets your order to your doorstep in no time.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h4 className="text-xl font-bold mb-2">AI-Powered Assistant</h4>
            <p>Get smart grocery recommendations based on your preferences and order history.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-4 text-center">
        <p>© 2025 GroceryEase. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

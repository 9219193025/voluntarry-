import React from 'react';

const Donate: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      <div className="bg-red-600 text-white p-8 w-full text-center">
        <h1 className="text-4xl font-bold">Donate to Our Cause</h1>
        <p className="text-lg mt-4">
          Your contribution helps us create better opportunities for everyone!
        </p>
      </div>
      <div className="bg-white p-6 mt-6 w-full max-w-4xl rounded-lg shadow-lg">
        <form className="flex flex-col">
          <label className="text-lg mb-2">Your Name:</label>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-lg mb-4"
            placeholder="Enter your name"
          />
          <label className="text-lg mb-2">Donation Amount (USD):</label>
          <input
            type="number"
            className="p-2 border border-gray-300 rounded-lg mb-4"
            placeholder="Enter amount"
          />
          <button
            type="submit"
            className="bg-red-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-red-700"
          >
            Donate
          </button>
        </form>
      </div>
      <div className="bg-white p-6 mt-12 w-full max-w-4xl rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to create opportunities that inspire and empower individuals to
          bring positive change to the community. The funds raised through this platform
          are directed towards essential causes such as food drives, tree plantations,
          and blood donation initiatives. Every contribution helps us build a better future
          and provide essential support to those in need. Join us in making a difference!
        </p>
      </div>
    </div>
  );
};

export default Donate;
export{}

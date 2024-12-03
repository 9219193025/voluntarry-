import React from 'react';

const Opportunities: React.FC = () => {
  return (
    <div className="bg-yellow-100 min-h-screen flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Volunteer Opportunities</h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        Explore ways to make a difference in your community. Your contribution, big or small, matters!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Tree Plantation</h2>
          <p className="text-gray-600">Help make your community greener by planting trees!</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Food Drive</h2>
          <p className="text-gray-600">Distribute food to those in need and make a meaningful impact.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Blood Donation</h2>
          <p className="text-gray-600">Save lives by donating blood and supporting local blood banks.</p>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
export{}

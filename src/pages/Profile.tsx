import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="bg-green-100 min-h-screen flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Your Profile</h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        View and edit your personal information here.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <p className="text-gray-700 mb-4">
          <strong>Name:</strong> kartikey tiwari
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Email:</strong> kartikeyttiwari27@gmail.com
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Phone:</strong> +919412668827
        </p>
        <button className="bg-green-600 text-white py-2 px-6 rounded-full text-lg hover:bg-green-700 transition duration-300 w-full">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
export{}

import React from 'react';

const Home: React.FC = () => {
  const quotes = [
    {
      text: "The best way to find yourself is to lose yourself in the service of others.",
      author: "Mahatma Gandhi",
    },
    {
      text: "Nobody can do everything, but everyone can do something.",
      author: "Unknown",
    },
    {
      text: "Volunteers do not necessarily have the time; they just have the heart.",
      author: "Elizabeth Andrew",
    },
    {
      text: "The smallest act of kindness is worth more than the grandest intention.",
      author: "Oscar Wilde",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-300 to-green-300 min-h-screen flex flex-col items-center justify-center p-6">
      {/* Hero Section */}
      <div className="text-center text-white mb-12">
        <h1 className="text-5xl font-extrabold mb-4">
          Together, We Can Make a Difference
        </h1>
        <p className="text-lg mb-6">
          Join us in our mission to create a better world for everyone.
        </p>
        {/* Updated Image */}
        <img
          src="https://images.pexels.com/photos/9169658/pexels-photo-9169658.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Volunteers"
          className="w-full max-w-2xl h-auto rounded-lg shadow-lg mb-6"
        />
      </div>

      {/* Motivational Quotes Section */}
      <div className="w-full max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Heartfelt Quotes</h2>
        <div className="space-y-6">
          {quotes.map((quote, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-xl italic text-gray-700">"{quote.text}"</p>
              <p className="text-lg text-gray-500 mt-4">- {quote.author}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-12 text-center">
        <p className="text-xl text-gray-800 mb-4">
          Ready to make a difference? Join us today!
        </p>
        <button className="bg-blue-600 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
export{}

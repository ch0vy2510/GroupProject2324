import React from 'react';

const Homepage = () => {
  return (
    <div className="font-sans bg-gray-100">
      <div className="bg-cover bg-center h-screen flex flex-col items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Start with us the body and mind cleansing</h1>
        </div>
        <div className="flex justify-around mt-8">
          <img src="image1.jpg" alt="Image 1" className="w-48 h-auto rounded-lg" />
          <img src="image2.jpg" alt="Image 2" className="w-48 h-auto rounded-lg" />
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <div className="w-2/5 bg-gray-300 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">The Story Behind Your Gym</h2>
          <p>Content goes here...</p>
        </div>
        <div className="w-2/5 bg-green-500 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p>Content goes here...</p>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <div className="w-2/5 bg-blue-500 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">The Story</h2>
          <p>Content goes here...</p>
        </div>
        <div className="w-2/5 bg-gray-400 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Our Value</h2>
          <p>Content goes here...</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">New Section with Image</h2>
        <div className="flex justify-center">
          <img src="your-image.jpg" alt="Your Image" className="w-2/3 h-auto rounded-lg" />
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <div className="w-2/5 bg-yellow-500 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Content Part</h2>
          <p>More content goes here...</p>
        </div>
        <div className="w-2/5 bg-red-500 p-6 rounded-lg">
          <img src="additional-image.jpg" alt="Additional Image" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;







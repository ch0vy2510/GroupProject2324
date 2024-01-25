import React from 'react';

const Feature = ({ title, description }) => (
  <div className="mx-4">
    <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-500">{description}</p>
  </div>
);

const About = () => {
  return (
    <div className="font-sans bg-gray-100 relative">
      <div className="bg-cover bg-center h-screen flex flex-col items-center justify-center text-white" style={{ backgroundColor: '#191c21' }}>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-4">Start with us the body and mind cleansing</h1>
        </div>
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <img src="Downloads/cleansing.jpg" className="w-48 h-48 object-cover rounded-lg transition-transform transform translate-y-full opacity-0" alt="Cleansing" />
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
          <img src="Downloads/background.png" className="w-2/3 h-auto rounded-lg" alt="Background" />
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <div className="w-2/5 bg-yellow-500 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Respect Your Body, It's The Only One You Get</h2>
          <p>More content goes here...</p>
        </div>
        <div className="w-2/5 bg-red-500 p-6 rounded-lg">
          <img src="additional-image.jpg" alt="Additional Image" className="w-full h-auto rounded-lg" />
        </div>
      </div>
      
      <div className="flex justify-between mt-8">
        <div className="w-2/5 bg-yellow-500 p-6 rounded-lg">
          <div>
            <h2 className="text-2xl font-bold mb-4">Inspiration</h2>
            <p>Content for Inspiration goes here...</p>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-4">Motivation</h2>
            <p>Content for Motivation goes here...</p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-black p-4">
        <h2 className="text-3xl font-bold mb-4 text-white">Our Key Features</h2>
        <div className="flex">
          <Feature title="Certified Trainer" description="Bodybuilding is the practice of progressive resistance exercise to build, control, and develop one muscle via hypertrophy." />
          <Feature title="Nutrition & Diet" description="A form of strength training that utilizes an individual body weight." />
          <Feature title="Years of Experience" description="CrossFit is a strength and conditioning workout that is made up of functional performed at a high intensity level." />
        </div>
      </div>
    </div>
  );
};

export default About;

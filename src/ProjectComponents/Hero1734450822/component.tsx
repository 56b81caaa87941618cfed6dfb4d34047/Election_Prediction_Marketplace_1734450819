import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log('Email submitted:', email);
  };

  return (
    <div className="bg-black py-16 text-white w-full h-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between h-full">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Forecast the Future of American Politics</h1>
          <p className="text-xl mb-6">Join the smart money in our cutting-edge presidential prediction market. Trade insights, not just opinions.</p>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <form onSubmit={handleSubmit} className="flex flex-col items-end w-full max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 mb-4 text-black rounded-lg"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out flex items-center"
            >
              <i className='bx bx-envelope mr-2'></i>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Hero as component }
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-r from-cafe-beige to-cafe-light-brown">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        {/* Coffee cup placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 bg-cafe-brown rounded-full opacity-10 flex items-center justify-center">
            <div className="w-64 h-64 bg-cafe-dark-brown rounded-full opacity-50 flex items-center justify-center">
              <svg className="w-32 h-32 text-white opacity-30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2,21V19H20V21H2M20,8V5L18,5V8C18,10.28 16.19,12 14,12C11.81,12 10,10.28 10,8V5H8V8C8,11.37 10.69,14.1 14,14.1C17.31,14.1 20,11.37 20,8M3,3V5H21V3H3Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-japanese">
          あなたの一杯が、
          <br />
          今日を変える
        </h1>
        <p className="text-xl md:text-2xl text-cafe-cream mb-8 font-light">
          心地よい空間で、上質なコーヒーとともに過ごすひととき
        </p>
        <button className="bg-cafe-brown hover:bg-cafe-dark-brown text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200 shadow-lg">
          メニューを見る
        </button>
      </div>
    </section>
  );
};

export default Hero;
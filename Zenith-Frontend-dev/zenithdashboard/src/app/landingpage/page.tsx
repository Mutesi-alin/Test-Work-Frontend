"use client";

import React from 'react';

export default function LandingPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden font-sans">
      {/* Background Image */}
      {/* <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')"
        }}
      ></div> */}
      
      {/* Elegant Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-rose-50/90 to-red-100/85 backdrop-blur-[2px]"></div>

      {/* Floating Navigation */}
      <nav className="relative z-20 flex justify-between items-center px-8 py-6">
        <div className="text-2xl font-bold text-gray-800">
          Elite<span className="text-red-400">Estates</span>
        </div>
      
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-12 pt-20">
        <div className="max-w-4xl">
          <h1 className="text-gray-800 text-5xl md:text-7xl font-extrabold leading-tight mb-8 tracking-tight">
            Find Your Dream
            <br />
            <span className="text-red-400 relative">
              Estate Today
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-red-200 rounded-full"></div>
            </span>
          </h1>
          
          <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mb-12 leading-relaxed font-light">
            Discover beautiful properties in the most sought-after locations. 
            Your perfect home awaits with our curated collection of quality estates.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center items-center mb-16">
            <button 
              onClick={() => window.location.href = '/sign-up'}
              className="group px-12 py-5 bg-red-400 text-white text-lg font-semibold rounded-full hover:bg-red-500 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="flex items-center gap-2">
                Explore Properties
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-red-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-rose-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-red-100/40 rounded-full blur-lg animate-pulse delay-500"></div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/90 to-transparent"></div>
    </main>
  );
}
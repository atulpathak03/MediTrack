import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-transparent min-h-[80vh] flex items-center justify-center px-6">
        <video className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" src="./vid-1.mp4"  autoPlay loop  muted  playsInline />
        <div className="text-center max-w-2xl mx-auto mt-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            Welcome to <span className="text-blue-500">MediTrack</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-6">
            Your personal health companion — securely manage appointments, store
            medical records, and track your health journey all in one place.
          </p>
          <p className="text-md md:text-lg text-gray-100">
            Whether you're booking a consultation or reviewing your health
            history, MediTrack helps you stay organized, informed, and in
            control.
          </p>
          <div className="mt-8">
            <Link to="/register">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

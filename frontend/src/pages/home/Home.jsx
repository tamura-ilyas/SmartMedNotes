import React from "react";
import { Link } from "react-router-dom";
import home1 from "../../assets/home1.jpg";
import bg from "../../assets/bg.jpg";
import chart from "../../assets/chart.svg";
import paperplane from "../../assets/paperplane.svg";
import lock from "../../assets/lock.svg";
import listcheck from "../../assets/listcheck.svg";

const Home = () => {
  return (
    <>
      {/* trying new thign */}
      <div className="relative bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white overflow-hidden">
        {/* Decorative Floating Circles (Balloons) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-16 left-16 w-24 h-24 bg-blue-400 rounded-full opacity-30 animate-ping"></div>
          <div className="absolute bottom-16 right-24 w-32 h-32 bg-pink-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-2/3 w-20 h-20 bg-purple-400 rounded-full opacity-25 animate-bounce"></div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-6 py-24 text-center lg:text-left relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Section */}
            <div className="w-full lg:w-1/2 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                Simplifying Orthopedic <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                  Care with SmartMedNotes
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300">
                Intelligent assistant designed to optimize workflows, save time,
                and enhance patient care.
              </p>
              <div>
                <Link to="/Assistant">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl transition duration-300">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>

            {/* Glowing Illustration Section */}
            <div className="w-full lg:w-1/2 flex justify-center relative">
              <div className="relative h-96 w-96 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 via-purple-600 to-pink-500 blur-3xl rounded-full opacity-30"></div>
                <div className="bg-gray-800 rounded-3xl h-72 w-72 flex items-center justify-center shadow-2xl z-10">
                  {/* Placeholder for future image or animation */}
                  <span className="text-3xl text-gray-400 font-semibold">
                    AI Assistant
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Features Section */}
      <div className="bg-gradient-to-b from-white to-gray-100 py-20 px-6 sm:px-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 max-w-[1200px] mx-auto">
          {/* Left Side (Text Section) */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl mt-8 pt-6 font-extrabold text-gray-800 leading-snug">
              Tailored specifically for <br className="sm:block hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                Orthopedic Practices
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              Unlike generic tools, SmartMedNotes is crafted with the unique
              complexities of orthopedic care in mind.
            </p>
            <Link to="/Contact">
              <button className="bg-gradient-to-r mt-5 from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300">
                Get In Touch
              </button>
            </Link>
          </div>

          {/* Right Side (Feature Cards) */}
          <div className="lg:w-1/2 grid grid-cols-1 gap-6">
            <FeatureCard
              icon={chart}
              title="Effortless Documentation"
              content="Automatically generate precise, structured notes tailored to orthopedic needs."
            />
            <FeatureCard
              icon={paperplane}
              title="Continuous Improvement"
              content="Rest easy knowing your patient data is encrypted and securely stored."
            />
            <FeatureCard
              icon={lock}
              title="Secure Data Management"
              content="Meet all healthcare data regulations and standards with ease."
            />
            <FeatureCard
              icon={listcheck}
              title="AI-Powered Insights"
              content="Leverage AI to identify trends, streamline diagnoses, and enhance care."
            />
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen bg-gradient-to-r from-gray-300 via-gray-400 to-gray-600 flex items-center justify-center px-6 md:px-12 lg:px-24 py-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 w-full max-w-[1200px]">
          {/* Left Section */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
              Empowering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                Orthopedic Professionals
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Your ultimate AI-driven healthcare solution! Organize medical
              notes, diagnose conditions, and receive expert assistance with
              ease. Experience the future of healthcare today.
            </p>
            <div>
              <Link to="/Assistant">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-xl transition-all duration-300">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Gradient Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-300 via-purple-200 to-purple-100 rounded-full blur-3xl opacity-20 -z-10"></div>
              <img
                src={home1}
                alt="Medical Illustration"
                className="w-full rounded-3xl shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* //new */}

      <div
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 sm:px-12 md:px-24 max-w-3xl animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-xl">
            Empowering <span className="text-blue-400">Healthcare</span> with{" "}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Smart Med Notes
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow-md">
            An intelligent assistant transforming orthopedic workflows with AI.
            Save time, stay secure, and enhance patient care — effortlessly.
          </p>
          <Link to="/Assistant">
            <button className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-white font-semibold px-8 py-4 rounded-full shadow-lg text-lg">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

const FeatureCard = ({ icon, title, content }) => (
  <div className="flex flex-row p-6 rounded-[20px] bg-gray-100 hover:bg-gray-200">
    <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-gray-300">
      <img src={icon} alt={title} className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-semibold text-black text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-normal text-black text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

export default Home;

"use client";

import { useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export default function LoginPage() {
  const [username, setUsername] = useState("Jackob blonde");
  const [password, setPassword] = useState("••••••••");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white px-6 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-900">PIXLS</div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </a>
            <div className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              <span>Get started</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Forum
            </a>
          </nav>

          {/* Search and Login */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Try 'Lotus GT 430'"
                className="pl-10 pr-4 py-2 w-64 bg-gray-100 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
              />
            </div>
            <button className="bg-green-400 hover:bg-green-500 text-white px-6 py-2 rounded-full transition-colors font-medium">
              Login
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Left Section */}
            <div className="lg:w-1/2 p-12 flex flex-col justify-between">
              <div className="max-w-md">
                <p className="text-sm font-medium text-gray-500 mb-4 tracking-wider">
                  LARGEST IMAGE SOURCE
                </p>

                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  POWERED BY <br />
                  CRE
                  <span className="relative">
                    A
                    <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
                      <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                    </div>
                  </span>
                  TORS AROUND <br />
                  THE WORLD.
                </h1>

                <div className="mb-8">
                  <p className="text-gray-600 mb-4">Don't have account?</p>
                  <button className="flex items-center space-x-2 text-gray-900 font-medium hover:text-green-600 transition-colors group">
                    <span className="border-b border-gray-900 group-hover:border-green-600">
                      Create account
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* About us section with car background */}
              <div className="relative rounded-2xl overflow-hidden h-48">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=600')`,
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                </div>

                <div className="relative p-6 text-white h-full flex flex-col justify-center">
                  <h3 className="text-lg font-semibold mb-3">About us</h3>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    Over <span className="font-semibold">3 million</span> free
                    high-resolution images brought to you by the world's most
                    generous community of photographers.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="lg:w-1/2 relative">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800')`,
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>

              {/* Car Info */}
              <div className="absolute top-8 left-8 text-white">
                <h3 className="text-xl font-bold">LOTUS GT 430</h3>
                <p className="text-sm opacity-80">Best cars</p>
              </div>

              {/* Login Form */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80">
                <div className="relative">
                  {/* Main login form container */}
                  <div className="bg-white rounded-2xl p-8 shadow-xl relative">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                      Login to your account
                    </h2>

                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-600 mb-2">
                          Username
                        </label>
                        <input
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-gray-600 mb-2">
                          Password
                        </label>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                        />
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                          />
                          <span className="text-gray-700">Remember me</span>
                        </label>
                        <a
                          href="#"
                          className="text-gray-500 hover:text-green-600 transition-colors"
                        >
                          Forgot your password?
                        </a>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg transition-colors font-medium"
                      >
                        login
                      </button>
                    </form>
                  </div>

                  {/* Cutout section - transparent window showing background */}
                  <div className="mt-0 w-full h-24 rounded-lg overflow-hidden shadow-lg bg-transparent">
                    {/* This creates the cutout effect by being transparent */}
                  </div>
                </div>
              </div>

              {/* Page Navigation */}
              <div className="absolute bottom-8 left-8 flex items-center space-x-4">
                <span className="text-white font-medium">01/05</span>
                <div className="flex space-x-2">
                  <button className="w-8 h-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

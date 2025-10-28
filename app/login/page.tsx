"use client";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0B0D] relative overflow-hidden">
      {/* background lights (decorations) */}
      <div className="absolute w-full h-full flex justify-between items-center px-16">
        <div className="w-2 h-2 bg-blue-500 rounded-full blur-sm shadow-[0_0_20px_#3B82F6]" />
        <div className="w-2 h-2 bg-blue-500 rounded-full blur-sm shadow-[0_0_20px_#3B82F6]" />
      </div>

      {/* card */}
      <div className="bg-[#141416] border border-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-sm z-10">
        {/* logo */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-[0_0_15px_#3B82F6]">
            O
          </div>
        </div>

        <h1 className="text-2xl font-semibold text-center text-white">
          Welcome Back
        </h1>
        <p className="text-center text-gray-400 text-sm mt-1 mb-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-400 hover:underline">
            Sign up
          </a>
        </p>

        {/* form */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-gray-400 mb-1"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 rounded-md bg-[#1C1C1E] text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm text-gray-400 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 rounded-md bg-[#1C1C1E] text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
          >
            Login
          </button>
        </form>

        {/* divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-700" />
          <span className="text-gray-500 text-xs px-2">or</span>
          <div className="flex-1 h-px bg-gray-700" />
        </div>

        {/* social buttons */}
        <div className="flex justify-center gap-3">
          <button className="flex items-center gap-2 bg-[#1C1C1E] hover:bg-[#2a2a2c] border border-gray-700 text-gray-200 py-2 px-4 rounded-md text-sm transition">
             Apple
          </button>
          <button className="flex items-center gap-2 bg-[#1C1C1E] hover:bg-[#2a2a2c] border border-gray-700 text-gray-200 py-2 px-4 rounded-md text-sm transition">
            <img src="/google.svg" alt="google" className="w-4 h-4" />
            Google
          </button>
          <button className="flex items-center gap-2 bg-[#1C1C1E] hover:bg-[#2a2a2c] border border-gray-700 text-gray-200 py-2 px-4 rounded-md text-sm transition">
            X
          </button>
        </div>
      </div>
    </div>
  );
}

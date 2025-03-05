"use client";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white">
      <Navbar />
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-extrabold text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
      >
        Fortisec Technologies
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-4 text-lg text-gray-300 text-center max-w-2xl"
      >
        Advanced AI-Driven Cybersecurity for a Digital Future.
      </motion.p>
      <motion.a
        href="/services"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-bold shadow-xl"
      >
        Get Started
      </motion.a>
    </div>
  );
}

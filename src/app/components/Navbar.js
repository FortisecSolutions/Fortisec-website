"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-lg shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          Fortisec Technologies
        </Link>
        <div className="flex space-x-6">
          <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link href="/services" className="text-gray-300 hover:text-white">Services</Link>
          <Link href="/projects" className="text-gray-300 hover:text-white">Projects</Link>
          <Link href="/news" className="text-gray-300 hover:text-white">News</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          <Link href="/auth/login" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
            Login
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

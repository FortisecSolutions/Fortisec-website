"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-[#0a0a0a] min-h-screen overflow-hidden text-white font-sans">
      
      {/* 🔥 Digital glow-effekter */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-[120vw] h-[120vh] bg-cyan-500 opacity-20 rounded-full blur-[200px] -top-72 -left-72"
          animate={{ x: scrollY * 0.2, y: scrollY * 0.1 }}
          transition={{ type: "spring", stiffness: 50 }}
        />
        <motion.div
          className="absolute w-[120vw] h-[120vh] bg-purple-500 opacity-20 rounded-full blur-[200px] top-72 right-72"
          animate={{ x: -scrollY * 0.15, y: -scrollY * 0.08 }}
          transition={{ type: "spring", stiffness: 50 }}
        />
      </div>

      {/* 🔷 NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="fixed top-0 left-0 w-full flex justify-between px-10 py-5 backdrop-blur-lg bg-black/50 border-b border-gray-800 z-50"
      >
        <h1 className="text-2xl font-bold text-cyan-400">Fortisec</h1>
        <ul className="flex gap-6">
          {["Home", "Solutions", "About", "Contact"].map((item, index) => (
            <li key={index} className="hover:text-cyan-400 cursor-pointer transition">
              {item}
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* 🌟 HERO SECTION */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
        >
          Fortisec Technologies
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-2xl text-gray-300 mt-4 max-w-2xl"
        >
          AI-driven Cybersecurity for an Advanced Digital Future.
        </motion.p>

        {/* ⚡ CTA KNAPP */}
        <motion.a
          href="#"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-cyan-600 to-purple-600 hover:opacity-80 transition-all rounded-full shadow-lg"
        >
          Get Started
        </motion.a>
      </section>

      {/* 🛡️ FEATURES */}
      <section className="relative z-10 py-32 px-6 md:px-16 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "AI-Powered Defense", desc: "Next-gen security with adaptive AI-driven protection." },
            { title: "Quantum Encryption", desc: "Future-proof encryption against emerging threats." },
            { title: "Zero Trust Architecture", desc: "End-to-end security with identity-based access control." },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-gray-900/70 border border-gray-800 shadow-lg backdrop-blur-lg"
            >
              <h2 className="text-2xl font-semibold text-cyan-400">{item.title}</h2>
              <p className="text-gray-400 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🚀 PARALLAX SCROLL EFFECT */}
      <section className="relative h-[120vh] flex items-center justify-center text-5xl font-extrabold">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
            Redefining Security in the AI Era
          </h2>
        </motion.div>
      </section>

      {/* 📜 FOOTER */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="py-12 text-center text-gray-500 text-lg"
      >
        &copy; 2025 Fortisec Technologies. All rights reserved.
      </motion.footer>
    </div>
  );
}

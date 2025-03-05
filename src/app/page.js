import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative bg-black min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Lys-glow effekt i bakgrunnen */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-50%] left-[-50%] w-[100vw] h-[100vh] bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-[-50%] right-[-50%] w-[100vw] h-[100vh] bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Hovedinnhold */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-extrabold text-white text-center drop-shadow-2xl"
      >
        Fortisec Technologies
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg md:text-2xl text-gray-300 mt-4 text-center max-w-3xl"
      >
        Redefining Cybersecurity with AI-driven Intelligence & Cutting-edge Defense.
      </motion.p>

      {/* Knapp */}
      <motion.a
        href="#"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 px-8 py-4 text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all rounded-full shadow-xl"
      >
        Join the Revolution
      </motion.a>

      {/* Kort med effekter */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {[
          { title: "AI-Driven Defense", desc: "Advanced security powered by real-time AI models." },
          { title: "Zero Trust Security", desc: "Eliminate cyber threats with our zero-trust architecture." },
          { title: "Future-Proof Protection", desc: "Quantum-resistant encryption for the next generation." },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            className="bg-gray-900/80 border border-gray-800 p-6 rounded-xl shadow-lg backdrop-blur-lg"
          >
            <h2 className="text-xl font-semibold text-blue-400">{item.title}</h2>
            <p className="text-gray-400 mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mt-16 text-gray-500"
      >
        &copy; 2025 Fortisec Technologies Solutions. All rights reserved.
      </motion.footer>
    </div>
  );
}

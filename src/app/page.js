import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      {/* Hero Section */}
      <header className="text-center mt-16">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-400 animate-fadeIn">
          Fortisec Technologies Solutions
        </h1>
        <p className="text-lg md:text-2xl mt-4 text-gray-300 max-w-2xl">
          Where Innovation Meets Security
        </p>
      </header>

      {/* Features Section */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
          <h2 className="text-xl font-semibold text-blue-400">Advanced Cybersecurity</h2>
          <p className="text-gray-400 mt-2">
            AI-powered security solutions that predict and neutralize threats before they happen.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
          <h2 className="text-xl font-semibold text-blue-400">AI-Driven Protection</h2>
          <p className="text-gray-400 mt-2">
            Our intelligent systems adapt and learn from new cyber threats, keeping your data safe.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
          <h2 className="text-xl font-semibold text-blue-400">Enterprise Solutions</h2>
          <p className="text-gray-400 mt-2">
            Scalable and robust security infrastructure for businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-16 text-center">
        <p className="text-lg text-gray-300">Secure your future with Fortisec.</p>
        <a
          href="#"
          className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
        >
          Get Started
        </a>
      </section>

      {/* Footer */}
      <footer className="mt-16 py-6 text-center text-gray-500">
        &copy; 2025 Fortisec Technologies Solutions. All rights reserved.
      </footer>
    </div>
  );
}

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col">
      <Navbar />
      <div className="max-w-5xl mx-auto mt-20 p-8">
        <h1 className="text-4xl font-bold text-blue-400">About Us</h1>
        <p className="mt-4 text-gray-300">
          Fortisec Technologies is a leading provider of AI-driven cybersecurity solutions, helping businesses secure their digital assets with the latest technology.
        </p>
      </div>
      <Footer />
    </div>
  );
}

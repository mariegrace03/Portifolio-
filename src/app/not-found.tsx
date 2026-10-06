import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <section className="min-h-screen flex items-center justify-center px-4 bg-linear-to-br from-gray-50 to-emerald-50">
        <div className="text-center">
          <p className="text-7xl font-bold bg-linear-to-r from-emerald-600 to-emerald-800 text-transparent bg-clip-text mb-4">404</p>
          <h1 className="text-2xl sm:text-3xl font-semibold mb-4">Page not found</h1>
          <p className="text-gray-600 mb-8">The page you are looking for does not exist or has been moved.</p>
          <Link href="/" className="inline-block px-10 py-4 bg-linear-to-r from-emerald-600 to-emerald-800 text-white rounded-full font-semibold hover:scale-105 transition">
            Back to Home
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

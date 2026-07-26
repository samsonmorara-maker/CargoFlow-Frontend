import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaTruck,
  FaMapMarkedAlt,
  FaQrcode,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-sky-100">

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-24 lg:flex-row">

        {/* Left Side */}
        <div className="flex-1">

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
            Deliver Smarter.
            <br />

            <span className="text-blue-600">
              Track Everything.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            CargoFlow is an intelligent logistics platform that
            connects customers, drivers and businesses through
            real-time tracking, QR-code verification, automated
            driver assignment and secure delivery management.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/signup"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Start Shipping
            </Link>

            <a
              href="#features"
              className="flex items-center gap-2 rounded-xl border border-gray-300 px-8 py-4 font-semibold hover:bg-gray-100"
            >
              Learn More
              <FaArrowRight />
            </a>

          </div>

          <div className="mt-12 flex flex-wrap gap-8">

            <div className="flex items-center gap-3">
              <FaTruck className="text-2xl text-blue-600" />
              <span>Auto Driver Assignment</span>
            </div>

            <div className="flex items-center gap-3">
              <FaQrcode className="text-2xl text-green-600" />
              <span>QR Secure Pickup</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkedAlt className="text-2xl text-red-600" />
              <span>Live Tracking</span>
            </div>

          </div>

        </div>


            

          </div>

      

    </section>
  );
}

export default Hero;
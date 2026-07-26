import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function CTA() {
  return (
    <section className="bg-blue-700 py-24">

      <div className="mx-auto max-w-5xl px-6 text-center text-white">

        <h2 className="text-5xl font-bold">
          Ready to Transform Your Deliveries?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-xl text-blue-100">
          Join businesses, drivers and customers using CargoFlow to
          simplify logistics with QR verification, live tracking and
          intelligent driver assignment.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6">

          <Link
            to="/signup"
            className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="flex items-center gap-3 rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-blue-700"
          >
            Sign In
            <FaArrowRight />
          </Link>

        </div>

      </div>

    </section>
  );
}

export default CTA;
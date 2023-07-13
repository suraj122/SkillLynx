import { Link } from "react-router-dom";

function Signup() {
  return (
    <section className="py-32 bg-fade-pink h-screen">
      <h1 className="text-center text-royal-green-900 font-bold text-xl">
        Register
      </h1>
      <form className="mt-12 max-w-sm mx-auto w-full" action="">
        <input
          className="block w-full border border-royal-green-600 py-3 px-6 rounded my-4 text-royal-green-600 text-md"
          type="email"
          placeholder="Enter Email"
        />
        <input
          className="block w-full border border-royal-green-600 py-3 px-6 rounded my-4 text-royal-green-600 text-md"
          type="text"
          placeholder="Enter Username"
        />
        <input
          className="block w-full border border-royal-green-600 py-3 px-6 rounded my-4 text-royal-green-600 text-md"
          type="password"
          placeholder="Enter Password"
        />
        <div className="text-center mt-4">
          <button className="px-6 py-3 text-md bg-royal-green-900 text-white rounded w-full">
            Register
          </button>
        </div>
      </form>
      <footer className="mt-8">
        <p className="text-sm text-center text-royal-green-600">
          Already have an account?{" "}
          <Link className="text-gold-900" to="/login">
            Login here
          </Link>
        </p>
      </footer>
    </section>
  );
}

export default Signup;

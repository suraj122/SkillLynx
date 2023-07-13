import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="py-6 border-b border-royal-green-600">
        <nav className="container flex justify-between items-center mx-auto px-8">
          <Link className="text-lg" to="/">
            <strong className="text-gold-900">Skill</strong>
            <strong className="text-royal-green-900">Lynx</strong>
          </Link>
          <ul className="flex items-center">
            <li>
              <Link
                className="text-md text-royal-green-900 hover:text-gold-900"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="ml-6">
              <Link
                className="text-md text-royal-green-900  hover:text-gold-900"
                to="/course"
              >
                Course
              </Link>
            </li>
            <li className="ml-6">
              <Link
                className="text-md text-royal-green-900  hover:text-gold-900"
                to="/login"
              >
                Login
              </Link>
            </li>
            <li className="ml-6">
              <Link
                className="text-md  border px-4 py-3 hover:bg-gold-900 hover:text-white rounded-full border-gold-900 text-gold-900"
                to="/signup"
              >
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Navbar;

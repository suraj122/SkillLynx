import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="py-6 border-b border-royal-green-600">
        <nav className="container mx-auto px-8">
          <ul className="flex justify-between items-center">
            <li>
              <Link className="text-lg" to="/">
                <strong className="text-gold-900">Skill</strong>
                <strong className="text-royal-green-900">Lynx</strong>
              </Link>
            </li>
            <li>
              <Link
                className="text-md text-royal-green-900 font-semibold"
                to="/"
              >
                Admin
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

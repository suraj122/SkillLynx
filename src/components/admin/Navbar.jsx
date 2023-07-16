import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/me", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <header className="py-6 border-b border-royal-green-600">
        <nav className="container mx-auto px-8">
          <div className="flex justify-between items-center">
            <Link className="text-lg" to="/">
              <strong className="text-gold-900">Skill</strong>
              <strong className="text-royal-green-900">Lynx</strong>
            </Link>

            <ul className="flex justify-between items-center">
              {user ? (
                <>
                  <li>
                    <button className="text-md text-royal-green-900 font-semibold">
                      {user}
                    </button>
                  </li>
                  <li className="ml-4">
                    <button
                      onClick={() => {
                        localStorage.removeItem("token");
                        setUser("");
                      }}
                      className="text-md text-royal-green-900 font-semibold"
                      to="/"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      className="text-md text-royal-green-900 font-semibold"
                      to="/admin/login"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="ml-4">
                    <Link
                      className="text-md text-royal-green-900 font-semibold"
                      to="/admin/signup"
                    >
                      Signup
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Navbar;

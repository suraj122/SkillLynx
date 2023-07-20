import { useEffect, useState } from "react";
import { HiDesktopComputer } from "react-icons/hi";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import { PiSuitcaseSimpleFill, PiCertificateBold } from "react-icons/pi";
import axios from "axios";
import Course from "../common/CourseCard";
import { Link } from "react-router-dom";

function Home() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/courses")
      .then((res) => setCourses(res.data.courses))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <section className="pt-32 overflow-hidden bg-fade-pink relative">
        <div className="bg-gold-900 h-64 w-64 rounded-full absolute -left-44 top-0 z-10"></div>
        <article className="container ml-auto h-[calc(100vh-133px)] grid grid-cols-2 gap-64 overflow-hidden">
          <div>
            <h1 className="text-5xl text-royal-green-900 font-extrabold leading-normal">
              Grow Your Skills, <br />
              Define Your Future
            </h1>
            <p className="text-lg text-royal-green-600 mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              rerum libero placeat similique, voluptatum dolore tenetur.
            </p>
            <button className="bg-gold-900 text-white px-6 mt-14 py-3 text-lg inline-block rounded-full">
              Explore Course
            </button>
            <footer className="mt-28 flex justify-between">
              <div className="text-center">
                <h2 className="text-4xl font-semibold text-royal-green-900">
                  40k+
                </h2>
                <p className="text-xl text-royal-green-600 mt-3">
                  Happy students
                </p>
              </div>
              <div className="text-center">
                <h2 className="text-4xl font-semibold text-royal-green-900">
                  12k+
                </h2>
                <p className="text-xl text-royal-green-600 mt-3">
                  Active Users
                </p>
              </div>
              <div className="text-center">
                <h2 className="text-4xl font-semibold text-royal-green-900">
                  2k+
                </h2>
                <p className="text-xl text-royal-green-600 mt-3">
                  Online Classes
                </p>
              </div>
            </footer>
          </div>
          <div className="bg-royal-green-900 h-full rounded-tl-3xl relative">
            <img
              src="/cover-img.png"
              className="relative top-16 -left-16 z-10"
              alt=""
            />
            <div className="bg-gold-900 h-64 w-64 rounded-full absolute -right-8 -bottom-28"></div>
          </div>
        </article>
      </section>
      <section>
        <div className="container mx-auto py-32">
          <header>
            <h2 className="text-center text-4xl font-bold text-royal-green-900">
              Achive Your Goals With SkillLynx
            </h2>
            <p className="text-xl text-royal-green-600 text-center max-w-3xl mx-auto mt-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              perspiciatis id omnis culpa natus? Enim veritatis incidunt
            </p>
          </header>
          <div className="grid grid-cols-3 gap-12 max-w-6xl mx-auto mt-12">
            <article className="bg-white border-2 border-royal-green-300 p-8 rounded-xl">
              <div className="p-3 bg-royal-green-300 inline-block rounded">
                <HiDesktopComputer className="text-xl text-royal-green-700" />
              </div>

              <h3 className="text-2xl font-semibold text-royal-green-900 mt-4">
                Learn the latest skills
              </h3>
              <p className="text-base mt-4 text-royal-green-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                non iste accusantium animi.
              </p>
            </article>
            <article className="bg-[#F6FBF9] shadow-lg border-2 border-royal-green-300 p-8 rounded-xl">
              <div className="p-3 bg-gold-300 inline-block rounded">
                <PiSuitcaseSimpleFill className="text-xl text-gold-900" />
              </div>
              <h3 className="text-2xl font-semibold text-royal-green-900 mt-4">
                Get ready for a career
              </h3>
              <p className="text-base mt-4 text-royal-green-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                non iste accusantium animi.
              </p>
            </article>
            <article className="bg-white border-2 border-royal-green-300 p-8 rounded-xl">
              <div className="p-3 bg-royal-green-300 inline-block rounded">
                <PiCertificateBold className="text-xl text-royal-green-700" />
              </div>
              <h3 className="text-2xl font-semibold text-royal-green-900 mt-4">
                Earn a certificate
              </h3>
              <p className="text-base mt-4 text-royal-green-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                non iste accusantium animi.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <header>
            <h2 className="text-center text-4xl font-bold text-royal-green-900">
              Our Popular Courses
            </h2>
          </header>
          {courses.length !== 0 ? (
            <div className="mt-8 grid grid-cols-3 gap-8">
              {courses.map((course) => (
                <Course key={course._id} course={course} type={"user"} />
              ))}
            </div>
          ) : (
            <h2 className="text-3xl font-bold text-gold-900 text-center mt-32">
              Loading...
            </h2>
          )}
        </div>
      </section>
      <section className="py-32">
        <div className="container bg-[#051518] mx-auto max-w-4xl px-24 py-16 text-center rounded-2xl">
          <h2 className="text-white text-4xl font-semibold">
            Are you ready for today's course?
          </h2>
          <p className="text-white text-lg mt-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
            asperiores atque? Sunt, sequi fugiat?
          </p>
          <input
            className="border-b bg-transparent w-full max-w-sm mt-8 text-white py-2 outline-0"
            type="email"
            placeholder="Enter your email"
          />
          <br />
          <input
            className="bg-gold-900 rounded-full cursor-pointer w-full max-w-sm mt-8 text-white py-3 outline-0"
            type="submit"
            placeholder="Enter your email"
          />
        </div>
      </section>
      <footer className="pb-12">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="text-lg" to="/">
              <strong className="text-gold-900">Skill</strong>
              <strong className="text-royal-green-900">Lynx</strong>
            </div>
            <hr className="w-full max-w-md ml-6 border-gold-900  border-b-2" />
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-gold-900 border-b-[8px] border-b-transparent"></div>
            <nav className="ml-20">
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
                    to="/course"
                  >
                    Service
                  </Link>
                </li>
                <li className="ml-6">
                  <Link
                    className="text-md text-royal-green-900  hover:text-gold-900"
                    to="/course"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mt-8">
            <nav className="text-right">
              <ul className="inline-flex items-center justify-end border-b-2 pb-4 pr-24 border-gold-900">
                <li>
                  <Link
                    className="text-md text-royal-green-900 hover:text-gold-900"
                    to="/"
                  >
                    <FaFacebookSquare className="text-4xl text-gold-900" />
                  </Link>
                </li>
                <li className="ml-6">
                  <Link
                    className="text-md text-royal-green-900  hover:text-gold-900"
                    to="/course"
                  >
                    <FaLinkedin className="text-4xl text-gold-900" />
                  </Link>
                </li>
                <li className="ml-6">
                  <Link
                    className="text-md text-royal-green-900  hover:text-gold-900"
                    to="/course"
                  >
                    <FaInstagramSquare className="text-4xl text-gold-900" />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;

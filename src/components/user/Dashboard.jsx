import { Link } from "react-router-dom";
import Course from "../../common/CourseCard";
import axios from "axios";
import { useEffect, useState } from "react";
import CourseCard from "../../common/CourseCard";

function Dashboard() {
  const token = localStorage.getItem("token");
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/purchasedCourses", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        setCourses(res.data.purchasedCourses);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <section className="container mx-auto px-6 py-12">
      <header className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-royal-green-900">
          All Courses bought by You
        </h1>
        <Link to="/course" className="btn btn-filled">
          Expore more Course
        </Link>
      </header>
      {courses.length === 0 ? (
        <h1 className="text-xl font-bold text-gold-900 mt-24 text-center">
          You haven't bought any course yet
        </h1>
      ) : (
        <div className="mt-8 grid grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} type={"user"} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Dashboard;

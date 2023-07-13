import { Link } from "react-router-dom";
import Course from "../../common/CourseCard";

function Dashboard() {
  return (
    <section className="container mx-auto px-6 py-12">
      <header className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-royal-green-900">
          All Courses created by You
        </h1>
        <Link to="/admin/courses/create" className="btn btn-filled">
          Create Course
        </Link>
      </header>
      <div className="mt-8 grid grid-cols-3 gap-8">
        <Course title={"Frontend Developement"} />
        <Course title={"Backend Developement"} />
        <Course title={"Fullstack Developement"} />
        <Course title={"Digital Marketing"} />
      </div>
    </section>
  );
}

export default Dashboard;

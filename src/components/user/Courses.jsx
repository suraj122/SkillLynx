import { Link } from "react-router-dom";
import Course from "../../common/CourseCard";

function Courses() {
  return (
    <section className="container mx-auto px-6 py-12">
      <header className="">
        <h1 className="text-3xl font-extrabold text-center text-royal-green-900">
          Popular Courses
        </h1>
      </header>
      <div className="mt-12 grid grid-cols-3 gap-8">
        <Course title={"Frontend Developement"} />
        <Course title={"Backend Developement"} />
        <Course title={"Fullstack Developement"} />
        <Course title={"Digital Marketing"} />
      </div>
    </section>
  );
}

export default Courses;

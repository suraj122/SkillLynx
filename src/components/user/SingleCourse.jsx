import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function SingleCourse() {
  const [course, setCourse] = useState({});
  const id = useParams().id;

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/courses")
      .then((res) =>
        setCourse(res.data.courses.find((course) => course._id === id))
      )
      .catch((err) => console.error(err));
  }, []);
  return (
    <section>
      <header
        className="py-24 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${course.imgLink})`,
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white text-royal-green-900s">
            {course.title}
          </h1>
          <div className="text-center">
            <strong className="text-royal-green-600 font-normal text-sm inline-block my-3">
              {course.tag}
            </strong>
            <br />
            <strong className="text-gold-900 font-semibold text-2xl inline-block">
              ₹{course.price}
            </strong>
          </div>
          <footer className="mt-4">
            <button className="btn mt-4 !border-white !text-white inline-block">
              Buy Course
            </button>
          </footer>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-6 mt-12">
        <p className=" text-royal-green-900 text-xl">{course.description}</p>
      </div>
    </section>
  );
}

export default SingleCourse;

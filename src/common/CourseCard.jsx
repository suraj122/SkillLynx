import { Link } from "react-router-dom";

function CourseCard(props) {
  return (
    <Link to="/admin/courses/123456">
      <article className="border border-royal-green-600 rounded-md">
        <header className="px-6 py-16 bg-fade-pink rounded-t-md">
          <h2 className="text-xl font-semibold text-center">{props.title}</h2>
        </header>
        <div className="p-6">
          <div className="flex justify-between items-center">
            <strong className="text-gold-900 font-semibold">$123</strong>
            <strong className="text-royal-green-600 font-normal text-sm">
              Marketing
            </strong>
          </div>

          <p className="mt-4 text-royal-green-900 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            labore magnam veniam voluptatem iure aliquam molestiae rerum tenetur
            quidem rem!
          </p>

          <footer className="mt-4 flex justify-between items-center">
            <button className="btn">Edit Course</button>
            <span className="bg-royal-green-900 text-white text-xs p-2 rounded">
              Published
            </span>
          </footer>
        </div>
      </article>
    </Link>
  );
}

export default CourseCard;

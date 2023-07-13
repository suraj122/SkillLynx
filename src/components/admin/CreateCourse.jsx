import { Link } from "react-router-dom";

function Courses() {
  return (
    <section className="py-14 bg-fade-pink h-screen">
      <h1 className="text-center text-royal-green-900 font-bold text-xl">
        Create Course
      </h1>
      <form className="mt-12 max-w-md mx-auto w-full" action="">
        <input
          className="block w-full border border-royal-green-600 py-3 px-6 rounded my-4 text-royal-green-600 text-md"
          type="text"
          placeholder="Enter Title"
        />
        <input
          className="block w-full border border-royal-green-600 py-3 px-6 rounded my-4 text-royal-green-600 text-md"
          type="text"
          placeholder="Enter Tag"
        />
        <input
          className="block w-full border border-royal-green-600 py-3 px-6 rounded my-4 text-royal-green-600 text-md"
          type="text"
          placeholder="Enter Price"
        />
        <textarea
          className="block w-full border border-royal-green-600 py-3 px-6 rounded my-4 text-royal-green-600 text-md"
          rows="4"
          placeholder="Enter description"
        ></textarea>
        <select
          className="block w-full border border-royal-green-600 py-3 px-6 rounded my-4 text-royal-green-600 text-md"
          name=""
          id=""
        >
          <option value="published">Published</option>
          <option value="not-published">Not Published</option>
        </select>
        <div className="text-center mt-4">
          <button className="px-6 py-3 text-md bg-royal-green-900 text-white rounded w-full">
            Create
          </button>
        </div>
      </form>
    </section>
  );
}

export default Courses;

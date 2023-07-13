import React from "react";

function SingleCourse() {
  return (
    <section>
      <header className="py-24 bg-fade-pink">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-royal-green-900s">
            Frontend Development
          </h1>
          <div className="text-center">
            <strong className="text-royal-green-600 font-normal text-sm inline-block my-3">
              Marketing
            </strong>
            <br />
            <strong className="text-gold-900 font-semibold text-2xl inline-block">
              $123
            </strong>
          </div>
          <footer className="mt-4">
            <span className="bg-royal-green-900 text-white text-xs p-2 rounded inline-block">
              Published
            </span>
            <br />
            <button className="btn mt-4">Edit Course</button>
          </footer>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-6 mt-12">
        <p className=" text-royal-green-900 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          labore magnam veniam voluptatem iure aliquam molestiae rerum tenetur
          quidem rem!
        </p>
      </div>
    </section>
  );
}

export default SingleCourse;

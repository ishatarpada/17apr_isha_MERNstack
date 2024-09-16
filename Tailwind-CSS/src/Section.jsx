import 'animate.css';
import Processor from './assets/professor.svg';

function Section() {
  return (
    <>
      <section className="font-serif bg-gradient-to-r from-blue-50 to-blue-900">
        <div className="container mx-auto px-4 py-12 md:py-36">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img
                src={Processor}
                alt="Professor"
                className="rounded-full w-full max-w-md md:max-w-lg h-auto animate__animated animate__flip shadow-slate-500/50"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold my-3 text-blue-100">
                Say Hello! <br /> Our Website
              </h1>
              <p className="text-lg md:text-xl font-bold text-white">
                Enjoy a complete digital learning experience
              </p>
              <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-3 my-5">
                <button className="border border-blue-950 py-2 px-4 rounded text-blue-950 text-lg md:text-xl font-bold">
                  Learn More
                </button>
                <button className="bg-blue-950 py-2 px-4 rounded text-white text-lg md:text-xl font-bold">
                  Watch Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section;

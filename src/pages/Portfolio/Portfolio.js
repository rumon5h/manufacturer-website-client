import React from "react";
import rumonImg from "../../images/rumon.png";

const Portfolio = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={rumonImg}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Md. Rumon Khan"
          />
          <div>
            <h1 className="text-5xl font-bold">Md. Rumon Khan!</h1>
            <p className="py-6">
              A self-motivated and enthusiastic web developer with a deep
              interest in programming. To work in the Software industry with
              modern web technologies of different local and multinational
              Software/ IT agencies of Bangladesh and grow rapidly with
              increasing responsibilities.
            </p>
            <button className="btn btn-active">Resume</button>
          </div>
        </div>
      </div>
      <div className="m-12 ">
        <div className="">
          <h5 className="text-2xl font-bold text-gray-900">
            Tools & Technologies🥇
          </h5>
          <div className="grid grid-cols-2 md:grid-cols-5">
            <span className="p-3 bg-slate-100 m-3">HTML5</span>
            <span className="p-3 bg-slate-100 m-3">CSS3</span>
            <span className="p-3 bg-slate-100 m-3">Tailwind</span>
            <span className="p-3 bg-slate-100 m-3">React Tailwind</span>
            <span className="p-3 bg-slate-100 m-3">Bootstrap</span>
            <span className="p-3 bg-slate-100 m-3">React Bootstrap</span>
            <span className="p-3 bg-slate-100 m-3">JavaScript</span>
            <span className="p-3 bg-slate-100 m-3">React</span>
            <span className="p-3 bg-slate-100 m-3">Firebase</span>
            <span className="p-3 bg-slate-100 m-3">React firebase hook</span>
            <span className="p-3 bg-slate-100 m-3">Json web token</span>
            <span className="p-3 bg-slate-100 m-3">MongoDB</span>
            <span className="p-3 bg-slate-100 m-3">Express</span>
            <span className="p-3 bg-slate-100 m-3">VS Code</span>
            <span className="p-3 bg-slate-100 m-3">Github</span>
            <span className="p-3 bg-slate-100 m-3">Figma</span>
            <span className="p-3 bg-slate-100 m-3">Heroku</span>
            <span className="p-3 bg-slate-100 m-3">Netlify</span>
          </div>
        </div>
      </div>

      <div className="m-12 ">
        <div className="">
          <h5 className="text-2xl font-bold text-gray-900">
            Some Best Website🥇
          </h5>
          <div className="grid grid-cols-2 md:grid-cols-3">
            <a
              href="https://warehouse-management-c2a0a.web.app/"
              target="_blank"
              className="p-3 text-blue-900 bg-slate-100 m-3" rel="noopener noreferrer"
            >
              Bd Car House
            </a>
            <a
              href="https://candid-beignet-aef95e.netlify.app/"
              target="_blank"
              className="p-3 text-blue-900 bg-slate-100 m-3" rel="noopener noreferrer"
            >
              Elon Musk
            </a>
            <a
              href="https://tangerine-chimera-463d0f.netlify.app/"
              target="_blank"
              className="p-3  bg-slate-100 text-blue-900 m-3" rel="noopener noreferrer"
            >
              Laptop review
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

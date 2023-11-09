import Nav from "./components/Nav";
import {
  FaReact,
  FaVuejs,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoJquery,
  BiLogoPhp,
  BiLogoPython,
  BiLogoGit,
} from "react-icons/bi";
import { SiVite, SiAdobephotoshop } from "react-icons/si";

function App() {
  return (
    <>
      <div className="">
        <Nav></Nav>
        <section className="px-10 sm:px-10 py-10 grid grid-cols-4 gap-8">
          <div className="col-span-4 mb-28">
            <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-violet-400 to-red-500 w-fit">
              Cameron<br></br>Clark
            </h1>
            <p className="font-mono text-xl text-slate-800">
              full stack software engineer / web developer
            </p>
          </div>
          <div className="col-span-4 lg:col-span-2 rounded-lg shadow-lg shadow-slate-100 bg-gradient-to-br from-indigo-100 to-red-100 p-8 text-slate-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 font-thin gap-6">
              <div>
                <h2 className="text-slate-800 text-lg mb-2 font-light">
                  Front end
                </h2>

                <ul className="mt-2 grid gap-2 [&>li]:inline-flex [&>li]:items-center">
                  <li>
                    <FaHtml5 className="text-orange-600 text-2xl" />
                    &nbsp;HTML
                  </li>
                  <li>
                    <FaCss3Alt className="text-blue-500 text-2xl" />
                    &nbsp;CSS / SASS / LESS
                  </li>
                  <li>
                    <BiLogoJavascript className="text-yellow-500 text-2xl" />
                    &nbsp;JS / ES6 / TS
                  </li>
                  <li>
                    <FaReact className="text-sky-500 text-2xl" />
                    &nbsp;React
                  </li>
                  <li>
                    <FaVuejs className="text-green-400 text-2xl" />
                    &nbsp;Vue
                  </li>
                  <li>
                    <BiLogoTailwindCss className="text-sky-400 text-2xl" />
                    &nbsp;Tailwind
                  </li>
                  <li>
                    <BiLogoJquery className="text-orange-600 text-2xl" />
                    &nbsp;JQuery
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-slate-800 text-lg mb-2 font-light">
                  Back end
                </h2>

                <ul className="mt-2 grid gap-2 [&>li]:inline-flex [&>li]:items-center">
                  <li>
                    <FaNodeJs className="text-blue-500 text-2xl" />
                    &nbsp;Node / Deno
                  </li>
                  <li>
                    <BiLogoPhp className="text-purple-500 text-2xl" />
                    &nbsp;PHP / Laravel / Blade
                  </li>
                  <li>
                    <BiLogoPython className="text-sky-700 text-2xl" />
                    &nbsp;Python
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-slate-800 text-lg mb-2 font-light">Dev</h2>
                <ul className="mt-2 grid gap-2 [&>li]:inline-flex [&>li]:items-center">
                  <li>
                    <BiLogoGit className="text-slate-700 text-2xl" />
                    &nbsp;Git
                  </li>
                  <li>
                    <FaGithub className="text-black text-2xl" />
                    &nbsp;Github
                  </li>
                  <li>
                    <SiVite className="text-green-500 text-2xl" />
                    &nbsp;Vite
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-slate-800 text-lg mb-2 font-light">
                  Design
                </h2>
                <ul className="mt-2 grid gap-2 [&>li]:inline-flex [&>li]:items-center">
                  <li>
                    <SiAdobephotoshop className="text-blue-800 text-2xl" />
                    &nbsp;Photoshop
                  </li>
                  <li>
                    <FaFigma className="text-purple-700 text-2xl" />
                    &nbsp;Figma
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-4 md:col-span-2 rounded-lg shadow-lg shadow-slate-100 bg-indigo-100 p-8">
            <h2 className="text-slate-800 text-lg mb-2 font-light">About me</h2>
            <p className="text-slate-700 font-thin">
              I grew up with an interest in engineering and software and it
              continues to be a passion of mine to this day. With over 5 years
              of experience with web design, full stack development, and
              backend/database technology, I can turn pretty much any web
              software idea into a reality.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;

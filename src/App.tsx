import Nav from "./components/Nav";
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaNpm,
} from "react-icons/fa";
import {
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoJquery,
  BiLogoPhp,
  BiLogoPython,
  BiLogoGit,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { SiVite, SiAdobephotoshop } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { FiArrowRight } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { motion } from "framer-motion";
function App() {
  const [aboutOpen, setAboutOpen] = useState(false);
  return (
    <>
      <div className="">
        <Nav></Nav>
        <section className="grid grid-cols-4 px-8 md:px-28 py-10 gap-8">
          <div className="col-span-4 mb-24 space-y-3">
            <h1 className="text-7xl font-bold text-transparent bg-clip-text animate-gradient w-fit">
              Cameron
              <br />
              Clark
            </h1>
            <p className="font-mon font-light text-xl text-slate-600">
              Full stack software engineer + web developer
            </p>
            <div className="gap-3 flex">
              <a
                href="https://github.com/camc8"
                target="_blank"
                className="p-3 border rounded-full text-xl hover:bg-slate-100">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/cameron-clark-6b13281b2"
                target="_blank"
                className="p-3 border rounded-full text-xl hover:bg-slate-100">
                <BiLogoLinkedinSquare />
              </a>
            </div>
          </div>
          <div className="h-fit group col-span-4 lg:col-span-2 row-span-3 rounded-3xl shadow-lg shadow-slate-100 bg-gradient-to-br from-teal-100 to-violet-100 p-8 text-slate-700">
            <div className="group-hover:scale-[1.02] duration-200 ease-linear">
              <div className="grid  grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-slate-800 text-lg mb-2">Front end</h2>

                  <ul className="mt-2 grid gap-2 [&>li]:inline-flex [&>li]:items-center font-mono">
                    <li>
                      <FaHtml5 className="text-orange-600 text-2xl" />
                      &nbsp;HTML
                    </li>
                    <li>
                      <FaCss3Alt className="text-blue-500 text-2xl" />
                      &nbsp;CSS
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
                      <BiLogoTailwindCss className="text-sky-400 text-2xl" />
                      &nbsp;Tailwind
                    </li>
                    <li>
                      <BiLogoJquery className="text-orange-600 text-2xl" />
                      &nbsp;Jquery
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-slate-800 text-lg mb-2">Back end</h2>

                  <ul className="mt-2 grid gap-2 [&>li]:inline-flex [&>li]:items-center font-mono">
                    <li>
                      <BiLogoPhp className="text-cyan-700 text-2xl" />
                      &nbsp;PHP / Laravel / Blade
                    </li>
                    <li>
                      <FaNodeJs className="text-lime-500 text-2xl" />
                      &nbsp;Node
                    </li>
                    <li>
                      <BiLogoPython className="text-sky-700 text-2xl" />
                      &nbsp;Python
                    </li>
                    <li>
                      <TbBrandMysql className="text-sky-800 text-2xl" />
                      &nbsp;Mysql / MariaDB / Sqlite
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-slate-800 text-lg mb-2">Dev</h2>
                  <ul className="mt-2 grid gap-2 [&>li]:inline-flex [&>li]:items-center font-mono">
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
                    <li>
                      <FaNpm className="text-red-500 text-2xl" />
                      &nbsp;NPM
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-slate-800 text-lg mb-2">Design</h2>
                  <ul className="mt-2 grid gap-2 [&>li]:inline-flex [&>li]:items-center font-mono">
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
          </div>
          <motion.div
            layout="position"
            className="cursor-pointer h-fit col-span-4 md:col-span-2 rounded-3xl shadow-lg shadow-slate-100 bg-rose-50 p-8 group [&[data-isOpen='true']]:fixed [&[data-isOpen='true']]:inset-0 [&[data-isOpen='true']]:rounded-none [&[data-isOpen='true']]:h-full"
            data-isOpen={aboutOpen}>
            {aboutOpen && <style>{`body {overflow: hidden;}`}</style>}
            <a
            // onClick={() => setAboutOpen(!aboutOpen)}
            >
              <div className="grid gap-2 group-hover:scale-[1.02] duration-200 ease-linear">
                <h2 className="text-slate-800 text-xl">About me</h2>
                <p className="text-slate-700">
                  I grew up with an interest in engineering and software and it
                  continues to be a passion of mine to this day. With over 5
                  years of experience with web design, full stack development,
                  and backend/database technology, I can turn pretty much any
                  idea into a reality.
                </p>
                {/* <span className="flex items-center gap-1 text-slate-700">
                  Read more <FiArrowRight className="mt-[1px]" />
                </span> */}
              </div>
            </a>
          </motion.div>
          <div className="h-fit col-span-4 md:col-span-2 row-span-1 rounded-3xl shadow-lg shadow-slate-100 bg-teal-50 p-8 group">
            <div className="group-hover:scale-[1.02] duration-200 ease-linear">
              <h2 className="text-slate-800 text-xl mb-2">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <img
                  src="https://images.unsplash.com/photo-1699183977963-242cb79d4bc2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
                  alt=""
                  className="rounded-3xl"
                />
              </div>
            </div>
          </div>
          <div className="h-fit col-span-4 row-span-1 rounded-3xl shadow-lg shadow-slate-100 bg-sky-50 p-8 group">
            <div className="group-hover:scale-[1.02] duration-200 ease-linear">
              <h2 className="text-slate-800 text-xl mb-2">Contact</h2>
              <div className="text-slate-700 space-y-3">
                <div className="flex items-center justify-center">
                  <BiLogoLinkedinSquare className="text-2xl" />
                  <a
                    className="mx-1"
                    target="_blank"
                    href="https://www.linkedin.com/in/cameron-clark-6b13281b2">
                    Cameron Clark
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <MdEmail className="text-2xl" />
                  <a className="mx-1" href="mailto:cameron@xcorpllc.com">
                    cameron@xcorpllc.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;

import Nav from "./components/Nav";
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaNpm,
  FaJava,
  FaDocker,
  FaAws,
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
import {
  SiVite,
  SiAdobephotoshop,
  SiRedis,
  SiRemix,
  SiMongodb,
  SiJest,
} from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";

function App() {
  return (
    <>
      <div className="">
        <Nav></Nav>
        <section className="grid grid-cols-4 grid-rows-1 px-8 md:px-28 py-10 gap-8">
          {/* Hero */}
          <div className="col-span-4 md:col-span-2 mb-24 text-center md:text-left">
            <img
              src="images/cameron-clark.jpg"
              alt="Cameron Clark"
              title="Cameron Clark"
              className="md:hidden rounded-full h-[9rem] lg:h-[11rem] w-[9rem] lg:w-[11rem] mx-auto mb-8"
            />
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-transparent bg-clip-text animate-my-name w-fit mx-auto md:mx-0">
              Cameron Clark
            </h1>
            <p className="font-light text-lg md:text-xl text-slate-600 my-3">
              Founder and full stack software engineer based in Miami
            </p>
            <div className="gap-3 flex justify-center md:justify-start">
              <a
                href="https://github.com/camc8"
                title="My Github"
                target="_blank"
                className="p-3 border rounded-full text-xl hover:bg-slate-900 hover:border-slate-900 hover:text-white duration-200">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/cameron-clark-6b13281b2"
                title="My LinkedIn"
                target="_blank"
                className="p-3 border rounded-full text-xl hover:bg-sky-600 hover:border-sky-600 hover:text-white duration-200">
                <BiLogoLinkedinSquare />
              </a>
            </div>
          </div>
          <div className="hidden md:flex md:col-span-2">
            <img
              src="images/cameron-clark.jpg"
              alt="Cameron Clark"
              title="Cameron Clark"
              className="rounded-full h-[9rem] lg:h-[11rem] w-[9rem] lg:w-[11rem] ml-auto"
            />
          </div>
          {/* Skills */}
          <div className="max-sm:order-2 group col-span-4 lg:col-span-2 row-span-2 rounded-3xl shadow-lg shadow-slate-100 animate-skills p-8 text-slate-700">
            <div className="group-hover:scale-[1.02] duration-200 ease-linear">
              <h2 className="text-slate-800 text-xl mb-2">Techincal Skills</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-slate-800 text-lg mb-2">Front end</h2>

                  <ul className="mt-2 grid gap-4 [&>li]:inline-flex [&>li]:items-center">
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

                  <ul className="mt-2 grid gap-4 [&>li]:inline-flex [&>li]:items-center">
                    <li>
                      <BiLogoPhp className="text-cyan-700 text-2xl" />
                      &nbsp;PHP / Laravel
                    </li>
                    <li>
                      <FaNodeJs className="text-lime-500 text-2xl" />
                      &nbsp;Node
                    </li>
                    <li>
                      <SiRemix className="text-black text-lg mx-1" />
                      &nbsp;Remix.js
                    </li>
                    <li>
                      <BiLogoPython className="text-sky-700 text-2xl" />
                      &nbsp;Python
                    </li>
                    <li>
                      <FaJava className="text-orange-500 text-2xl" />
                      &nbsp;Java
                    </li>
                    <li>
                      <TbBrandMysql className="text-sky-800 text-2xl" />
                      &nbsp;MySQL / SQLite
                    </li>
                    <li>
                      <SiRedis className="text-red-600 text-2xl" />
                      &nbsp;Redis
                    </li>
                    <li>
                      <SiMongodb className="text-green-500 text-2xl" />
                      &nbsp;MongoDB
                    </li>
                  </ul>
                </div>
                <div className="self-end">
                  <h2 className="text-slate-800 text-lg mb-2">Dev</h2>
                  <ul className="mt-2 grid gap-4 [&>li]:inline-flex [&>li]:items-center">
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
                      <SiJest className="text-red-800 text-2xl" />
                      &nbsp;Jest/Vitest
                    </li>
                    <li>
                      <FaNpm className="text-red-500 text-2xl" />
                      &nbsp;NPM
                    </li>
                    <li>
                      <FaDocker className="text-blue-700 text-2xl" />
                      &nbsp;Docker
                    </li>
                    <li>
                      <FaAws className="text-yellow-500 text-2xl" />
                      &nbsp;AWS
                    </li>
                  </ul>
                </div>
                <div className="self-end">
                  <h2 className="text-slate-800 text-lg mb-2">Design</h2>
                  <ul className="mt-2 grid gap-4 [&>li]:inline-flex [&>li]:items-center">
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
          {/* About me */}
          <div className="max-sm:order-1 cursor-pointer col-span-4 md:col-span-2 row-span-1 rounded-3xl shadow-lg shadow-slate-100 bg-sky-50 p-8 group">
            <div className="grid gap-2 group-hover:scale-[1.02] duration-200 ease-linear">
              <h2 className="text-slate-800 text-xl">About me</h2>
              <p className="text-slate-700">
                I grew up with an interest in engineering and software and it
                continues to be a passion of mine to this day. With over 8 years
                of experience with full stack development, web design, backend,
                and database technology, I can turn pretty much any idea into a
                reality.
              </p>
              {/* <span className="flex items-center gap-1 text-slate-700">
                  Read more <FiArrowRight className="mt-[1px]" />
                </span> */}
            </div>
          </div>
          {/* FormZen */}
          <div className="max-sm:order-3 col-span-4 md:col-span-2 rounded-3xl shadow-lg shadow-slate-100 bg-red-50 pt-8 px-8 group overflow-hidden">
            <div className="group-hover:scale-[1.02] duration-200 ease-linear grid items-start h-full">
              <div className="mb-8 grid gap-1">
                <h2 className="text-slate-800 text-xl">FormZen</h2>
                <p className="text-slate-700 font-light">
                  Speeds up filling out and signing real estate forms using PDF
                  Lib, Pelias geocoder, local government APIs, and React
                </p>
              </div>
              <img
                src="images/form-filler.jpg"
                loading="lazy"
                className="object-cover w-3/4 mx-auto rounded-lg shadow-lg my-8"
                alt=""
              />
            </div>
          </div>
          {/* DOS */}
          <div className="max-sm:order-4 col-span-4 md:col-span-2 row-span-1 rounded-3xl shadow-lg shadow-slate-100 bg-sky-100 pt-8 px-8 group overflow-hidden">
            <div className="group-hover:scale-[1.02] duration-200 ease-linear grid items-start h-full">
              <div className="mb-8 grid gap-1">
                <h2 className="text-slate-800 text-xl">
                  DOS Healthcare Reporting
                </h2>
                <p className="text-slate-700 font-light">
                  Patient to nurse reporting system for assisted living and long
                  term care facilities
                </p>
              </div>
              <img
                src="images/dos.jpg"
                loading="lazy"
                className="object-cover w-3/4 mx-auto rounded-lg shadow-lg my-8"
                alt=""
              />
            </div>
          </div>
          {/* Retro UI */}
          <a
            className="max-sm:order-5 col-span-4 md:col-span-2 row-span-1 rounded-3xl shadow-lg shadow-slate-100 bg-neutral-100 pt-8 px-8 group"
            href="https://github.com/camc8/RetroUI"
            title="Retro UI Github"
            target="_blank">
            <div className="group-hover:scale-[1.02] duration-200 ease-linear grid items-start h-full">
              <div className="grid gap-1">
                <h2 className="text-slate-800 text-xl">Retro UI</h2>
                <p className="text-slate-700 font-light">
                  A 90's themed UI kit using Tailwind CSS
                </p>
              </div>
              <img
                src="images/retro-ui.jpg"
                loading="lazy"
                className="object-cover w-3/4 mx-auto rounded-lg shadow-lg my-8"
                alt=""
              />
            </div>
          </a>
          {/* XCORP LLC */}
          <a
            href="https://xcorpllc.com"
            target="_blank"
            className="max-sm:order-6 col-span-4 md:col-span-2 row-span-1 rounded-3xl shadow-lg shadow-slate-100 bg-blue-100 pt-8 px-8 group overflow-hidden">
            <div className="group-hover:scale-[1.02] duration-200 ease-linear grid items-start h-full">
              <div className="mb-8 grid gap-1">
                <h2 className="text-slate-800 text-xl">XCORP LLC</h2>
                <p className="text-slate-700 font-light">
                  Corporate site for real estate management company
                </p>
              </div>
              <img
                src="images/xcorp.jpg"
                loading="lazy"
                className="object-cover w-3/4 mx-auto rounded-lg shadow-lg my-8"
                alt=""
              />
            </div>
          </a>

          {/* Optibot */}
          <a
            href="https://github.com/camc8/optibot"
            title="Optibot Github"
            target="_blank"
            className="max-sm:order-7 col-span-4 md:col-span-2 row-span-1 rounded-3xl shadow-lg shadow-slate-100 bg-violet-50 pt-8 px-8 group overflow-hidden">
            <div className="group-hover:scale-[1.02] duration-200 ease-linear grid items-start h-full">
              <div className="mb-8 grid gap-1">
                <h2 className="text-slate-800 text-xl">Optibot</h2>
                <p className="text-slate-700 font-light">
                  Python UI designed to automate messaging in Discord and other
                  chat platforms
                </p>
              </div>
              <img
                src="images/optibot.jpg"
                loading="lazy"
                className="object-cover w-3/4 mx-auto rounded-lg shadow-lg my-8"
                alt=""
              />
            </div>
          </a>
          {/* Contact */}
          <div
            id="contact"
            className="max-sm:order-8 col-span-4 row-span-1 rounded-3xl shadow-lg shadow-slate-100 bg-slate-100 p-8">
            <h2 className="text-slate-800 text-xl">
              Let's make something great!
            </h2>
            <div className="text-slate-700 space-y-3 font-light">
              Send me an email at
              <a
                title="Send me an email"
                className="mx-1 text-slate-800"
                href="mailto:cameron@xcorpllc.com">
                cameron@xcorpllc.com
              </a>
              <div className="gap-3 flex flex-wrap items-center pt-8">
                <a
                  title="Send me an email"
                  href="mailto:cameron@xcorpllc.com"
                  target="_blank"
                  className="whitespace-nowrap p-3 text-sm md:text-base rounded-full bg-slate-700 text-slate-50 hover:bg-slate-900 hover:border-slate-900 duration-200">
                  Contact me
                </a>
                <a
                  href="https://github.com/camc8"
                  title="My Github"
                  target="_blank"
                  className="p-3 rounded-full md:text-xl bg-slate-50 hover:bg-slate-900 hover:border-slate-900 hover:text-white duration-200">
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/cameron-clark-6b13281b2"
                  title="My LinkedIn"
                  target="_blank"
                  className="p-3 rounded-full md:text-xl bg-slate-50 hover:bg-sky-600 hover:border-sky-600 hover:text-white duration-200">
                  <BiLogoLinkedinSquare />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;

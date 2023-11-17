import { useState } from "react";
import Hamburger from "../components/Hamburger";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const body = `
    body {
        overflow: hidden;
    }
`;
  return (
    <nav className="w-screen drop-shadow-sm px-8 md:px-28 z-20">
      {navOpen && <style>{body}</style>}
      <div className="flex flex-wrap items-center justify-end mx-auto h-[7rem] lg:mt-10">
        <div onClick={() => setNavOpen(!navOpen)} className="z-50">
          <Hamburger open={navOpen}></Hamburger>
        </div>
        <AnimatePresence>
          {navOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed top-0 right-0 h-screen w-screen grid place-content-center gap-20 px-8 md:px-28 py-[7rem] backdrop-blur-lg font-thin text-center text-4xl">
              <a
                href="/"
                className="text-slate-800 active:text-slate-700"
                title="Home">
                ./
              </a>
              <a
                onClick={() => setNavOpen(false)}
                href="#contact"
                title="Contact me"
                className="text-slate-800 active:text-slate-700">
                Contact
              </a>
              <a
                href="https://github.com/camc8/"
                title="My Github"
                target="_blank"
                className="text-slate-800 active:text-slate-700">
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/cameron-clark-6b13281b2"
                title="My LinkedIn"
                target="_blank"
                className="text-slate-800 active:text-slate-700">
                LinkedIn
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

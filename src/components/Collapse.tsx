import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav({ children }: { children?: ReactNode }) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-wrap items-center justify-end mx-auto h-[7rem]">
      <div onClick={() => setOpen(!open)} className="z-50 lg:mt-10">
        Expand
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ opacity: 0 }}>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

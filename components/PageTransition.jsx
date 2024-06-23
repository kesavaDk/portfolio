"use client";

import { AnimatePresence,motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}></div>
      <motion.div
        inital={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transiton: { delay: 1, duration: 0.4, ease: "easeInOut" },
        }}
        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
      />
      {children}
    </AnimatePresence>
  );
};

export default PageTransition;

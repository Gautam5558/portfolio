import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const [onLoad, setOnLoad] = useState(false);

  useEffect(() => {
    setOnLoad(true);
  }, []);

  return (
    <motion.div
      initial={{ top: 0 }}
      animate={{ top: onLoad ? "-100%" : 0 }}
      transition={{ duration: 0.5 }}
      className="h-screen w-full flex justify-center items-center bg-gradient-to-t from-yellow-50 to-red-50 z-[9999] fixed top-0 left-0 "
    >
      <img src="/spinner.gif" alt="loading..." />
    </motion.div>
  );
};

export default Loader;

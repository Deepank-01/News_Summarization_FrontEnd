// import { Link } from "react-router-dom";
import { Link, useLocation } from "react-router";
// import { useAuthStore } from "../store/useAuthStore";
import { ChartArea, LogOut, MessageSquare, Newspaper,Settings, User } from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";
import { useAuth } from "../store/auth";
const Navbar = () => {
  const { authUser,logout } = useAuth();
  const [currenttab,setcurrentTab]=useState("/")
  const location=useLocation()
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (

    <motion.header
    initial={{ y: -100, opacity: 0 }} // Initial position (off-screen)
    animate={{ y: 0, opacity: 1 }} // Animate to visible position
    transition={{ duration: 0.5, ease: "easeOut" }} // Animation duration and easing
     className=" mb-2  bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
  >
    <div className="container mx-auto px-4 h-20 mt-1">
      <div className="flex items-center justify-between h-full md:gap-24">
        <div className="flex items-center gap-8 mt-2">
          <Link to="/" className="flex items-center gap-8 hover:opacity-80 transition-all">
            <motion.div
              whileHover={{ scale: 1.1 }} // Scale up on hover
              whileTap={{ scale: 0.9 }} // Scale down on tap
              className="md:w-20 md:h-16 size-5 rounded-lg bg-primary/10 flex items-center justify-center"
            >
              <Newspaper className="w-[100%] h-[100%] text-primary" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }} // Fade in from the left
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg md:text-5xl font-bold"
            >
              News Summarization
            </motion.h1>
          </Link>
        </div>

        <div className="flex items-center gap-2 md:gap-5">
          {authUser && (
            <>
         
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={"/"} className={`${isActive("/")? ("bg-slate-700 text-primary btn btn-sm  md:btn-md gap-2"):("btn btn-xs md:btn-sm gap-2")}   rounded-md transition hover:scale-110 `}>
                  <ChartArea className="md:size-5 size-3" />
                  <span className="hidden sm:inline">Chat</span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }} // Slight scale on hover
                whileTap={{ scale: 0.95 }} // Slight scale on tap
              >
                <Link to={"/Profile"} className={`${isActive("/Profile")? ("bg-slate-700 text-primary  btn btn-sm  md:btn-md gap-2"):("btn btn-xs md:btn-sm gap-2")}  transition hover:scale-110 `}>
                  <User className="md:size-5 size-3" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>
              </motion.div>
              
            </>
          )}
          {/* <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={"/setting/theme"}
              className={` ${isActive("/setting/theme")? ("bg-slate-700 text-primary   btn btn-sm  md:btn-md gap-2"):("btn btn-xs md:btn-sm gap-2")}  transition hover:scale-110 `}
            >
              <Settings className="md:size-5 size-3" />
              <span className="hidden sm:inline">Themes</span>
            </Link>
          </motion.div> */}
          {authUser && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="btn glass" onClick={logout}>
                <LogOut className="size-5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  </motion.header>
  );
};
export default Navbar;
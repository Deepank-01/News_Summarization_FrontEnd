import { Link, useLocation, useNavigate } from "react-router";
import { ChartArea, LogOut, MessageSquare, Newspaper, Settings, User } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useAuth } from "../store/auth";

const Navbar = () => {
  const { authUser, logout } = useAuth();
  const [currenttab, setcurrentTab] = useState("/");
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
 const navigate=useNavigate()
  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/news" className="flex items-center gap-4">
          <motion.div className="md:w-20 md:h-16 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Newspaper className="w-[100%] h-[100%] text-primary" />
          </motion.div>
          <motion.h1 className="text-lg md:text-5xl font-bold">Headlinr-AI</motion.h1>
        </Link>
        <button className="md:hidden text-xl" onClick={toggleMobileMenu}>
          ☰
        </button>
        <div className={`md:flex bg-white md:bg-transparent items-center gap-4 ${isMobileMenuOpen ? "block" : "hidden"} md:block absolute md:static top-20 right-4 md:right-auto  shadow-lg md:shadow-none rounded-lg p-4 md:p-0 z-50`}>  
              <div className=" mb-4 md:mb-0">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`btn ${isActive("/") ? "bg-slate-700 text-primary" : ""}`}>Home</Link>
              </div>
          {authUser && (
            <div className="flex flex-col md:flex-row gap-4">  
            
              <Link to="/news" onClick={() => setMobileMenuOpen(false)} className={`btn ${isActive("/news") ? "bg-slate-700 text-primary" : ""}`}>News</Link>
              <Link to="/Profile" onClick={() => setMobileMenuOpen(false)} className={`btn ${isActive("/Profile") ? "bg-slate-700 text-primary" : ""}`}>Profile</Link>
              <button className="btn glass" onClick={() => { logout(); setMobileMenuOpen(false); navigate("/login") }}>
                <LogOut className="size-5" />
                <span className="hidden sm:inline"
                 onClick={()=>navigate("/")}
                >Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;

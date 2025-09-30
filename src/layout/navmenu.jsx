import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "../lib/utils";
import logo from "../assets/Standalone_Logo.png";
import { Button } from "../components/ui/button";


export default function NavMenu({
  className
}) {
  const [active, setActive] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div
      className={cn("fixed top-0 inset-x-0 justify-center flex flex-row max-w-full mx-auto z-50", className)}>
      <Menu>
        <div className="flex flex-row items-center gap-40 w-full justify-between px-4 md:px-[200px] py-0">

          <div className="flex items-center gap-0 justify-center">
            <img src={logo} alt="Logo" width={60} height={60} />
            <div className="flex justify-center flex-col items-start">
              <span className="text-xl font-bold">EduTrack</span>
              <span className="text-xs text-teal-800 font-semibold tracking-widest">AI SOFTWARE</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-20">
            <HoveredLink href="#features" setActive={setActive} active={active} item="Features">
              <span className="text-black">
                Features
              </span>
            </HoveredLink> 

            <HoveredLink href="#pricing" setActive={setActive} active={active} item="Pricing">
              <span className="text-black">
                Pricing
              </span>
            </HoveredLink> 

            <HoveredLink href="#about" setActive={setActive} active={active} item="About">
              <span className="text-black">
                About Us
              </span>
            </HoveredLink> 

            <HoveredLink href="#learn" setActive={setActive} active={active} item="Learn More">
              <span className="text-black">
                Learn More
              </span>
            </HoveredLink>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <HoveredLink href="#login" setActive={setActive} active={active} item="Login">
              <span className="text-white bg-teal-800 hover:bg-teal-800 hover:text-white py-2 px-3 rounded-lg">
                Login
              </span>
            </HoveredLink> 
            <HoveredLink href="#signup" setActive={setActive} active={active} item="Sign Up">
              <span className="text-teal-800 border border-teal-800 hover:bg-teal-800 hover:text-white py-2 px-3 rounded-lg">
                Sign Up
              </span>
            </HoveredLink> 
          </div>
          
          {/* Mobile Menu Button */}
          <div className="w-fit">
          <button 
            className="md:hidden p-2  rounded-lg hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
              <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </div>
          </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="px-4 py-4 space-y-4">
            <div className="flex flex-col space-y-3">
              <HoveredLink href="#features" setActive={setActive} active={active} item="Features">
                <span className="text-black text-lg py-2 block">
                  Features
                </span>
              </HoveredLink> 

              <HoveredLink href="#pricing" setActive={setActive} active={active} item="Pricing">
                <span className="text-black text-lg py-2 block">
                  Pricing
                </span>
              </HoveredLink> 

              <HoveredLink href="#about" setActive={setActive} active={active} item="About">
                <span className="text-black text-lg py-2 block">
                  About Us
                </span>
              </HoveredLink> 

              <HoveredLink href="#learn" setActive={setActive} active={active} item="Learn More">
                <span className="text-black text-lg py-2 block">
                  Learn More
                </span>
              </HoveredLink>
            </div>
            
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
              <HoveredLink href="#login" setActive={setActive} active={active} item="Login">
                <span className="text-white bg-teal-800 hover:bg-teal-800 hover:text-white py-3 px-4 rounded-lg text-center block">
                  Login
                </span>
              </HoveredLink> 
              <HoveredLink href="#signup" setActive={setActive} active={active} item="Sign Up">
                <span className="text-teal-800 border border-teal-800 hover:bg-teal-800 hover:text-white py-3 px-4 rounded-lg text-center block">
                  Sign Up
                </span>
              </HoveredLink> 
            </div>
          </div>
        </div>
      </Menu>
    </div>
  );
}

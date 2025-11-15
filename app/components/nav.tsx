"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from "../../public/Frame 3232950.svg";
import Link from "next/link";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleWorkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-[#FFFFFF66] backdrop-blur-md sticky top-6 md:top-8 z-[60] flex justify-between items-center gap-2 sm:gap-4 rounded-full py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 shadow-md border border-white/20 lg:mx-auto max-w-[1440px]">
        <div className="flex flex-row items-center gap-2 sm:gap-3">
          <Link href="/">
            {" "}
            <Image
              src={logo}
              alt="logo"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-auto md:h-auto"
            />
          </Link>
          <div className="flex flex-col">
            <span className="text-[#1A1A1A] font-extrabold font-bricolage text-xs sm:text-sm md:text-base">
              SEGUN
            </span>
            <span className="text-[#1A1A1A] -mt-1 font-extrabold font-bricolage text-xs sm:text-sm md:text-base">
              ARIBIDO
            </span>
          </div>
        </div>
        {/* Desktop Navigation */}
        <ul className="hidden lg:flex text-[#505050] items-center gap-6 xl:gap-9">
          <Link
            href="/"
            className="cursor-pointer text-base xl:text-[18px] hover:text-[#1A1A1A] transition-colors"
          >
            Home
          </Link>
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              const workSection = document.getElementById("work");
              if (workSection) {
                workSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className="cursor-pointer text-base xl:text-[18px] hover:text-[#1A1A1A] transition-colors"
          >
            Work
          </a>
          <Link
            href="/about"
            className="cursor-pointer text-base xl:text-[18px] hover:text-[#1A1A1A] transition-colors"
          >
            About me
          </Link>
          <button className="text-base xl:text-[18px] border border-[#505050] py-2 xl:py-[13px] px-4 xl:px-6 rounded-[8px] hover:bg-[#505050] hover:text-white transition-colors cursor-pointer">
            Let&apos;s Work
          </button>
        </ul>
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-[#1A1A1A] p-2 transition-transform duration-300"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X
              size={24}
              className="text-[#1A1A1A] transition-all duration-300 rotate-0"
            />
          ) : (
            <Menu
              size={24}
              className="text-[#1A1A1A] transition-all duration-300 rotate-0"
            />
          )}
        </button>
      </nav>
      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 px-8 top-0 z-[55] bg-[#ffffff9f] backdrop-blur-md transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 visible translate-y-0 pointer-events-auto"
            : "opacity-0 invisible -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          <ul className="text-[#505050] flex flex-col items-center gap-8 w-full">
            <Link
              href="/"
              className={`cursor-pointer text-[18px] hover:text-[#1A1A1A] transition-all duration-300 w-full text-center py-2 border-b border-[#505050]/20 ${
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
              style={{
                transitionDelay: isMenuOpen ? "0.2s" : "0s",
              }}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <a
              href="#work"
              onClick={handleWorkClick}
              className={`cursor-pointer text-[18px] hover:text-[#1A1A1A] transition-all duration-300 w-full text-center py-2 border-b border-[#505050]/20 ${
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
              style={{
                transitionDelay: isMenuOpen ? "0.4s" : "0s",
              }}
            >
              Work
            </a>
            <Link
              href="/about"
              className={`cursor-pointer text-[18px] hover:text-[#1A1A1A] transition-all duration-300 w-full text-center py-2 border-b border-[#505050]/20 ${
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
              style={{
                transitionDelay: isMenuOpen ? "0.6s" : "0.2s",
              }}
              onClick={toggleMenu}
            >
              About me
            </Link>
            <button
              className={`text-[18px] border border-[#505050] py-[13px] px-6 rounded-[8px] hover:bg-[#505050] hover:text-white transition-all duration-300 w-full max-w-[200px] cursor-pointer ${
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
              style={{
                transitionDelay: isMenuOpen ? "0.8s" : "0.3s",
              }}
              onClick={toggleMenu}
            >
              Let&apos;s Work
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}

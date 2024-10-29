"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "fixed bg-white shadow-lg" : "bg-transparent"
      } text-black w-full z-50 transition-all duration-300 ease-in-out`}
    >
      <div className="container mx-auto flex justify-between items-center p-1 md:px-1">
        <Link href="/">
          <Image
            src="/images/smkn2kra-logo.png"
            alt="logo"
            width={350}
            height={300}
          />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden block text-black focus:outline-none p-3"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <div
          className={`md:flex items-center md:space-x-7 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link
            href="#about"
            className="block py-2 text-lg hover:text-blue-700"
            onMouseEnter={() => setDropdownOpen(false)} // Menutup dropdown saat di-hover
          >
            Tentang Kami
          </Link>
          <Link
            href="#programs"
            className="block py-2 text-lg hover:text-blue-700"
            onMouseEnter={() => setDropdownOpen(false)} // Menutup dropdown saat di-hover
          >
            Program
          </Link>

          {/* Dropdown Menu */}
          <div className="relative" onMouseEnter={() => setDropdownOpen(true)}>
            <button className="block py-2 text-lg hover:text-blue-700">
              Lainnya
            </button>
            {dropdownOpen && (
              <div
                className="absolute right--20 mt-2 w-52 bg-white border border-gray-200 shadow-lg  z-50"
                onMouseLeave={() => setDropdownOpen(false)} // Tutup dropdown saat kursor keluar dari elemen ini
              >
                <Link
                  href="#item1"
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  Item 1
                </Link>
                <Link
                  href="#item2"
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  Item 2
                </Link>
                <Link
                  href="#item3"
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  Item 3
                </Link>
              </div>
            )}
          </div>

          <Link
            href="#contact"
            className="block py-2 text-lg hover:text-blue-700"
            onMouseEnter={() => setDropdownOpen(false)} // Menutup dropdown saat di-hover
          >
            Hubungi Kami
          </Link>
          <Link
            href="#register"
            className="block py-2 px-4 text-lg bg-blue text-blue-700 rounded-md hover:bg-blue-200"
            onMouseEnter={() => setDropdownOpen(false)} // Menutup dropdown saat di-hover
          >
            Daftar
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

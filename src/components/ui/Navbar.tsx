'use client';
import { useState } from 'react';
import Link from 'next/link';
import Heading from '@/components/ui/Heading';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className="flex items-center justify-between flex-wrap p-3 navbar mt-3 sticky top-0 z-20 bg-base-200 mb-1 shadow-2xl bg-opacity-90"
      style={{ fontFamily: "'Poppins', sans-serif" }}
      data-theme="black"
    >
      <div className="flex items-center flex-shrink-0 text-2xl mr-6">
        <Link href="/" onClick={closeNavbar}>
          <Heading title="r w" iconClass="fas fa-camera-retro" />
        </Link>
      </div>
      <div className="block lg:hidden">{/* Hamburger menu button logic */}</div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-full lg:flex lg:items-center lg:w-auto lg:justify-end`}
      >
        <div className="text-sm lg:flex-grow">
          <Link href="/about" onClick={closeNavbar}>
            <span className="block mt-4 lg:inline-block lg:mt-0 text-strokeLight text-xl hover:text-button hover:underline mr-4 cursor-pointer">
              <i className="fas fa-info-circle mr-2"></i>About
            </span>
          </Link>
          <Link href="/gallery" onClick={closeNavbar}>
            <span className="block mt-4 lg:inline-block lg:mt-0 text-strokeLight text-xl hover:text-button hover:underline mr-4 cursor-pointer">
              <i className="fas fa-images mr-2"></i>Photography
            </span>
          </Link>
          <Link href="/ai" onClick={closeNavbar}>
            <span className="block mt-4 lg:inline-block lg:mt-0 text-strokeLight text-xl hover:text-button hover:underline mr-4 cursor-pointer">
              <i className="fas fa-robot mr-2"></i>AI
            </span>
          </Link>
          <Link href="/feedback" onClick={closeNavbar}>
            <span className="block mt-4 lg:inline-block lg:mt-0 text-strokeLight text-xl hover:text-button hover:underline mr-4 cursor-pointer">
              <i className="fas fa-comments mr-2"></i>Feedback
            </span>
          </Link>
          <Link href="/contact" onClick={closeNavbar}>
            <span className="block mt-4 lg:inline-block lg:mt-0 text-strokeLight text-xl hover:text-button hover:underline cursor-pointer">
              <i className="fas fa-envelope mr-2"></i>Contact
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

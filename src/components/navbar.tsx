'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

  // Function to hide nav on resize
  const handleResize = () => {
    if (window.innerWidth > 767) {
      console.log('.av', nav, window.innerWidth, window.innerWidth > 767)
      setNav(false);
    }
  };

  // Set up event listener for window resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'features',
    },
    {
      id: 2,
      link: 'edge network',
    },
    {
      id: 3,
      link: 'pricing',
    }
  ];

  return (
    <div className="flex justify-between items-center w-full h-11 px-4 text-white fixed nav bg-[#313131]">

      <div>
        <Link href="http://localhost:3000">
            <h1 className="text-4xl font-normal">SuperNet</h1>
        </Link>
      </div>

      {/* Map links item, loop through and create li for each */}
      {/* Will be shown if screen width is high enough */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-light text-slate-50 text-sm hover:text-[#02B159] duration-200 link-underline"
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>

      {/* Will be shown if screen width is low enough */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Shown when hamburger icon is clicked */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;

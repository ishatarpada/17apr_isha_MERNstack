import React, { useState } from 'react';
import { Link } from 'react-scroll';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[100px] flex justify-center items-center px-4 pt-4 text-gray-300 font-serif z-100'>
      {/* menu */}
      <ul className='hidden md:flex gap-x-8 border py-5 rounded-full bg-[#161f2d]'>
        <li className="hover:text-blue-500">
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-blue-500">
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-blue-500">
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-blue-500">
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="hover:text-blue-500">
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <i className="bi bi-list"></i> : <i className="bi bi-x-lg"></i>}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Linkedin <i className="bi bi-linkedin" style={{ fontSize: '30px' }}></i>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Github <i className="bi bi-github" style={{ fontSize: '30px' }}></i>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <i className="bi bi-envelope-fill" style={{ fontSize: '30px' }}></i>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Resume <i className="bi bi-person-lines-fill" style={{ fontSize: '30px' }}></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

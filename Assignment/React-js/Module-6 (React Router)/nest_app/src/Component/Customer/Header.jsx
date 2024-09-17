import { useState } from 'react';
import logo from '../../assets/Image/logo.svg'
import { Menu, MenuButton, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import category1 from '../../assets/Image/category-1.svg'
import category2 from '../../assets/Image/category-2.svg'
import category3 from '../../assets/Image/category-3.svg'
import category4 from '../../assets/Image/category-4.svg'
import category5 from '../../assets/Image/category-5.svg'
import category6 from '../../assets/Image/category-6.svg'
import category7 from '../../assets/Image/category-7.svg'
import category8 from '../../assets/Image/category-8.svg'
import category9 from '../../assets/Image/category-9.svg'
import category10 from '../../assets/Image/category-10.svg'

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    const drawer = document.getElementById('drawer-example');
    drawer.classList.toggle('translate-x-0');
  };

  const [isOpen7, setIsOpen7] = useState(false);

  const toggleDropdown7 = () => {
    setIsOpen7(!isOpen7);
  };
  return (
    <>
      <header className='screen-header'>
        {/* Top Navigation */}
        <nav className="bg-green-50 w-full py-2 header-1 shadow shadow-green-900">
          <div className="flex justify-center items-center mx-auto px-4 flex-wrap">
            <ul className="flex space-x-8 text-sm mx-2">
              <li><a href="#" className="text-black hover:underline">About Us</a></li>
              <li><a href="#" className="text-black hover:underline">My Account</a></li>
              <li><a href="#" className="text-black hover:underline">Wishlist</a></li>
              <li><a href="#" className="text-black hover:underline">Order Tracking</a></li>
            </ul>
            <div className="flex items-center space-x-6 mx-2">
              <marquee className="text-green-400" direction="up">
                100% Secure delivery without contacting the courier
              </marquee>
            </div>
            <div className="flex items-center space-x-6 mx-2">
              <ul className="flex space-x-8 text-sm items-center">
                <li><a href="#" className="text-black hover:underline">Need help? Call US: + 1800 900</a></li>
                <li>
                  <select className="bg-gray-50 border border-gray-300 text-sm rounded-lg p-2.5">
                    <option>English</option>
                    <option>French</option>
                    <option>German</option>
                    <option>Hindi</option>
                  </select>
                </li>
                <li>
                  <select className="bg-gray-50 border border-gray-300 text-sm rounded-lg p-2.5">
                    <option>USD</option>
                    <option>INR</option>
                    <option>GBP</option>
                    <option>EUR</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Middle Navigation */}
        <nav className="container-fluid header-2">
          <div className="flex justify-center items-center mx-auto p-4">
            <a href="https://flowbite.com" className="flex items-center space-x-3 mx-3">
              <img src={logo} className="h-8 w-16" alt="Logo" />
            </a>
            <form className="flex items-center border border-green-600 px-4 py-2 mx-3">
              <select className="font-bold text-sm w-36 py-1 px-2.5 border-r-2 border-slate-200 rounded-none">
                <option>All Categories</option>
                <option>Milks and Dairies</option>
                <option>Wines & Alcohol</option>
                <option>Clothing & Beauty</option>
                <option>Pet Foods & Toy</option>
                <option>Fast food</option>
                <option>Baking material</option>
                <option>Vegetables</option>
                <option>Fresh Seafood</option>
                <option>Noodles & Rice</option>
                <option>Ice cream</option>
              </select>
              <input type="text" placeholder="Search for items..." className="text-sm py-1 px-2.5" />
            </form>
            <form className="flex items-center shadow px-4 py-2 mx-2">
              <span className="text-xl pe-2">📍</span>
              <select className="font-bold text-green-600 text-sm w-36 py-1 px-2.5 rounded">
                <option>Your Location</option>
                <option>Nevada</option>
                <option>Indiana</option>
                <option>Hawaii</option>
                <option>Georgia</option>
                <option>Maryland</option>
                <option>Florida</option>
                <option>Alabama</option>
                <option>Alaska</option>
              </select>
            </form>
            <div className="flex items-center space-x-6 mx-3">
              <p className="flex items-center">
                <button type="button" className="relative text-2xl me-3 rounded-circle bg-green-100 pb-2 px-1">
                  <span className="sr-only">Notifications</span>
                  🛎
                  <span className="absolute w-6 h-6 text-xs font-bold text-white bg-green-500 border-2 border-white rounded-full -right-3 -top-3">20</span>
                </button>
                <span>Compare</span>
              </p>
              <p className="flex items-center">
                <button type="button" className="relative text-2xl me-3 rounded-circle bg-green-100 pb-2 px-1">
                  <span className="sr-only">Notifications</span>
                  ❤️
                  <span className="absolute w-6 h-6 text-xs font-bold text-white bg-green-500 border-2 border-white rounded-full -right-3 -top-3">20</span>
                </button>
                <span>Wishlist</span>
              </p>
              <p className="flex items-center">
                <button type="button" className="relative text-2xl me-3 rounded-circle bg-green-100 pb-2 px-1">
                  <span className="sr-only">Notifications</span>
                  🛒
                  <span className="absolute w-6 h-6 text-xs font-bold text-white bg-green-500 border-2 border-white rounded-full -right-3 -top-3">20</span>
                </button>
                <span>Cart</span>
              </p>
              <p className="flex items-center">
                <button type="button" className="relative text-2xl me-3 rounded-circle bg-green-100 pb-2 px-1">
                  <span className="sr-only">Notifications</span>
                  👤
                </button>
                <span>Account</span>
              </p>
            </div>
          </div>
        </nav>

        {/* Bottom Navigation */}
        <nav className="shadow header-3 shadow-green-900">
          <div className="px-10 py-3 mx-auto max-w-screen-2xl">
            <div className="flex items-center justify-between">
              {/* Dropdown menu for categories */}
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="inline-flex justify-center gap-x-1.5 rounded-md bg-green-500 px-3 py-3 text-base font-semibold text-white shadow-sm ring-1 ring-inset ring-white-300 hover:bg-green-400">
                    <i className="bi bi-grid"></i>
                    Browse All Categories
                    <ChevronDownIcon className="w-5 h-5 -mr-1 text-white" aria-hidden="true" />
                  </MenuButton>
                </div>

                <Transition
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems className="absolute -left-20 z-10 mt-2 w-[530px] text-sm origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border-green-300 border">
                    <div className="flex py-1 mx-auto">
                      <ul className='p-5'>
                        {/* Category list */}
                        <li className='flex items-center gap-3 p-2 font-medium rounded hover:shadow-lg hover:text-green-500 hover:border-green-500'>
                          <img src={category1} alt="category-1" className='h-8' />
                          <span className="text-nowrap">Milk and Dairies</span>
                        </li>
                        <li className='flex items-center gap-3 p-2 mt-3 font-medium rounded hover:shadow-lg hover:text-green-500 hover:border-green-500'>
                          <img src={category2} alt="category-2" className='h-8' />
                          <span className="text-nowrap">Clothing & Beauty</span>
                        </li>
                        <li className='flex items-center gap-3 p-2 mt-3 font-medium rounded hover:shadow-lg hover:text-green-500 hover:border-green-500'>
                          <img src={category3} alt="category-3" className='h-8' />
                          <span className="text-nowrap">Pet Foods & Toys</span>
                        </li>
                        <li className='flex items-center gap-3 p-2 mt-3 font-medium rounded hover:shadow-lg hover:text-green-500 hover:border-green-500'>
                          <img src={category4} alt="category-4" className='h-8' />
                          <span className="text-nowrap">Baking Material</span>
                        </li>
                        <li className='flex items-center gap-3 p-2 mt-3 font-medium rounded hover:shadow-lg hover:text-green-500 hover:border-green-500'>
                          <img src={category5} alt="category-5" className='h-8' />
                          <span className="text-nowrap">Fresh Fruit</span>
                        </li>
                      </ul>
                      <ul className='p-5'>
                        <li className='flex items-center gap-3 p-2 font-medium rounded hover:shadow-lg hover:text-green-500 hover:border-green-500'>
                          <img src={category6} alt="category-6" className='h-8' />
                          <span className="text-nowrap">Wines & Drinks</span>
                        </li>
                        <li className='flex items-center gap-3 p-2 mt-3 font-medium rounded hover:shadow-lg hover:text-green-500 hover:border-green-500'>
                          <img src={category7} alt="category-7" className='h-8' />
                          <span className="text-nowrap">Fresh Seafood</span>
                        </li>
                        <li className='flex items-center gap-3 p-2 mt-3 font-medium rounded hover:shadow-lg hover:text-green-500 hover:border-green-500'>
                          <img src={category8} alt="category-8" className='h-8' />
                          <span className="text-nowrap">Fast Food</span>
                        </li>
                        <li className='flex items-center gap-3 p-2 mt-3 font-medium rounded hover:shadow-lg hover:text-green-500 hover:border-green-500'>
                          <img src={category9} alt="category-9" className='h-8' />
                          <span className="text-nowrap">Vegetables</span>
                        </li>
                        <li className='flex items-center gap-3 p-2 mt-3 font-medium rounded hover:shadow-lg hover:text-green-500 hover:border-green-500'>
                          <img src={category10} alt="category-10" className='h-8' />
                          <span className="text-nowrap">Bread and Juice</span>
                        </li>
                      </ul>
                    </div>
                  </MenuItems>
                </Transition>
              </Menu>

              {/* Main navigation links */}
              <ul className="flex flex-row mt-0 space-x-8 text-xl font-medium rtl:space-x-reverse">
                <li>
                  <a href="/home" className="text-gray-900 hover:text-green-500 "><i className="text-green-500 bi bi-fire"></i> Deals</a>
                </li>
                <li className="nav-item dropdown-center dropdown">
                  <a href="/home" className="nav-link text-gray-900 hover:text-green-500 focus:text-green-500" aria-expanded="false">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-900 hover:text-green-500 focus:text-green-500 ">About</a>
                </li>
                <li className="nav-item dropdown-center dropdown">
                  <a href="/vendor" className="nav-link text-gray-900 hover:text-green-500 focus:text-green-500" aria-expanded="false">
                    Vendor
                  </a>
                </li>
                <li>
                  <a href="/menu" className="text-gray-900 hover:text-green-500 focus:text-green-500 ">Menu</a>
                </li>
                <li className="nav-item dropdown-center dropdown">
                  <a href="/shop" className="nav-link text-gray-900 hover:text-green-500 focus:text-green-500" aria-expanded="false">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="/blogs" className="text-gray-900 hover:text-green-500 focus:text-green-500">Blogs</a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-900 hover:text-green-500 focus:text-green-500">Contact</a>
                </li>
              </ul>

              {/* Support contact info */}
              <div className='flex flex-col'>
                <a href="#" className='text-2xl font-bold text-green-500'>
                  <i className="bi bi-headphones text-black text-3xl"></i> 1900-8888
                </a>
                <span>24/7 Support Center</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Responsive header */}
        <div className='header-4'>
          <nav className="border-gray-200 bg-gray-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={logo} className="h-8" alt="Flowbite Logo" />
              </a>
              <div className="flex items-center space-x-6 mx-3">

                <p className="flex items-center">
                  <button type="button" className="relative text-2xl me-2 rounded-circle bg-green-100 py-1 px-2">
                    <span className="sr-only">Notifications</span>
                    <i className="bi bi-bell"></i>
                    <span className="absolute w-6 h-6 text-xs font-bold text-white bg-green-500 border-2 border-white rounded-full -right-3 -top-3">20</span>
                  </button>
                </p>
                <p className="flex items-center">
                  <button type="button" className="relative text-2xl me-2 rounded-circle bg-green-100 py-1 px-2">
                    <span className="sr-only">Cart</span>
                    <i className="bi bi-heart"></i>
                    <span className="absolute w-6 h-6 text-xs font-bold text-white bg-green-500 border-2 border-white rounded-full -right-3 -top-3">20</span>
                  </button>
                </p>
                <button data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600" aria-controls="navbar-hamburger" aria-expanded="false" onClick={toggleDrawer}>
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
                  </svg>
                </button>
              </div>
            </div>
          </nav>

          <div id="drawer-example"
            className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-96 dark:bg-gray-800 ${drawerOpen ? 'translate-x-0' : '-translate-x-full'
              }`}
            tabIndex="-1"
            aria-labelledby="drawer-label">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={logo} className="h-8" alt="Flowbite Logo" />
            </a>
            <button
              type="button"
              data-drawer-hide="drawer-example" // Target the ID of the drawer to hide
              aria-controls="drawer-example"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-black"
              onClick={toggleDrawer}
            >
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close menu</span>
            </button>


            <div className="py-4 overflow-y-auto">

              <form className="max-w-md mx-auto">
                <div className="relative flex items-center justify-between">
                  <input type="search" id="default-search" className="block w-full px-4 py-2 ps-10 text-md text-black border border-green-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 fw-medium" placeholder="Search For Items" required />
                  <div className="absolute inset-y-0 end-0 flex items-center ps-3 pointer-events-none me-3">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                </div>
              </form>


              <button
                id="dropdownDefaultButton"
                data="dropdown"
                className="text-black focus:text-green-400 hover:text-green-400 font-bold mt-5 pb-3 mx-4 w-64 flex justify-between items-center"
                type="button"
              >
                <p>Home</p>
              </button>

              <hr></hr>
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-black focus:text-green-400 hover:text-green-400 font-bold mt-3 pb-3 mx-4 w-64 flex justify-between items-center"
                type="button"
              >
                <p>Shop</p>
              </button>

              <hr></hr>

              <a
                href='/vendor'
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-black focus:text-green-400 hover:text-green-400 font-bold mt-3 pb-3 mx-4 w-64 flex justify-between items-center"
                type="button"
              >
                <p>Vendor</p>
              </a>
              <hr></hr>

              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-black focus:text-green-400 hover:text-green-400 font-bold mt-3 pb-3 mx-4 w-64 flex justify-between items-center"
                type="button"
              >
                <p>Mega Menu</p>
              </button>
              <hr></hr>
              <a
                href='/blogs'
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-black focus:text-green-400 hover:text-green-400 font-bold mt-3 pb-3 mx-4 w-64 flex justify-between items-center"
                type="button"
              >
                <p>Blog</p>
              </a>

              <hr></hr>
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-black focus:text-green-400 hover:text-green-400 font-bold mt-3 pb-3 mx-4 w-64 flex justify-between items-center"
                type="button"
              >
                <p>Pages</p>
              </button>

              <hr></hr>
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-black focus:text-green-400 hover:text-green-400 font-bold mt-3 pb-3 mx-4 w-64 flex justify-between items-center"
                type="button"
                onClick={toggleDropdown7} // Add onClick event to toggle the dropdown
              >
                <p>Languages</p>
                <svg
                  className={`w-2.5 h-2.5 ms-3 transform ${isOpen7 ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" d="m1 1 4 4 4-4" />
                </svg>
              </button>

              <div
                id="dropdown"
                className={`z-10 ${isOpen7 ? '' : 'hidden'} rounded-lg shadow w-64 mx-auto shadow-none`}
              >
                <ul className="py-2 text-sm" aria-labelledby="dropdownDefaultButton">
                  <li>
                    <a href="#" className="block px-4 py-2 text-secondary">English</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-secondary">French</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-secondary">German</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-secondary">Spanish</a>
                  </li>
                </ul>
              </div>

              <ul className="list-group border my-5">
                <li className="list-group-item font-semibold border-0"><i className="bi bi-geo-alt text-green-500 me-3 font-bold"></i>our Location</li>
                <li className="list-group-item font-semibold border-0"><i className="bi bi-person text-green-500 me-3 font-bold"></i>Login / Sign-up</li>
                <li className="list-group-item font-semibold border-0"><i className="bi bi-telephone text-green-500 me-3 font-bold"></i>(+01)-2345-6789</li>
              </ul>

              <h2 className='mt-4 text-gray-500 text-xl font-bold'>Follow us</h2>
              <ul className='d-flex rounded p-3'>
                <li className="bi bi-facebook bg-green-500 me-3 text-xl rounded-circle px-2 py-1 text-gray-50"></li>
                <li className="bi bi-twitter bg-green-500 me-3 text-xl rounded-circle px-2 py-1 text-gray-50"></li>
                <li className="bi bi-instagram bg-green-500 me-3 text-xl rounded-circle px-2 py-1 text-gray-50"></li>
                <li className="bi bi-pinterest bg-green-500 me-3 text-xl rounded-circle px-2 py-1 text-gray-50"></li>
                <li className="bi bi-youtube bg-green-500 me-3 text-xl rounded-circle px-2 py-1 text-gray-50"></li>
              </ul>

              <footer className="bg-white rounded-lg m-4">
                <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
                  <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                  </span>
                </div>
              </footer>

            </div>
          </div>
        </div>

      </header>
    </>
  )
}

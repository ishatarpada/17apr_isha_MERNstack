import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FcBarChart,
  FcShipped,
  FcFile ,
  FcFolder,
  FcDocument,
  FcShop,
  FcManager,
  FcPlanner ,
  FcPackage,
  FcStatistics,
  FcAdvertising,
  FcCalendar,
  FcSearch,
  FcSettings
} from "react-icons/fc";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import control from "../../assets/Image/control.png";
import logo from "../../assets/Image/logo.svg";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(null); // State to manage dropdown

  const Menus = [
    { title: "Dashboard", icon: <FcBarChart />, path: "/dashboard" },
    { title: "Orders", icon: <FcShipped />, path: "/orders", gap: true },
    {
      title: "Categories",
      icon: <FcFolder />,
      subMenu: [
        { title: "Manage Categories", path: "/category" },
        { title: "Add Category", path: "/add-category" },
      ],
    },
    {
      title: "SubCategories",
      icon: <FcFile />,
      subMenu: [
        { title: "Manage SubCategories", path: "/subcategory" },
        { title: "Add SubCategory", path: "/add-sub-category" },
      ],
    },
    {
      title: "Products",
      icon: <FcShop />,
      subMenu: [
        { title: "Manage Products", path: "/manage-Products" },
        { title: "Add Products", path: "/add-Products" },
      ],
    },
    {
      title: "Blog",
      icon: <FcPlanner />,
      subMenu: [
        { title: "Manage blog", path: "/manage-blog" },
        { title: "Add blog", path: "/add-blog" },
      ],
    },
    { title: "Customers", icon: <FcManager />, path: "/customers", gap: true },
    { title: "Inventory", icon: <FcPackage />, path: "/inventory" },
    { title: "Reports", icon: <FcDocument />, path: "/reports" },
    { title: "Marketing", icon: <FcAdvertising />, path: "/marketing" },
    { title: "Schedule", icon: <FcCalendar />, path: "/schedule", gap: true },
    { title: "Search", icon: <FcSearch />, path: "/search" },
    { title: "Analytics", icon: <FcStatistics />, path: "/analytics" },
    { title: "Settings", icon: <FcSettings />, path: "/settings", gap: true },
  ];

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <div className="flex">
      <div className={` ${open ? "w-64" : "w-20"} bg-green-50 h-100vh py-5 px-2 pt-8 relative duration-300`}>
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-green-900 border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />

        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
          />
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <div key={index}>
              <li
                className={`flex rounded-md p-2 cursor-pointer hover:bg-green-100 text-green-700 text-xl items-center gap-x-4 w-auto
                  ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} ${!open && "justify-center"}`}
                onClick={() => Menu.subMenu && toggleDropdown(index)}
              >
                <span className={`${!open && "show"} ${!open && "text-3xl"}`}>{Menu.icon}</span>
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  <Link to={Menu.path}>{Menu.title}</Link></span>
                {Menu.subMenu && (
                  <span className={`${!open && "hidden"} d-flex justify-end items-center ml-auto`}>
                    {dropdownOpen === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                )}
              </li>
              {Menu.subMenu && dropdownOpen === index && open && (
                <ul className="pl-12">
                  {Menu.subMenu.map((sub, subIndex) => (
                    <li
                      key={subIndex}
                      className="flex rounded-md py-2 px-1 cursor-pointer hover:bg-green-200 text-green-600 text-lg"
                    >
                      <Link to={sub.path}>{sub.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

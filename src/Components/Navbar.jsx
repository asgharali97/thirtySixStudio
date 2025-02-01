import React, { useState } from "react";
import useTheme from "../context/ThemeContext.js";

const navItem = ["What we do", "Who we are", "How we give back", "Talk to us"];
const Navbar = ({ showCanavas }) => {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const [isMenu, setIsMenu] = useState(false);
  const handleTheme = () => {
    if (themeMode === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };
  return (
    <>
      <div className="w-full px-[10px] h-12 relative">
        <nav className="w-full items-center flex justify-between  py-2">
          <div className="brand font-md text-md w-[25%] lg:w-[20%] px-2">
            Thirtysixstudio
          </div>
          <div className="absolute left-36 lg:relative lg:left-0 w-[25%] lg:w-[16%] px-2">
            <button
              className={`toggle-btn relative border border-[#b9b9b933]      ${
                showCanavas && "border-[#0000001b]"
              } flex items-center justify-between px-1 w-[80px] h-[30px] rounded-[30px]`}
            >
              <div
                className="relative z-1 flex justify-center items-center w-[30px]"
                onClick={handleTheme}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className={`${
                    showCanavas === true ? "fill-[#FD2C2A]" : "fill-[#FAFAFA]"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.54651 0.546321C8.54651 0.244596 8.30191 0 8.00018 0C7.69845 0 7.45385 0.244596 7.45385 0.546321V1.6559C7.45385 1.95763 7.69845 2.20222 8.00018 2.20222C8.30191 2.20222 8.54651 1.95763 8.54651 1.6559V0.546321Z"
                    fill=""
                  ></path>
                  <path
                    d="M2.34325 12.8843C2.12989 13.0977 2.12989 13.4436 2.34325 13.6569C2.55661 13.8703 2.90252 13.8703 3.11588 13.6569L3.90049 12.8723C4.11384 12.659 4.11384 12.3131 3.90049 12.0997C3.68713 11.8864 3.34121 11.8864 3.12786 12.0997L2.34325 12.8843Z"
                    fill=""
                  ></path>
                  <path
                    d="M8.00018 13.7978C8.30191 13.7978 8.54651 14.0424 8.54651 14.3441V15.4537C8.54651 15.7554 8.30191 16 8.00018 16C7.69845 16 7.45385 15.7554 7.45385 15.4537V14.3441C7.45385 14.0424 7.69845 13.7978 8.00018 13.7978Z"
                    fill=""
                  ></path>
                  <path
                    d="M12.0996 3.12778C11.8863 3.34113 11.8863 3.68704 12.0996 3.90039C12.313 4.11375 12.6589 4.11375 12.8723 3.90039L13.6569 3.1158C13.8702 2.90245 13.8702 2.55654 13.6569 2.34319C13.4435 2.12984 13.0976 2.12983 12.8843 2.34319L12.0996 3.12778Z"
                    fill=""
                  ></path>
                  <path
                    d="M13.7977 8C13.7977 7.69828 14.0423 7.45368 14.3441 7.45368H15.4537C15.7554 7.45368 16 7.69828 16 8C16 8.30173 15.7554 8.54632 15.4537 8.54632H14.3441C14.0423 8.54632 13.7977 8.30173 13.7977 8Z"
                    fill=""
                  ></path>
                  <path
                    d="M12.8723 12.0997C12.6589 11.8863 12.313 11.8863 12.0996 12.0997C11.8863 12.313 11.8863 12.6589 12.0996 12.8723L12.8843 13.6569C13.0976 13.8702 13.4435 13.8702 13.6569 13.6569C13.8702 13.4435 13.8702 13.0976 13.6569 12.8843L12.8723 12.0997Z"
                    fill=""
                  ></path>
                  <path
                    d="M0 8C0 7.69828 0.244601 7.45368 0.546332 7.45368H1.65594C1.95767 7.45368 2.20227 7.69828 2.20227 8C2.20227 8.30172 1.95767 8.54632 1.65594 8.54632H0.546332C0.244601 8.54632 0 8.30172 0 8Z"
                    fill=""
                  ></path>
                  <path
                    d="M3.11582 2.34314C2.90247 2.12979 2.55655 2.12979 2.34319 2.34314C2.12984 2.55649 2.12984 2.90241 2.34319 3.11576L3.1278 3.90035C3.34116 4.1137 3.68707 4.1137 3.90043 3.90035C4.11379 3.687 4.11379 3.34109 3.90043 3.12774L3.11582 2.34314Z"
                    fill=""
                  ></path>
                  <path
                    d="M4.90954 4.90944C6.61639 3.20263 9.38374 3.20263 11.0906 4.90944C12.7974 6.61625 12.7974 9.38355 11.0906 11.0904C9.38374 12.7972 6.61639 12.7972 4.90954 11.0904C3.2027 9.38355 3.2027 6.61625 4.90954 4.90944Z"
                    fill=""
                  ></path>
                </svg>
              </div>
              <div
                className="relative z-1 flex justify-center items-center w-[32px]"
                onClick={handleTheme}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.25233 0.295266C4.28498 0.216599 4.26732 0.125621 4.20791 0.0646159C4.14905 0.00360938 4.05861 -0.0161909 3.97887 0.0137774C1.64933 0.897304 0 3.1535 0 5.79235C0 9.21839 2.78177 12 6.2077 12C8.84603 12 11.1023 10.3507 11.9863 8.02117C12.0163 7.94143 11.996 7.85099 11.9355 7.79212C11.8745 7.73272 11.7835 7.71506 11.7048 7.7477C11.0659 8.011 10.3654 8.14693 9.63327 8.14693C6.44325 8.14693 3.85355 5.5574 3.85355 2.36726C3.85355 1.63517 3.98948 0.934675 4.25278 0.295716L4.25233 0.295266Z"
                    fill="black"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
          <div className="hidden lg:flex items-center">
            {navItem.map((item, index) => (
              <div
                key={index}
                className="nav-item text-[15px] leading-[15px] font-md mx-4 cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <div className="mene cursor-pointer mx-1 lg:hidden">
              <span onClick={handleMenu}>Menu</span>
            </div>
            <div className="w-[8.3%] px-4">
              <button className="block cursor-pointer ml-auto bg-transparent border-none relative">
                <svg
                  class="on"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.1"
                    cx="15"
                    cy="15"
                    r="14.5"
                    className="stroke-black dark:stroke-[#FAFAFA]"
                  ></circle>
                  <path
                    d="M11.9091 9V21M9 13.3636V16.6364M15 11.9091V18.0909M18.0909 10.4545V19.5455M21 13.3636V16.6364"
                    className="stroke-black dark:stroke-[#FAFAFA]"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <div
          className={`h-[0.8px] w-full ${
            showCanavas ? "bg-[#0000001b]" : "bg-[#B9B9BA33]"
          } 
      `}
        ></div>
        {isMenu && (
          <div className="menu w-full h-screen bg-white text-black dark:bg-black dark:text-white fixed top-0 left-0 z-50">
            <button
              className={`absolute right-0 mr-8 mt-6 border border-[#b9b9b933] ${
                showCanavas && "border-[#0000001b]"
              } py-1 px-3 rounded-full font-md text-md`}
              onClick={handleMenu}
            >
              X
            </button>
            <ul className="flex flex-col justify-start my-20 ml-20">
              {navItem.map((item, index) => (
                <div
                  key={index}
                  className="nav-item text-2xl font-md my-2 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
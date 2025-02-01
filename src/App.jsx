import { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext.js";
import Navbar from "./Components/Navbar.jsx";
import AnimatedCircle from './Components/AnimatedCircle';
import LocomotiveScroll from "locomotive-scroll";
import Canavas from "./Components/Canavas";
import data from "./data.js";
import gsap from "gsap";

function App() {
  const headingRef = useRef(null);
  const growingRef = useRef(null);
  const [showCanavas, setShowCanavas] = useState(false);
  const [themeMode, setThemeMode] = useState("light");

  
  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    if (showCanavas) {
      setShowCanavas(false);
      gsap.to("body", {
        color: "#000",
        backgroundColor: "#fffafa",
        duration: 1.2,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set("body", { clearProps: "all" });
        },
      });
      gsap.set(growingRef.current, { scale: 0, clearProps: "all" });
    }
    setThemeMode("dark");
  };

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
    // cursor
    // const screen = document.querySelector('.screen');
    const cursor = document.querySelector(".curosr");

    window.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "circ.inOut",
      });
    });
  }, [themeMode]);

  useEffect(() => {
    const handleClick = (e) => {
      setShowCanavas((prevCanavas) => {
        if (!prevCanavas) {
          setThemeMode("light");
          gsap.set(growingRef.current, {
            x: e.clientX,
            y: e.clientY,
          });
          gsap.to("body", {
            color: "#000",
            backgroundColor: "#fd2c2a",
            duration: 1.2,
            ease: "power2.inOut",
          });
          gsap.to(growingRef.current, {
            scale: 1000,
            duration: 1,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.set(growingRef.current, {
                scale: 0,
                clearProps: "all",
              });
            },
          });
        } else {
          gsap.to("body", {
            color: "#000",
            backgroundColor: "#fffafa",
            duration: 1.2,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.set("body", { clearProps: "all" });
            },
          });
        }
        return !prevCanavas;
      });
    };
    const heading = headingRef.current;
    heading.addEventListener("click", handleClick);
    return () => heading.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className="screen">
          <div
            className={`curosr py-2 px-2 rounded-full ${
              showCanavas ? "bg-[#fcfcfc]" : "bg-[#fd2c2a]"
            } fixed z-50`}
          ></div>
        </div>
        <span
          ref={growingRef}
          className="growing fixed rounded-full block top-[-20px] left-[-20px] w-5 h-5 z-50"
        ></span>
        <div className="w-full min-h-screen relative dark:text-white">
          {showCanavas &&
            data[0].map((canvasDets, index) => (
              <div key={index}>
                <Canavas detials={canvasDets} />
              </div>
            ))}
          <div className="relative w-full h-screen">
            <Navbar showCanavas={showCanavas} />
            <div className="flex flex-col lg:flex-row justify-center lg:justify-normal items-center items-normal pt-8">
              <div className="w-[60%] lg:w-[25%] ml-0 lg:ml-[25%]  mb-0 lg:mb-[15%]">
                <div className="head w-full sm:w-[60vw] md:w-[50vw]  lg:w-[30vw] xl:w-[25vw] px-4 sm:px-0 p-2">
                  <h2 className="text-2xl md:text-4xl font-md mb-[30px]">
                    At Thirtysixstudio, we build immersive digital experiences
                    for brands with a purpose.
                  </h2>
                  <p className="text-md leading-[18px]">
                    We’re a boutique production studio focused on design,
                    motion, and creative technology, constantly reimagining what
                    digital craft can do for present-time ads and campaigns.
                  </p>
                  <p className="text-lg mt-7">scroll</p>
                </div>
              </div>
              <div className="lg:relative flex lg:block justify-center items-center lg:ml-[14%] px-4 w-full lg:w-[25%]">
                <AnimatedCircle/>
              </div>
            </div>
            <div className="w-full absolute left-0 p-1 mt-[12rem] lg:mt-12">
              <h3
                className="text-[16vw] flex flex-wrap font-normal tracking-tight leading-none"
                ref={headingRef}
              >
                Thirtysixstudio
              </h3>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
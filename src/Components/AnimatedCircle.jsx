import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const AnimatedCircle = () => {
    const text = "THIRTYSIXSTUDIO — FOR ALL THINGS DIGITAL PRODUCTION — ";
    const radius = 48; 
    const [charWidth, setCharWidth] = useState(0);
    const spanRefs = useRef([]);
    const textRef = useRef(null);

    useEffect(() => {
    if (spanRefs.current.length > 0) {
      setCharWidth(spanRefs.current[0].offsetWidth);
    }

  gsap.to(textRef.current, {
    rotation: 360,
    duration: 15,
    repeat: -1,
    ease: "linear",
  });
}, []);
    useEffect(() => {
        if (spanRefs.current.length > 0) {
          setCharWidth(spanRefs.current[0].offsetWidth);
        }
    
      gsap.to(textRef.current, {
        rotation: 360,
        duration: 15,
        repeat: -1,
        ease: "linear",
      });
    }, []);
  return (
    <>
      <div className="circle-text relative mt-24 w-[11.5rem] " ref={textRef}>
        <p>
          <div className="relative h-[11rem]">
            {text.split("").map((char, index) => {
              const angle = index * (360 / text.length);
              return (
                <span
                  key={index}
                  ref={(el) => (spanRefs.current[index] = el)}
                  style={{
                    position: "absolute",
                    left: "50%",
                    bottom: "63%",
                    transform: `
                              translateX(-${charWidth / 2}px) 
                              rotate(${angle}deg) 
                              translateY(-${radius}px)
                              scale(1.1)`,
                    transformOrigin: `center ${radius}px`,
                  }}
                  className="char"
                >
                  {char}
                </span>
              );
            })}
          </div>
        </p>
      </div>
    </>
  );
};

export default AnimatedCircle;
import React, { useEffect, useState } from "react";

const App = () => {
  const [displayText, setDisplayText] = useState("");
  const [backgroundWidth, setBackgroundWidth] = useState("100%");
  const [backgroundHeight, setBackgroundHeight] = useState("100%");
  const [backgroundColor, setBackgroundColor] = useState("#1d428a");
  const [showDiv, setShowDiv] = useState(false);
  const [divSize, setDivSize] = useState({ width: "40px", height: "40px" });
  const [showImage, setShowImage] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < 20) {
        setDisplayText("WE");
        setBackgroundWidth("100%");
        setBackgroundHeight("100%");
        setBackgroundColor("#1d428a");
      } else if (scrollPosition >= 20 && scrollPosition <= 250) {
        setDisplayText("ARE");
        setBackgroundWidth("60%");
        setBackgroundHeight("100%");
        setBackgroundColor("#1d428a");
      } else if (scrollPosition > 250 && scrollPosition <= 350) {
        setDisplayText("INCUWISE");
        setBackgroundWidth("60%");
        setBackgroundHeight("60%");
        setBackgroundColor("#1d428a");
      } else if (scrollPosition > 350 && scrollPosition <= 420) {
        setDisplayText("");
        setBackgroundWidth("2vw");
        setBackgroundHeight("2vh");
       
      // } else {
      //   setDisplayText("");
      //   setBackgroundWidth("0%");
      //   setBackgroundHeight("0%");
       
        
      }
      if (scrollPosition > 820  ) {
        setShowDiv(true);
        const newWidth = (scrollPosition - 820) * 2.9;
        const newHeight = (scrollPosition - 820) * 2.9;
        setDivSize({ width: `${newWidth}px`, height: `${newHeight}px` });
      } else {
        setShowDiv(false);
        setDivSize({ width: "40px", height: "40px" });
      }
  
      if (scrollPosition > 990 ) {
        setShowImage(true);
      } else {
        setShowImage(false);
      }
      
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="nav-menu">
          <img
            className="nav-logo"
            src="incuwise-logo-final-11@2x.png"
            alt=""
          />
          <div className="nav-menu-items">Contact</div>
        </div>
        <div
          className="hero-primary"
          style={{
            width: backgroundWidth,
            height: backgroundHeight,
            inset: "0",
            background: backgroundColor,
           
            transition: "background-color .3s, width 0.3s, height 0.3s",
          }}
        >
          <div className="hero-content">
            <span className="hero-content-text">{displayText}</span>
          </div>
        </div>
        {showDiv && (
          <div
            className="additional-div"
            style={{
              width: divSize.width,
              height: divSize.height,
              border: "2px solid #1d428a",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {showImage && (
              <img
                src="rectangle-12@2x.png"
                alt="ravi"
                style={{
                  width: "100%",
                  height: "100%",
                  
                }}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default App;
import React from "react";

//Implementing Sticky Top in React 
export default function App() {
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    //Scroll to top until the tip of the header it at y-axis of 90. 
    if (offset > 90) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let x = [""];
  if (scrolled) {
    x.push("fixed-top bg-white shadow-sm");
  }
  return <div className={x.join(" ")}>HEADER CONTENT OF HEIGHT 90px</div>;
}

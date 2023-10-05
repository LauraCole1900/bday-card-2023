// Animated cake and candles code from Lena Design: https://lenadesign.org/2022/06/06/3d-css-birthday-cake-and-candles-animation/

import { useRef } from "react";
import "./style.css";

const Cake = () => {
  const flameRef1 = useRef();
  const flameRef2 = useRef();
  const flameRef3 = useRef();
  const textRef = useRef();

  const toggleFlame = () => {
    flameRef1.current.classList.toggle("snuffed");
    flameRef2.current.classList.toggle("snuffed");
    flameRef3.current.classList.toggle("snuffed");
    textRef.current.classList.toggle("textUp");
  };

  return (
    <div id="birthday-cake">
      <div className="cake">
        <div className="middle"></div>
        <div className="chocs"></div>
        <div className="top"></div>
      </div>
      <div className="candles">
        <div className="flame" ref={flameRef1} onClick={toggleFlame}></div>
        <div className="flame2" ref={flameRef2} onClick={toggleFlame}></div>
        <div className="flame3" ref={flameRef3} onClick={toggleFlame}></div>
        <div className="text" ref={textRef}>Happy Birthday!</div>
        <div className="shadows"></div>
      </div>
      <p className="text2">*click on the flames to blow out the candles</p>
    </div>
  );
};

export default Cake;

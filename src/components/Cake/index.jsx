// Animated cake and candles code from Lena Design: https://lenadesign.org/2022/06/06/3d-css-birthday-cake-and-candles-animation/

import { useRef } from "react";
import "./style.css";

const Cake = () => {
  const flameRef1 = useRef();
  const flameRef2 = useRef();
  const flameRef3 = useRef();

  const toggleCandle = () => {
    flameRef1.current.classList.toggle("snuffed");
    flameRef2.current.classList.toggle("snuffed");
    flameRef3.current.classList.toggle("snuffed");
  };

  return (
    <div id="birthday-cake">
      <div className="cake">
        <div className="middle"></div>
        <div className="chocs"></div>
        <div className="top"></div>
      </div>
      <div className="candles">
        <div className="flame" ref={flameRef1} onClick={toggleCandle}></div>
        <div className="flame2" ref={flameRef2} onClick={toggleCandle}></div>
        <div className="flame3" ref={flameRef3} onClick={toggleCandle}></div>
        <div className="text">Happy Birthday!</div>
        <div className="shadows"></div>
      </div>
      <p className="text2">*click on the flames to blow out the candles</p>
    </div>
  );
};

export default Cake;

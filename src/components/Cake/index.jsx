// Animated cake and candles code from Lena Design: https://lenadesign.org/2022/06/06/3d-css-birthday-cake-and-candles-animation/

import './style.css';

const Cake = () => {

  return (
    <div id="birthday-cake">
      <div className="cake">
        <div className="middle"></div>
        <div className="chocs"></div>
        <div className="top"></div>
      </div>
      <div className="candles">
        <div className="flame"></div>
        <div className="flame2"></div>
        <div className="flame3"></div>
        <div className="text">Happy Birthday!</div>
        <div className="shadows"></div>
      </div>
      <p className="text2">*click on the flame to blow candles</p>
    </div>
  )
};

export default Cake;
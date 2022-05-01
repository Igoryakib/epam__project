import React from "react";
import './Loader.css';
const Loader = () => {
  return (
      <div className="loader-container">
        <div className="text">loading</div>
        <div className="ball ball-1"></div>
        <div className="ball ball-2"></div>
       </div>
  );
};

export default Loader;
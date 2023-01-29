import React from "react";

const Toolbar = ({openSidebar}) => {
  return (
    <>
        <div className ="tool-bar">

        <div className ="burger-btn" onClick={openSidebar}> 
        <i class="ri-menu-line"></i>
        </div>

        <div className ="title"> React Manager Dashboard </div>
        </div>
    
    
    </>
  );
}

export default Toolbar;

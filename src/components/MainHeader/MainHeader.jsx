import React from "react";
import './MainHeader.css'

const MainHeader = () => {
  return (
    <header>
      <div class="container">
        <div class="header-left">
          <h3>RZDZAKY</h3>
        </div>
        <span class="fa fa-bars menu-icon"></span>
        <div class="header-right">
          <a href="#">About Me</a>
          <a href="#">Projects</a>
          <a href="#" class="left">Contact</a>
        </div>
      </div>
    </header>
  )
}
export default MainHeader;
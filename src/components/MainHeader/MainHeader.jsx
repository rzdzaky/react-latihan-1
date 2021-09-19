import React from "react";
import './MainHeader.css'

const MainHeader = () => {
  return (
    <header>
      <div class="container">
        <div class="header-left">
          <h3>Code With RZDZAKY</h3>
        </div>
        <span class="fa fa-bars menu-icon"></span>
        <div class="header-right">
          <a href="#">Pelajaran</a>
          <a href="#">Daftar</a>
          <a href="#" class="left">Log in</a>
        </div>
      </div>
    </header>
  )
}
export default MainHeader;
import React from 'react';

export const Header = () => (
    <nav className="navbar navbar-inverse navbar-fixed-top">
     <div className="container-fluid">
      <div className="navbar-header">
       <button type="button" className="navbar-toggle" id="dlDropDown" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
       </button>
       <a className="navbar-brand">BUGECE</a>
      </div>
      <div>
       <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav ml-auto">
         <li><a href="#section1">Bugece App</a></li>
         <li><a href="#section2">İndir</a></li>
         <li><a href="#section3">İletişim</a></li>
        </ul>
        <ul className="nav navbar-nav mr-auto">
         <li><a href="#section41">Rehber</a></li>
         <li><a href="#section42">Tekvim</a></li>
         <li><a href="#section43">Hız</a></li>
         <li><a href="#section44">En İyiler</a></li>
         <li><a href="#section45">Bilet</a></li>
        </ul>
       </div>
      </div>
     </div>
    </nav>
);
        
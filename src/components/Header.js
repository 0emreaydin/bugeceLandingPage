import React from 'react';

export const Header = () => (
    <nav class="navbar navbar-inverse navbar-fixed-top">
     <div class="container-fluid">
      <div class="navbar-header">
       <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
       </button>
       <a class="navbar-brand" href="#">BUGECE</a>
      </div>
      <div>
       <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav ml-auto">
         <li><a href="#section1">Bugece App</a></li>
         <li><a href="#section2">İndir</a></li>
         <li><a href="#section3">İletişim</a></li>
        </ul>
        <ul class="nav navbar-nav mr-auto">
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
        
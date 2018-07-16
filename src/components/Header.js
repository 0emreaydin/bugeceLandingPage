import React from 'react';

export const Header = () => (
    <nav className="navbar navbar-inverse navbar-fixed-top"  style={{width:'100%'}}>
     <div className="container-fluid"  style={{paddingRight:'0'}}>
      <div className="navbar-header"  style={{marginRight:'0'}}>
       <button type="button" className="navbar-toggle" id="dlDropDown" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
       </button>
       <a className="navbar-brand" href="https://bugece.co/">BUGECE</a>
      </div>
      <div>
       <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav ml-auto">
         <li><a href="#section1">Bugece App</a></li>
         <li><a href="#section2">???</a></li>
         <li><a href="#section4">Neden Bu Gece</a></li>
         <li><a href="#section3">İletişim</a></li>
        </ul>
       </div>
      </div>
     </div>
    </nav>
);
        
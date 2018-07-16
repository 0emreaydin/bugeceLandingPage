import React from 'react';
import { Content } from './Content';
import { Banner } from './Banner';
import { Download } from './Download';
import { Video } from './Video';

export const Main = () => (
    <div>
        <div id="section1" className="container-fluid">
            <Banner />
        </div>
        <div id="section2" className="container-fluid">
            <Video/>
        </div>
        <div id="section4" className="container-fluid">
            <Content />
        </div>
        <div id="section3" className="container-fluid">
            <a href="https://www.facebook.com/bugececo/" className="fa fa-facebook"></a>
            <a href="https://twitter.com/bugececo" className="fa fa-twitter"></a>
            <a href="https://www.instagram.com/bugececo/" className="fa fa-instagram"></a>
        </div>
    </div>
);
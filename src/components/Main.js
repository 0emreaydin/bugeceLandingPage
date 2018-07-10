import React from 'react';
import { Guide } from './Guide';
import { Calendar } from './Calendar';
import { Speed } from './Speed';
import { Bests } from './Bests';
import { Ticket } from './Ticket';
import { Banner } from './Banner';
import { Download } from './Download';

export const Main = () => (
    <div>
        <div id="section1" className="container-fluid">
            <Banner />
        </div>
        <div id="section2" className="container-fluid">
            <Download />
        </div>
        <div id="section41" className="container-fluid">
            <Guide />
        </div>
        <div id="section42" className="container-fluid">
            <Calendar/>
        </div>
        <div id="section43" className="container-fluid">
            <Speed />
        </div>
        <div id="section44" className="container-fluid">
            <Bests />
        </div>
        <div id="section45" className="container-fluid">
            <Ticket />
        </div>
        <div id="section3" className="container-fluid">
            <h1>Bizi sosyal medyadan takip edebilirsiniz.</h1>
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-twitter"></a>
            <a href="#" className="fa fa-instagram"></a>
        </div>
    </div>
);
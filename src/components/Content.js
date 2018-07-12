import React from 'react';

export const Content = () => (
    <div id="content">
        <div id="contentBody">
            <div class="row">
                <div class="col-md-4">
                    <img src={require('../images/phoneBanner.png')} width="85%" height="auto"/>
                </div>
                <div class="col-md-8">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-12">
                                <h1 class="display-3 why-title">NEDEN BU GECE</h1>
                                <p class="why-title-explain">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Scelerisque varius morbi enim nunc faucibus a.
                                </p>
                            </div>
                        </div>
                        <div class="row why-content">
                        <div class="col-sm-4"  id="info">
                            <div class="node">
                                <div class="node-icon">
                                    <img width="80px" height="auto" src={require('../images/news.png')} />
                                </div>
                                <div class=" node-title">
                                    Gece Hayatı Rehberi
                                </div>
                                <div class="node-content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                </div>
                                </div>
                            </div>
                            <div class="col-sm-4" id="info">
                                <div class="node">
                                <div class="node-icon">
                                    <img width="80px" height="auto" src={require('../images/calendar.png')} />
                                </div>
                                <div class="node-title">
                                    Sana Özel Takvim
                                </div>
                                <div class="node-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </div>
                                </div>
                            </div>
                            <div class="col-sm-4"  id="info">
                                <div class="node">
                                    <div class="node-icon">
                                        <img width="80px" height="auto" src={require('../images/marker.png')} />
                                    </div>
                                    <div class="node-title">
                                        Şehrin en iyi etkinlikleri
                                    </div>
                                    <div class="node-content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div class="row why-content">
                            <div class="col-sm-2"></div>
                            <div class="col-sm-4">
                                <div class="node">
                                <div class="node-icon">
                                    <img width="80px" height="auto" src={require('../images/time.png')} />
                                </div>
                                <div class="node-title">
                                    Biletlerini 9 saniyede al
                                </div>
                                <div class="node-content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="node">
                                <div class="node-icon">
                                    <img width="80px" height="auto" src={require('../images/ticket.png')} />
                                </div>
                                <div class="node-title">
                                    Okut ve Geç
                                </div>
                                <div class="node-content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                </div>
                            </div>
                            <div class="col-sm-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
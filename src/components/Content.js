import React from 'react';

export const Content = () => (
    <div id="content">
        <div id="contentBody">
            <div className="row">
                <div className="col-md-12">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">
                                <h1 className="display-3 why-title">NEDEN BU GECE</h1>
                                <p className="why-title-explain">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Scelerisque varius morbi enim nunc faucibus a.
                                </p>
                            </div>
                        </div>
                        <div className="row why-content" style={{marginTop:'5%'}}>
                        <div className="col-sm-4"  id="info">
                            <div className="node">
                                <div className="node-icon">
                                    <img width="80px" height="auto" src={require('../images/news.png')} />
                                </div>
                                <div className=" node-title">
                                    Gece Hayatı Rehberi
                                </div>
                                <div className="node-content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-4" id="info">
                                <div className="node">
                                    <div className="node-icon">
                                        <img width="80px" height="auto" src={require('../images/calendar.png')} />
                                    </div>
                                    <div className="node-title">
                                        Sana Özel Takvim
                                    </div>
                                    <div className="node-content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4"  id="info">
                                <div className="node">
                                    <div className="node-icon">
                                        <img width="80px" height="auto" src={require('../images/marker.png')} />
                                    </div>
                                    <div className="node-title">
                                        Şehrin en iyi etkinlikleri
                                    </div>
                                    <div className="node-content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="row why-content" style={{marginTop:'5%'}}>
                            <div className="col-sm-2"></div>
                            <div className="col-sm-4">
                                <div className="node">
                                <div className="node-icon">
                                    <img className="80px" height="auto" src={require('../images/time.png')} />
                                </div>
                                <div className="node-title">
                                    Biletlerini 9 saniyede al
                                </div>
                                <div className="node-content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="node">
                                <div className="node-icon">
                                    <img width="80px" height="auto" src={require('../images/ticket.png')} />
                                </div>
                                <div className="node-title">
                                    Okut ve Geç
                                </div>
                                <div className="node-content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                </div>
                            </div>
                            <div className="col-sm-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
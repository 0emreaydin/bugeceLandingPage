import React from 'react';

export const Video = () => (
    <div style={{paddingTop:'1%'}}>
        <div className="row" style={{height:'90vh'}}>
            <div className = "col-md-3" id="info-content">
                <div className="row" id="video-info">
                    <div className = "col-md-12 active-info">
                        <div className="row info-rows">
                            <div className="col-xs-4 col-md-4"><img src={require('../images/news.png')}/></div>
                            <div className="col-xs-8 col-md-8"><h6 className="info-title">Gece Hayatı Rehberi</h6></div>
                        </div>
                    </div>
                    <div className = "col-md-12">
                        <div className="row info-rows">
                            <div className="col-xs-4 col-md-4"><img src={require('../images/calendar.png')}/></div>
                            <div className="col-xs-8 col-md-8"><h6 className="info-title">Sana Özel Takvim</h6></div>
                        </div>
                    </div>
                    <div className = "col-md-12">
                        <div className="row info-rows">
                            <div className="col-xs-4 col-md-4"><img src={require('../images/marker.png')}/></div>
                            <div className="col-xs-8 col-md-8"><h6 className="info-title">Şehrin en iyi etkinlikleri</h6></div>
                        </div>
                    </div>
                    <div className = "col-md-12">
                        <div className="row info-rows">
                            <div className="col-xs-4 col-md-4"><img src={require('../images/time.png')}/></div>
                            <div className="col-xs-8 col-md-8"><h6 className="info-title">Biletlerini 9 saniyede al</h6></div>
                        </div>
                    </div>
                    <div className = "col-md-12">
                        <div className="row info-rows">
                            <div className="col-xs-4 col-md-4"><img src={require('../images/ticket.png')}/></div>
                            <div className="col-xs-8 col-md-8"><h6 className="info-title">Okut ve Geç</h6></div>
                        </div>
                    </div>
                </div>   
            </div>
            <div className = "col-md-9 videoWrapper">
                <div id="player"></div>
            </div>
        </div>

    </div>
);
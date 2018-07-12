import React from 'react';

export const Banner = () => (
    <div className="row">
        <div className="col-md-6" id="divLeft">
            <div className="center-element">
                <div class="row" style={{margin:'0'}}>
                    <div class="col-md-12" id="bannerLogo">
                        <img src={require('../images/banner.png')} width="50%" height="auto"/>
                    </div>
                </div>
                <h1 id="bannerText">ŞEHRİN <font color="white"> EN İYİ ETKİNLİKLERİ </font> PARMAĞININ UCUNDA</h1>
                <div id="store">
                    <div className="row">
                        <div className="col-md-6" id="store-img-container">
                            <a href="https://play.google.com/store/apps/details?id=com.app.bugece&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"><img alt="Google Play'den indirin" class="store-img" src="https://play.google.com/intl/en_us/badges/images/generic/tr_badge_web_generic.png"/></a>
                        </div>
                        <div className="col-md-6" id="store-img-container">
                            <a href="https://itunes.apple.com/tr/app/bugece/id1161536177?l=tr&mt=8"><img alt="App Store'dan indirin" class="store-img" src={require('../images/appStore.svg')}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-6" id="divRight"></div>
    </div>
);
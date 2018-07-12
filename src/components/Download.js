import React from 'react';

export const Download = () => (
    <div>
        <div id="store">
            <div className="row">
                <div className="col-md-6">
                    <a href="https://play.google.com/store/apps/details?id=com.app.bugece&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"><img alt="Google Play'den alın" width="100%" src="https://play.google.com/intl/en_us/badges/images/generic/tr_badge_web_generic.png"/></a>
                </div>
                <div className="col-md-6" style={{paddingTop:'3%'}}>
                    <a href="https://itunes.apple.com/tr/app/bugece/id1161536177?l=tr&mt=8"><img alt="Google Play'den alın" width="100%" src={require('../images/appStore.svg')}/></a>
                </div>
            </div>
        </div>
    </div>
);
(function() {
    var REDIRECT_KEY = 'ad_redirect_done';
    
    if (!sessionStorage.getItem(REDIRECT_KEY)) {
        sessionStorage.setItem(REDIRECT_KEY, 'true');
        
        var adUrls = [
            "https://www.effectivecpmnetwork.com/gyunxhcx6e?key=a4140cd38d33a96eb3a9581d555f503a",
            "https://www.effectivecpmnetwork.com/z0pnsjfsuf?key=5c1e446bfc5f7e9662bcd587f7ae3b36",
            "https://www.effectivecpmnetwork.com/v5kjpv2d7?key=2297afd37d196afc41fbb6fea531da30",
            "https://www.effectivecpmnetwork.com/fmbq5tt9wt?key=c2a02ba43bf7fb3024a6f2c6762e5403"
        ];
        
        var randomUrl = adUrls[Math.floor(Math.random() * adUrls.length)];
        
        window.location.replace(randomUrl);
    }
})();

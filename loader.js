if (DEVICE) {
    console.log(DEVICE);
} else {
    throw new Error('Device information not loaded');
}

(function() {

    var envs = {
        dev: 'http://localhost:9100/',
        prod: 'https://omen.firebaseapp.com/'
    };

    var host = window.BASE_URL = envs[DEVICE.env];

    function load(script) {
        document.write('<' + 'script src="' + host + script + '" type="text/javascript"><' + '/script>');
    }

    load('jspm_packages/system.js');
    load('config.js');
    load('bundle.js');
    load('app.js');

})();


System.config({baseURL: BASE_URL});

System.import('front/bootstrap').then(function (app) {
    console.log(app, 'loaded');
});
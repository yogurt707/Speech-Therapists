var app = angular.module("SpeechTherapistsApp", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider.when("/", {
        templateUrl: "home.html"
    }).when("/searchPage", {
        templateUrl: "app/searchPage/searchMain.html",
        controller: "searchCtrl"
    }).when("/myProgress", {
        templateUrl: "app/myProgress/myProgress.html",
        controller: "myProgressCtrl"    
    }).otherwise({
        // template:  // Other posibility
        redirectTo: "/"
    });

})
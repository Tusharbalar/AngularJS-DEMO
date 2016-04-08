angular.module("projectTitle", ["ngRoute"])

.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/about", {
            templateUrl: "views/about.html",
            controller: "mainCtrl"
        })
        .when("/contact", {
            templateUrl: "views/contact.html",
            controller: "mainCtrl"
        })
        .when("/home", {
            templateUrl: "views/home.html",
            controller: "mainCtrl"
        })
        .otherwise({
            redirectTo: "/home"
        })
}])

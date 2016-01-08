angular.module('hello', [ 'ngRoute', 'home', 'navigation' ])).config(

function($routeProvider, $httpProvider) {

    $routeProvider.when('/', {
        templateUrl: 'js/home/home.html',
        controller: 'home'
    }).when('/login', {
        templateUrl: 'js/navigation/login.html',
        controller: 'navigation'
    }).otherwise('/');

    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
});
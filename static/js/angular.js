
var sonepurseva = angular.module('sonepurseva', ['ui.router']);

sonepurseva.config(['$stateProvider', '$locationProvider', function ($stateProvider, $locationProvider) {
    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: '/static/ng-templates/index.html',
            controller: 'seva'
        })
        .state('aadharseva', {
            url: '/aadharseva',
            templateUrl: '/static/ng-templates/aadharseva.html',
            controller: 'aadharseva'
        })
        .state('residentialseva', {
            url: '/residentialseva',
            templateUrl: '/static/ng-templates/residentialseva.html',
            controller: 'residentialseva'
        })
        .state('thankyou', {
            url: '/thankyou',
            templateUrl: '/static/ng-templates/thankyou.html',
        })
        
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);

sonepurseva.controller('header',function($scope,$state){
    $scope.home = function(){
        $state.go('home')
    }
    
})
sonepurseva.controller('seva',function($scope,$http,$state){
    $scope.residentialseva = function(){
        $state.go('residentialseva')
    }
    $scope.aadharseva = function(){
        $state.go('aadharseva')
    }
})
sonepurseva.controller('aadharseva',function($scope,$http,$state){
    $scope.fromFor = 'आधार'
    $scope.service = function(obj){
        $scope.address = obj.target.attributes.id.value
        $scope.activeMenu = obj.target.attributes.id.value
    }
    $scope.submit = function (seva) {

        var body = {
            name: seva.name,
            seva: $scope.fromFor,
            address: $scope.address,
            phonenumber: seva.phonenumber
        }

        console.log(body)
        $http.post('/api/seva/create/', JSON.stringify(body)).then(function (response) {
            console.log(response)
            $state.go('thankyou')
        })
    }
})
sonepurseva.controller('residentialseva',function($scope,$http,$state){
    $scope.fromFor = 'आवासीय'
    $scope.service = function (obj) {
        $scope.address = obj.target.attributes.id.value
        $scope.activeMenu = obj.target.attributes.id.value
    }
    $scope.submit = function (seva) {

        var body = {
            name: seva.name,
            seva: $scope.fromFor,
            address: $scope.address,
            phonenumber: seva.phonenumber
        }

        console.log(body)
        $http.post('/api/seva/create/', JSON.stringify(body)).then(function (response) {
            console.log(response)
            $state.go('thankyou')
        })
    }
})
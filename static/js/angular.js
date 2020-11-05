var sonepurseva = angular.module('sonepurseva', ['ui.router']);

sonepurseva.config(['$stateProvider', '$locationProvider', function ($stateProvider, $locationProvider) {
    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: '/static/ng-templates/index.html',
            controller: 'seva'
        })
        
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);

sonepurseva.controller('seva',function($scope,$http){
    $scope.submit = function(seva){
        var body = {
            name:seva.name,
            seva:seva.seva,
            address:seva.address,
            phonenumber:seva.phonenumber
        }
        $http.post('/api/seva/create/', JSON.stringify(body)).then(function(response){
            console.log(response)
            $scope.seva = ""
        })
    }

})
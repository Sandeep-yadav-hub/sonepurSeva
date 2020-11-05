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
        var config = {
            headers: { 'Content-Type': undefined },
            transformResponse: angular.identity
        };
        var form = new FormData()
        angular.forEach(seva, function (value, key) {
            form.append(key, value);
            console.log(key, value)
        });
        $http.post('/api/seva/create/', form, config).then(function(response){
            console.log(response)
            $scope.seva = ""
        })
    }

})
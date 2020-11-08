
var sonepurseva = angular.module('sonepurseva', ['ui.router']);

sonepurseva.config(['$stateProvider', '$locationProvider', function ($stateProvider, $locationProvider) {
    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: '/static/ng-templates/index.html',
            controller: 'seva'
        })
        .state('form', {
            url: '/home/form/:service',
            templateUrl: '/static/ng-templates/form.html',
            controller: 'form'
        })
        .state('otherService', {
            url: '/home/otherService',
            templateUrl: '/static/ng-templates/otherService.html'
            
        })
        // .state('residentialseva', {
        //     url: '/residentialseva',
        //     templateUrl: '/static/ng-templates/form.html',
        //     controller: 'residentialseva'
        // })
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
        $state.go('form',{service:"residentialcertificateSeva"})
    }
    $scope.aadharseva = function(){
        $state.go('form',{service:"aadharCardSeva"})
    }
    $scope.waterbillseva = function(){
        $state.go('form',{service:"waterBillSeva"})
    }
    $scope.electricitybillseva = function(){
        $state.go('form', { service:"electricityBillSeva"})
    }
    $scope.otherService = function(){
        $state.go('otherService')
    }
})
sonepurseva.controller('form',function($scope,$http,$state){
    $scope.service = function(obj){
        $scope.address = obj.target.attributes.id.value
        $scope.activeMenu = obj.target.attributes.id.value
    }
    $scope.submit = function (seva) {

        var body = {
            name: seva.name,
            seva: $state.params.service,
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

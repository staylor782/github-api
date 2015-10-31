var app = angular.module('github-api');

app.controller('GitHubController', function($scope, githubService) {
    
    $scope.user = '';
    
    $scope.displayFields = false;
    
    $scope.getUserData = function() {
        githubService.getUser($scope.searchText).then(function(res) {
            $scope.user = res;
            $scope.displayFields = true;
        })
    }
})

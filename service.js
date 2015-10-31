var app = angular.module('github-api');

app.service('githubService', function($http, $q) {
    
    var id = "3257a93c96b37cf80ae9";
    var sec = "45becb1dda65f5af435cb81048b8791bd02440f9";
    var param = "?client_id=" + id + "&client_secret=" + sec;
    
    this.getUser = function(username) {
        
        var dafur = $q.defer();
    
        var arrData = [];
    
        $http({
            method: 'GET',
            url: 'https://api.github.com/users/' + username + param
        }).then(function(response) {
/*            var User = function(Avatar, Company, Email, RepoNum, Followers, Following) {
                this.Avatar = Avatar;
                this.Company = Company;
                this.Email = Email;
                this.RepoNum = RepoNum;
                this.Followers = Followers;
                this.Following = Following;
            }
            
            var dataRes = response.data.results;
            
            for(var i = 0; i < dataRes.length; i++) {
                var result = new Result(dataRes[i].avatar_url, dataRes[i].company, dataRes[i].email, dataRes[i].repos_url,                                               dataRes[i].followers, dataRes[i].following);
                arrData.push(result);
            }
            
            dafur.resolve(arrData);*/
            //console.log(response.data);
            dafur.resolve(response.data);
        })
        return dafur.promise;
    }
})
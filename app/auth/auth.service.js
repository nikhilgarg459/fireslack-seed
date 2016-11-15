angular.module('angularfireSlackApp')
.factory('auth',function($firebaseAuth, FirebaseUrl){
    var ref = new Firebase(FirebaseUrl);
    var auth = $firbaseAuth(ref);
    return auth;
});
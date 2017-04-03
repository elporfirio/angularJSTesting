/**
 * Created by elporfirio on 03/04/17.
 */

angular.module('app', ['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: 'app/Expense/expense.html'})
        .when('/admin', {templateUrl: 'app/Admin/admin.html'})
        .otherwise({redirectTo: '/'});
}]);
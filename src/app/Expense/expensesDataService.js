/**
 * Created by elporfirio on 03/04/17.
 */
angular.module('app')
.service('expensesDataService', ['$http', function($http){
    this.getExpenses = function() {
        // return [
        //     {title: 'Taxi', description: 'to Airpot', amount: 99.90},
        //     {title: 'Caballo', description: 'to Starbucks', amount: 89.90},
        //     {title: 'Helicoptero', description: 'to Polanco', amount: 79.90}
        // ];
        return [
            new ExpenseItem('Taxi', 'to Airport', 99.88),
            new ExpenseItem('Caballo', 'to Starbucks', 89.98),
            new ExpenseItem('Helicoptero', 'to Polcanco', 75.50)
        ]
    };

    function reportExpenses(){

    }

    this.persistExpenses = function(reportExpenses){
        var success = true;
        if(success){
            reportExpenses();
        }
    };
}]);
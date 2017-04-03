/**
 * Created by elporfirio on 03/04/17.
 */

(function(){
    angular.module('app')
        .controller('expensesController', ['expensesDataService', function(expensesDataService){
            var vm = this;
            vm.activate = activate;
            vm.expenseItems = [];
            vm.expensesDataService = expensesDataService;

            activate();

            function activate(){
                return vm.expenseItems = vm.expensesDataService.getExpenses();
            }
        }]);
})();

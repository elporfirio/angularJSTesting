/**
 * Created by elporfirio on 03/04/17.
 */
describe('expensesController', function(){

    var $controllerConstructor;
    var scope;

    beforeEach(module('app'));

    beforeEach(inject(function($controller, $rootScope){
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
    }));

   it('Debe tener 3 expense items', function () {
       var ctrl = $controllerConstructor('expensesController', {$scope: scope});
       expect(ctrl.expenseItems.length).toBe(3);
   })
});
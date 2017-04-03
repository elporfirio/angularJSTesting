/**
 * Created by elporfirio on 03/04/17.
 */
describe('expensesDataService', function(){
   beforeEach(module('app'));


   it('should return 3 expenses', inject(function(expensesDataService){
       expect(expensesDataService.getExpenses().length).toBe(3);
   }));

   it('should be expense model', inject(function(expensesDataService){
       var expensesItems = expensesDataService.getExpenses();
       var testExpenseItem = new ExpenseItem('Taxi', 'to Airport', 99.88);
       expect(expensesItems).toContain(testExpenseItem);
   }));

   describe('reasonable expenses', function () {
       beforeEach(function () {
           jasmine.addMatchers(customMatchers);
       });

       it('should be a reasonable expend', inject(function(){
           var taxi = new ExpenseItem('Taxi', 'to Airport', 69.88);
           expect(taxi).toBeAReasonableExpense();
       }));

       it('should not ve reasonable expend', inject(function(){
           var dinner = new ExpenseItem('Dinner', 'Starbucks', 169.88);
           expect(dinner).not.toBeAReasonableExpense();
       }));
   });


});
/**
 * Created by elporfirio on 03/04/17.
 */
describe("Expense objects", function(){
    var expenseItem, expense;
    beforeEach(function(){
        expenseItem = new ExpenseItem(100);
        expense = new Expense(expenseItem);
    });

    it("deberia ser del tipo ExpenseItem", function(){
        // var expenseItem = new ExpenseItem();
        // var expense = new Expense(expenseItem);
        expect(expense.expenseItem).toBe(expenseItem);
    });

    // it("Debe tener una cantidad valida", function(){
    //     // var expenseItem = new ExpenseItem(100);
    //     // var expense = new Expense(expenseItem);
    //     expect(expense.expenseItem.amount).toEqual(100);
    // })
});
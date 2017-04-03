/**
 * Created by elporfirio on 03/04/17.
 */
describe('persisting expenses', function(){
   beforeEach(module('app'));

   describe('call backs', function(){
       it('should call back when persisted', inject(function(expensesDataService){
           var spyCallback = jasmine.createSpy('callBackSpy');
           expensesDataService.persistExpenses(spyCallback);
           expect(spyCallback).toHaveBeenCalled();
       }));
   });

   describe('spy on', function () {
      it('should spy on persistExpenses', inject(function(expensesDataService){
          var spy = spyOn(expensesDataService, 'persistExpenses');
          expensesDataService.persistExpenses();
          expect(spy).toHaveBeenCalled();

      }));

      it('should spy on persistExpenses and fake a reply', inject(function (expensesDataService) {
          var spy = spyOn(expensesDataService, 'persistExpenses').and.callFake(function(){
              return 3;
          });
          var numRecors = expensesDataService.persistExpenses();
          expect(numRecors).toEqual(3);

      }))
   });
});
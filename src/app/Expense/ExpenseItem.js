/**
 * Created by elporfirio on 03/04/17.
 */
function ExpenseItem(type, description, amount){
    this.description = description;
    this.amount = amount;
    this.type = type;
}

ExpenseItem.prototype.isReasonable = function(){
  return this.amount <= 100;
};
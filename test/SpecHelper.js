/**
 * Created by elporfirio on 03/04/17.
 */
var customMatchers = {
    toBeAReasonableExpense: function(){
        return {
            compare: function(actual){
                var pass = actual.isReasonable();
                var judgement = pass ? 'unresonable' : 'reasonable';

                return {
                    pass: pass,
                    message: "es un " + judgement
                }
            }
        }

    }
};
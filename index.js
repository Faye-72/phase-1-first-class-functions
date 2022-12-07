

function receivesAFunction(spy) {
        return spy()
    }



const returnsANamedFunction = function(){
   return returnsANamedFunction         
}
returnsANamedFunction()


// let returnsAnAnonymousFunction = function()
// {
//    console.log("undefined functions")  
// }
//  returnsAnAnonymousFunction()

( returnsAnAnonymous (function(){
return returnsAnAnonymousFunction()
})
)
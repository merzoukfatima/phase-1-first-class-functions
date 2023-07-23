function receivesAFunction(callback){
    return callback()
}
function returnsANamedFunction(){
    return function NamedFunction(){
    }
}
function returnsAnAnonymousFunction(){
    return function (){
    }
}

function zero(b) {
    if(b == undefined){
        return 0
    }else{
        if(b.includes('*')){
            const newB = b.slice(0,1)
            return times(newB , 0)
         }else if(b.includes('/')){
             const newB = b.slice(0,1)
             return dividedBy(newB , 0)
         }else if(b.includes('+')){
             const newB = b.slice(0,1)
             return plus(newB , 0)
         }else if(b.includes('-')){
             const newB = b.slice(0,1)
             return minus(newB , 0)
         }
    }
}
function one(b) {
    if(b == undefined){
        return 1
    }else{
        if(b.includes('*')){
            const newB = b.slice(0,1)
            return times(newB , 1)
         }else if(b.includes('/')){
             const newB = b.slice(0,1)
             return dividedBy(newB , 1)
         }else if(b.includes('+')){
             const newB = b.slice(0,1)
             return plus(newB , 1)
         }else if(b.includes('-')){
             const newB = b.slice(0,1)
             return minus(newB , 1)
         }
    }
}
function two(b) {
    if(b == undefined){
        return 2
    }else{
        if(b.includes('*')){
            const newB = b.slice(0,1)
            return times(newB , 2)
         }else if(b.includes('/')){
             const newB = b.slice(0,1)
             return dividedBy(newB , 2)
         }else if(b.includes('+')){
             const newB = b.slice(0,1)
             return plus(newB , 2)
         }else if(b.includes('-')){
             const newB = b.slice(0,1)
             return minus(newB , 2)
         }
    }
}
function three(b) {
    if(b == undefined){
        return 3
    }else{
        if(b.includes('*')){
            const newB = b.slice(0,1)
            return times(newB , 3)
         }else if(b.includes('/')){
             const newB = b.slice(0,1)
             return dividedBy(newB , 3)
         }else if(b.includes('+')){
             const newB = b.slice(0,1)
             return plus(newB , 3)
         }else if(b.includes('-')){
             const newB = b.slice(0,1)
             return minus(newB , 3)
         }
    }
}
function four(b) {
    if(b == undefined){
        return 4
    }else{
        if(b.includes('*')){
            const newB = b.slice(0,1)
            return times(newB , 4)
         }else if(b.includes('/')){
             const newB = b.slice(0,1)
             return dividedBy(newB , 4)
         }else if(b.includes('+')){
             const newB = b.slice(0,1)
             return plus(newB , 4)
         }else if(b.includes('-')){
             const newB = b.slice(0,1)
             return minus(newB , 4)
         }
    }
}
function five(b) {
    if(b == undefined){
        return 5
    }else{
        if(b.includes('*')){
            const newB = b.slice(0,1)
            return times(newB , 5)
         }else if(b.includes('/')){
             const newB = b.slice(0,1)
             return dividedBy(newB , 5)
         }else if(b.includes('+')){
             const newB = b.slice(0,1)
             return plus(newB , 5)
         }else if(b.includes('-')){
             const newB = b.slice(0,1)
             return minus(newB , 5)
         }
    }
    
}
function six(b) {
    if(b == undefined){
        return 6
    }else{
        if(b.includes('*')){
            const newB = b.slice(0,1)
            return times(newB , 6)
         }else if(b.includes('/')){
             const newB = b.slice(0,1)
             return dividedBy(newB , 6)
         }else if(b.includes('+')){
             const newB = b.slice(0,1)
             return plus(newB , 6)
         }else if(b.includes('-')){
             const newB = b.slice(0,1)
             return minus(newB , 6)
         }
    }
}
function seven(b) {
    if(b == undefined){
        return 7
    }else{
        if(b.includes('*')){
            const newB = b.slice(0,1)
            return times(newB , 7)
         }else if(b.includes('/')){
             const newB = b.slice(0,1)
             return dividedBy(newB , 7)
         }else if(b.includes('+')){
             const newB = b.slice(0,1)
             return plus(newB , 7)
         }else if(b.includes('-')){
             const newB = b.slice(0,1)
             return minus(newB , 7)
         }
    }
}
function eight(b) {
    if(b == undefined){
        return 8
    }else{
        if(b.includes('*')){
           const newB = b.slice(0,1)
           return times(newB , 8)
        }else if(b.includes('/')){
            const newB = b.slice(0,1)
            return dividedBy(newB , 8)
        }else if(b.includes('+')){
            const newB = b.slice(0,1)
            return plus(newB , 8)
        }else if(b.includes('-')){
            const newB = b.slice(0,1)
            return minus(newB , 8)
        }
    }
}
function nine(b) {
    if(b == undefined){
        return 9
    }else{
        if(b.includes('*')){
           const newB = b.slice(0,1)
           return times(newB , 9)
        }else if(b.includes('/')){
            const newB = b.slice(0,1)
            return dividedBy(newB , 9)
        }else if(b.includes('+')){
            const newB = b.slice(0,1)
            return plus(newB , 9)
        }else if(b.includes('-')){
            const newB = b.slice(0,1)
            return minus(newB , 9)
        }
    }
}

function plus(b , a = -1) {
    if(a === -1){
        return b + '+'
    }else{
       return Number(a) + Number(b)
    }
}
function minus(b , a = -1) {
    if(a === -1){
        return b + '-'
    }else{
       return Number(a) - Number(b)
    }
}
function times(b , a = -1) {
    if(a === -1){
        return b + '*'
    }else{
       return Number(a) * Number(b)
    }
}
function dividedBy(b , a = -1) {
    if(a === -1){
        return b + '/'
    }else{
       return Math.floor(Number(a) / Number(b))
    }
}

console.log(zero(plus(zero()))) // write there
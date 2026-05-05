//module.js

function sum(a ,b){
    return a + b;
}

function div(a, b){
    return a / b;
}

function containsNumbers(text){
    for (let i = 0; i < text.length; i++) {
        //bug was that spaces counted as zero, so check for spaces
        if (!isNaN(text.charAt(i)) && text.charAt(i) !== ' ')
            return true;
    }
    return false;
}

export default {sum, div, containsNumbers};
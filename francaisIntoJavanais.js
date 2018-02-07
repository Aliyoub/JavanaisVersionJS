function isVowel(c){
    var vowels = 'aeiouy';
    if(vowels.indexOf(c) != -1 || vowels.toUpperCase().indexOf(c) != -1 ){
        return true;
    }
    return false
}

function isConsonnant(c){
    var consonnants = 'bcdfghjklmnpqrstvxwz';
    if(consonnants.indexOf(c) != -1 || consonnants.toUpperCase().indexOf(c) != -1){
        return true;
    }
    return false;
}

function francaisIntoJavanais(word){
    var i = 0;
    var francaisIntoJavanais = '';
    while(i < word.length){
        if (i == 0 && isVowel(word[0])) francaisIntoJavanais = 'av' + word[0];
        else if(isConsonnant(word[i]) && isVowel(word[i+1]) && i != word.length-1) francaisIntoJavanais += word[i] + 'av';
        else francaisIntoJavanais += word[i];
        i++;
    }
    return francaisIntoJavanais;
}

console.log("bonjour en Javanais :" + francaisIntoJavanais("bonjour"));
console.log("chante en Javanais :" + francaisIntoJavanais("chante"));
console.log("moyen en Javanais :" + francaisIntoJavanais("moyen"));
console.log("exemple en Javanais :" + francaisIntoJavanais("exemple"));
console.log("au en Javanais :" + francaisIntoJavanais("au"));
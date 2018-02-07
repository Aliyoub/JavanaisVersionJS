function isVowel(c) {
    var vowels = 'aeiouy';
    if (vowels.indexOf(c) != -1 || vowels.toUpperCase().indexOf(c) != -1) {
        return true;
    }
    return false
}

function isConsonant(c) {
    var consonnants = 'bcdfghjklmnpqrstvxwz';
    if (consonnants.indexOf(c) != -1 || consonnants.toUpperCase().indexOf(c) != -1) {
        return true;
    }
    return false;
}

function javanaisInTofrancais(word) {
    var javanaisInTofrancais = word;

    while (javanaisInTofrancais.search('av') != -1) {
        var position = javanaisInTofrancais.search('av');
        if (
            (position == 0) && (isVowel(javanaisInTofrancais[position + 2]))
            || (isConsonant(javanaisInTofrancais[position - 1]) && isVowel(javanaisInTofrancais[position + 2]))
        )
            javanaisInTofrancais = javanaisInTofrancais.replace('av', '');
    }
    return javanaisInTofrancais;
}

console.log("bavonjavour en Francais :" + javanaisInTofrancais("bavonjavour"));
console.log("chavantave en Francais :" + javanaisInTofrancais("chavantave"));
console.log("mavoyen en Francais :" + javanaisInTofrancais("mavoyen"));
console.log("avexavemplave en Francais :" + javanaisInTofrancais("avexavemplave"));
console.log("avau en Francais :" + javanaisInTofrancais("avau"));
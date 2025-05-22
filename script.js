function rot13(text) {

    const englishLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w',"x","y","z"];
    const englishUpper = ['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let result = '';

    for (let i=0; i<text.length; i++) {
        const char = text[i];


        index = englishLower.indexOf(char);
        if (index !== -1) {
            result += englishLower[(index + 13) % englishLower.length];
            continue;
        }

        index = englishUpper.indexOf(char);
        if (index !== -1) {
            result += englishUpper[(index + 13) % englishUpper.length];
            continue;
        }

        result += char; // Если нету таких символов в массивах
    }
    return result;
}

document.getElementById('encryptButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const encodedText = rot13(inputText);
    document.getElementById('outputArea').textContent = encodedText;
});

document.getElementById('decryptButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;

    const decodedText = rot13(inputText);
    document.getElementById('outputArea').textContent = decodedText;
});
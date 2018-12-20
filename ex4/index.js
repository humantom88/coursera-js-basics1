/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    return tweet
        .split(" ")
        .filter(function (item) {
            return item.indexOf("#") !== -1;
        })
        .map(function (item) {
            var trimmed = item.trim();
            return trimmed.slice(1, trimmed.length);
        });
};



/*
    - Строка содержит только буквы русского и латинского алфавита, знак решетки и пробелы.
    - Гарантируется, что в функцию передается непустая строка.
    - Слова в строке разделены одним пробелом.
    Хештег начинается со знака решетки (#) и состоит из одного слова.
    В результирующем массиве хештеги должны быть без решетки.
    Если в слове хештегов нет, то возвращается пустой массив.
*/
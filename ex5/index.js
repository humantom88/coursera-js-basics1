/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    if (hashtags.length === 0) {
        return '';
    }

    var resultArray = hashtags.reduce(function (acc, item) {
        if (acc.includes(item.toLowerCase())) {
            return acc;
        }

        acc.push(item.toLowerCase());

        return acc;
    }, [])

    return resultArray.join(', ');
};

/*
    Повторяющиеся хештеги нужно игнорировать.
    При сравнении хештегов следует игнорировать регистр букв.
    Порядок хештегов из исходного массива должен сохраниться.
*/
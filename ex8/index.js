/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    if (arguments.length <= 1) {
        return collection;
    }

    var innerCollection = [].concat(collection);
    var args = [].slice.call(arguments);
    var args = args.slice(1);

    args = args.sort(function (a, b) {
        if (a.name === 'sel' && b.name !== 'sel') {
            return 1;
        } else if (a.name !== 'sel' && b.name === 'sel') {
            return -11;
        }

        return 0;
    });

    return args.reduce(function (acc, item) {
        acc = item(acc);

        return acc;
    }, innerCollection);
}

/**
 * @params {String[]}
 */
function select(/* arguments */) {
    if (arguments.length === 0) {
        return;
    }

    var fieldsToSelect = [].slice.call(arguments);

    return function sel(collection) {

        if (!collection) { return; }

        return collection.map(function (item) {

            if (!fieldsToSelect || fieldsToSelect.length === 0) {
                return item;
            }

            const newItem = Object.assign({}, item);

            Object.keys(item).map(function (key) {
                if (fieldsToSelect.indexOf(key) === -1) {

                    delete newItem[key];
                }
            });

            return newItem;
        }, [])
    }
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return function filt(collection) {
        if (!collection || !property || !values || values.length === 0) {
            return;
        }

        return collection.filter(function (item) {
            return values.indexOf(item[property]) !== -1;
        });
    }
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};

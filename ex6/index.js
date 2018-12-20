// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var commandArr = command.split(" ");
    var cmd = commandArr[0];
    var arg1 = commandArr[1];
    var arg2 = commandArr[2];

    if (cmd === 'ADD') {
        if (!phoneBook[arg1]) {
            phoneBook[arg1] = [];
        }
        var phones = arg2.split(',');

        for (var phone of phones) {
            if (phoneBook[arg1].indexOf(phone) === -1) {
                phoneBook[arg1].push(phone);
            }
        }
    }

    if (cmd === 'REMOVE_PHONE') {
        var result = false;
        Object.keys(phoneBook).forEach(function (user) {
            if (phoneBook[user].indexOf(arg1) === -1) {
                return;
            }
            if (phoneBook[user].length === 1) {
                delete phoneBook[user];
            } else {
                phoneBook[user].splice(phoneBook[user].indexOf(arg1), 1);
            }

            result = true;
        });

        return result;
    }

    if (cmd === 'SHOW') {
        var sortedKeys
        return Object.keys(phoneBook).sort().map(
            function (item) {
                return item + ": " + phoneBook[item].join(', ');
            }
        );
    }
}

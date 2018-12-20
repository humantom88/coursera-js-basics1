/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function cell(hours, minutes, interval) {
    var newHours = hours,
        newMinutes = minutes;

    var unprocessedMinutes = minutes + interval;

    newHours += Math.floor(unprocessedMinutes / 60);
    newMinutes = unprocessedMinutes % 60;

    if (newHours > 23) {
        newHours %= 24;
    }

    newHours = ('0' + newHours).length === 2
        ? '0' + newHours
        : newHours;

    newMinutes = ('0' + newMinutes).length === 2
        ? '0' + newMinutes
        : newMinutes;

    return newHours + ":" + newMinutes;
};
/*
    На вход функция принимает 3 параметра: часы, минуты, интервал в минутах, на который нужно изменить время.
    Гарантируется, что любой из 3 параметров целое положительное число.
    Параметр часы принимает значение в диапазоне [0, 23].
    Параметр минуты принимает значение в диапазоне [0, 59].
    Прибавляемый интервал может быть больше 60 минут.
    Переход в следующие сутки должен корректно обрабатываться.
    Функция должна возвращать корректно отформатированное время: 1:2 –> 01:02
*/
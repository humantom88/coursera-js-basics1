/**
 * @param {String} date
 * @returns {Object}
 */

module.exports = function (date) {
    var obj = {
        date: new Date(date),
        get value() {
            var result = this.date.toLocaleString();
            var args = result.split(' ');
            var dateArgs = args[0].split("-");
            var year = dateArgs[0];
            var month = String(dateArgs[1]).length === 1
                ? "0" + dateArgs[1]
                : String(dateArgs[1])
            var days = String(dateArgs[2]).length === 1
                ? "0" + dateArgs[2]
                : String(dateArgs[2])

            return year + "-" + month + "-" + days + " " + args[1].slice(0, 5);
        }
    }

    var offset = obj.date.getTimezoneOffset() / 60;
    obj.date.setHours(obj.date.getHours());

    return Object.defineProperties(obj, {
        'add': {
            value: function (units, type) {
                switch (type) {
                    case 'hours':
                        this.date.setHours(this.date.getHours() + units);
                        break;
                    case 'months':
                        this.date.setMonth(this.date.getMonth() + units);
                        break;
                    case 'days':
                        this.date.setHours(this.date.getHours() + units * 24);
                        break;
                    case 'minutes':
                        this.date.setMinutes(this.date.getMinutes() + units);
                        break;
                    default:
                        throw new TypeError();
                }
                return this;
            },
            enumerable: false,
            configurable: true
        },

        'subtract': {
            value: function (units, type) {
                switch (type) {
                    case 'hours':
                        this.date.setHours(this.date.getHours() - units);
                        break;
                    case 'months':
                        this.date.setMonth(this.date.getMonth() - units);
                        break;
                    case 'days':
                        this.date.setHours(this.date.getHours() - units * 24);
                        break;
                    case 'minutes':
                        this.date.setMinutes(this.date.getMinutes() - units);
                        break;
                    default:
                        throw new TypeError();
                }
                return this;
            },
            enumerable: false,
            configurable: true
        }
    });
};

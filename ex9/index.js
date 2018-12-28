module.exports = {
    subscribers: [],
    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        this.subscribers.push({
            event: event,
            subscriber: subscriber,
            handler: handler.bind(subscriber)
        });

        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        this.subscribers = this.subscribers.filter(function (sub) {
            return !(event === sub.event && subscriber === sub.subscriber)
        });

        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        this.subscribers.forEach(function (sub) {
            if (sub.event === event) {
                sub.handler();
            }
        })

        return this;
    }
};

const helpers = require('./helper');

module.exports = {
    onMount() {
        this.subscribeTo(this.getEl()).on('click', this.increment);
    },
    increment() {
        alert('button clicked!');
        this.hola();
    },
    ...helpers
};
module.exports = {
    onMount() {
        this.subscribeTo(this.getEl()).on('click', this.increment);
    },
    increment() {
        alert('button clicked!');
    }
};
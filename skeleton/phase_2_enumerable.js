
function callback(el) {

}

Array.prototype.myEach = function() {
    for (let i = 0; i < this.length; i++) {
        this[i].callback()
    }
}

